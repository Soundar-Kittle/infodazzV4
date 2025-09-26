import React, { useState, useEffect } from "react";
import classes from "./Gallery.module.css";
import { Modal } from "react-bootstrap";
import Banner from "../../../assets/banner_gold.svg";
import { BASE_URL } from "../../../utils/config";
import axios from "axios";
import Loading from "../../../utils/Loading"; // Assuming you have a Loading component
import placeholderImage from "../../../assets/placeholder.png"; // Placeholder image

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState("");
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
      .get(`${BASE_URL}/recentposts`)
      .then((result) => {
        setPostData(result.data);
        setIsLoading(false); // Data fetched, stop loading
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // In case of error, stop loading
      });
  }, []);

  const openModal = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedPost("");
    setShowModal(false);
  };

  return (
    <>
      <div className="m-3 p-3">
        <section>
          <h3 className="text-center">Recent Events</h3>
          <img
            src={Banner}
            alt={"decorative banner"}
            className={classes.banner}
          />
        </section>

        {isLoading ? (
          <Loading /> // Show a loading spinner while data is being fetched
        ) : (
          <div className="container">
            <div className={classes.grid}>
              {postData &&
                postData.map((post, idx) => (
                  <div className={classes.post} key={idx}>
                    {post.file && post.file.endsWith(".mp4") ? (
                      <video
                        className={classes.video}
                        id={`video_${idx}`}
                        onClick={() => openModal(post)}
                        onError={(e) => {
                          e.target.src = placeholderImage; // Fallback to placeholder image
                        }}
                      >
                        <source src={`/videos/${post.file}`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={`/images/${post.file}`}
                        className={classes.img}
                        onClick={() => openModal(post)}
                        alt=""
                        onError={(e) => {
                          e.target.src = placeholderImage; // Fallback to placeholder image
                        }}
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}

        <Modal
          show={showModal}
          onHide={closeModal}
          size="xl"
          centered
          contentClassName={classes.modal}
        >
          <section className={classes.modalBody}>
            {selectedPost &&
            selectedPost.file &&
            selectedPost.file.endsWith(".mp4") ? (
              <video className={classes.modalVideo} autoPlay muted>
                <source
                  src={`/videos/${selectedPost.file}`}
                  type="video/mp4"
                  onError={(e) => {
                    e.target.src = placeholderImage; // Fallback to placeholder image
                  }}
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={`/images/${selectedPost.file}`}
                className={classes.modalImage}
                alt=""
                onError={(e) => {
                  e.target.src = placeholderImage; // Fallback to placeholder image
                }}
              />
            )}
            <button className="" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </section>
        </Modal>
      </div>
    </>
  );
};

export default Gallery;
