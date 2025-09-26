"use client";

import React, { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import Loading from "./Loading";



const PhotoGallery = lazy(() => import("./PhotoGallery"));
const VideoGallery = lazy(() => import("./VideoGallery"));


const Gallery = () => {
  const [postData, setPostData] = useState([]);
  const [photoData, setPhotoData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Photography");
  const BASE_URL = "https://dev.infodazz.org";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [photos, events, videos] = await Promise.all([
          axios.get(`${BASE_URL}/allphotos`),
          axios.get(`${BASE_URL}/allposts`),
          axios.get(`${BASE_URL}/recentvideos`),
        ]);
        setPhotoData(photos.data);
        setEventData(events.data);
        setVideoData(videos.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const combined = [...photoData, ...eventData, ...videoData];
    const unique = Array.from(new Set(combined));
    const shuffled = unique.sort(() => 0.5 - Math.random());
    setPostData(shuffled.slice(0, 15));
  }, [photoData, eventData, videoData]);

  const tabs = [
    { name: "Photography" },
    { name: "Video Production" },
    // { name: "All" },
    // { name: "Events" },
  ];

  return (
    <div className="py-10 px-4 md:px-8 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2 text-sm rounded-full border transition ${
              activeTab === tab.name
                ? "bg-primary text-white shadow"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Gallery Content */}
      {loading ? (
        <Loading />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Suspense fallback={<Loading />}>
              {activeTab === "Photography" && (
                <PhotoGallery categoryData={photoData} />
              )}
              {activeTab === "Video Production" && (
                <VideoGallery videoData={videoData} />
              )}
              {/* {activeTab === "All" && <AllGallery postData={postData} />} */}
              {/* {activeTab === "Events" && <EventGallery postData={eventData} />} */}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Gallery;
