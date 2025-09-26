"use client";

import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import axios from "axios";

const BASE_URL = "https://infodazz.org";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await axios.get("/api/gallery");
        const galleryData = res.data?.rows || [];

        // const preparedPhotos = galleryData.map((photo) => ({
        //   src: photo.image_path.startsWith("http")
        //     ? photo.image_path
        //     : `${BASE_URL}${photo.image_path}`,
        // }));
const preparedPhotos = galleryData.map((photo) => ({
  src: photo.image_path.startsWith("http")
    ? photo.image_path
    : photo.image_path, // use as-is
}));

        setPhotos(preparedPhotos);
      } catch (err) {
        console.error("Failed to load gallery:", err);
      }
    };

    fetchPhotos();
  }, []);

  const breakpoints = {
    default: 3,
    1024: 2,
    640: 1,
  };

  return (
    <section className="py-8">
      <div className="mx-auto max-w-screen-xl px-4">
        {photos.length === 0 ? (
          <p className="text-center text-gray-500">No photos found.</p>
        ) : (
          <Masonry
            breakpointCols={breakpoints}
            className="flex gap-4"
            columnClassName="masonry-column space-y-4"
          >
            {photos.map((photo, i) => (
              <img
                key={i}
                src={photo.src}
                alt=""
                className="rounded-lg w-full cursor-pointer"
                onClick={() => setIndex(i)}
              />
            ))}
          </Masonry>
        )}

        <Lightbox
          index={index}
          slides={photos}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </div>
    </section>
  );
};

export default PhotoGallery;
