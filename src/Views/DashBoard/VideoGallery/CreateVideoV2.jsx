

"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {ArrowLeftRight} from "lucide-react";


import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableVideoCard from "@/components/videogallery/SortableVideoCard";
import { Button } from "@/components/ui/button.jsx";

const CreateVideoV2 = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const channelId = process.env.NEXT_PUBLIC_CHANNEL_ID;
  // const BASE_URL = "https://infodazz.org"
  //  const BASE_URL = "http://localhost:3000"
    const API_URL = "/api/videogallery" 

  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const res = await axios.get(`${API_URL}`);
      const sorted = res.data.rows.sort((a, b) => a.display_order - b.display_order);
      setVideos(sorted);
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
  };

  useEffect(() => {
    console.log("API Key:", process.env.NEXT_PUBLIC_GOOGLE_API_KEY);
    fetchVideos();
  }, []);

const updateVideoHandler = async () => {
  try {
    const [existingRes, youtubeRes] = await Promise.all([
      axios.get(`${API_URL}`),
      axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
      ),
    ]);

    const existingVideos = existingRes.data.rows || [];

    const existingOrderMap = {};
    existingVideos.forEach((video) => {
      existingOrderMap[video.video_id] = video.order_index;
    });

    const maxOrder = existingVideos.reduce(
      (max, video) => Math.max(max, video.order_index),
      -1
    );

    const videoIds = youtubeRes.data.items
      .map((v) => v.id.videoId)
      .join(",");

    const statsRes = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds}&part=statistics`
    );

    const videoStats = statsRes.data.items.reduce((map, obj) => {
      map[obj.id] = obj.statistics;
      return map;
    }, {});

    let nextOrder = maxOrder + 1;

    const updatedVideos = youtubeRes.data.items.map((video) => {
      const vid = video.id.videoId;

      return {
        id: vid,
        title: video.snippet.title,
        thumbnail: video.snippet.thumbnails.medium.url,
        display_order: existingOrderMap[vid] ?? nextOrder++,
        statistics: videoStats[vid] || {},
      };
    });

    await axios.post(`${API_URL}`, { updatedVideos });
    toast.success("Videos updated");
    fetchVideos();
  } catch (error) {
    console.error(error);
    toast.error("Failed to update videos");
  }
};


  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = videos.findIndex((v) => v.id === active.id);
      const newIndex = videos.findIndex((v) => v.id === over.id);
      const newOrder = arrayMove(videos, oldIndex, newIndex);
      setVideos(newOrder);

      try {
        await axios.post(`/api/videogallery/reorder`, {
          reordered: newOrder.map((v, idx) => ({ id: v.id, display_order: idx })),
        });
        toast.success("Order saved");
      } catch (err) {
        toast.error("Failed to save order");
      }
    }
  };

  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <Button className="mb-4" onClick={updateVideoHandler}>
       <ArrowLeftRight/> Sync Videos from YouTube
      </Button>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={videos.map((v) => v.id)} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video) => (
            <SortableVideoCard key={video.id} video={video} onStatusToggle={fetchVideos} />
          ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default CreateVideoV2;
