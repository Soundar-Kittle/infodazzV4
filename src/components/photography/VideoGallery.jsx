"use client";

import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { X } from "lucide-react";


const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("/api/videogallery/recent");
        const data = await res.json();
        console.log(data)
        // Normalize video structure
        const videoItems = data.map((video) => ({
          videoId: video.video_id,
          title: video.title,
          thumbnail: video.thumbnail_url,
        }));

        setVideos(videoItems);
      } catch (error) {
        console.error("Failed to load videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const openModal = (videoId) => {
    setSelectedVideo(videoId);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setShowModal(false);
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {loading ? (
          <Loading />
        ) : videos.length === 0 ? (
          <p className="text-center text-gray-500">No videos found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="cursor-pointer"
                onClick={() => openModal(video.videoId)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <p className="text-sm mt-2 text-gray-700 line-clamp-2">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
<div className="relative w-full max-w-4xl mx-4">
  {/* ✅ Close button outside modal */}
  <button
    onClick={closeModal}
    className="absolute -top-5 -right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-600 hover:text-red-600 shadow-md cursor-pointer"
    title="Close"
  >
    <X className="w-6 h-6" />
  </button>

  {/* ✅ Modal Content */}
  <div className="bg-white p-4 rounded-lg shadow-xl">
    <div className="relative w-full pt-[56.25%] rounded-md overflow-hidden max-h-[80vh]">
      <iframe
        src={`https://www.youtube.com/embed/${selectedVideo}`}
        title="YouTube Video"
        allowFullScreen
        className="absolute inset-0 w-full h-full rounded-md"
      />
    </div>
  </div>
</div>

        </div>
      )}
    </section>
  );
};

export default VideoGallery;
