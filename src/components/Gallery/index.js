import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import { useSelector } from "react-redux";
import Masonry from "react-masonry-css";
import { Image, Spin, Skeleton } from "antd";
import ImageCreate from "./ImageCreator";
import './gallery.css'
const Gallery = () => {
  // const selectedTag = useSelector((state) => state.tagReducer);
  const [images, setImages] = useState([]); // State duy nhất cho hình ảnh
  const [loading, setLoading] = useState(false);
  const didMountRef = useRef(false); // Ref để theo dõi lần render đầu tiên

  // Config responsive cho Masonry
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1,
  };

  // Hàm fetch hình ảnh
  const fetchImages = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setImages(response.data.items || []); // Set state hình ảnh
    } catch (error) { 
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch mặc định khi component mount
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      fetchImages("https://civitai.com/api/v1/images?limit=100");
    }
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <Spin size="small" />
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.length > 0
            ? images.map((image, index) => (
                <div key={image.id || `image-${index}`} style={{ position: "relative", marginBottom: "16px",  transition: "transform 0.3s ease" }} className="gallery-image" >
                  <Image
                    src={image.url}
                    alt={`Gallery ${index}`}
                    style={{ width: "100%", borderRadius: "8px" }}
                    preview={false}
                    fallback={<div>Loading...</div>}
                  />
                  <ImageCreate key={image.id || `image-${index}`} image={image} />
                </div>
              ))
            : Array.from({ length: 12 }).map((_, index) => (
                <div key={index} style={{ marginBottom: "16px" }}>
                  <Skeleton.Image
                    active
                    style={{
                      width: "100%",
                      height: "200px",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              ))}
        </Masonry>
      )}
    </div>
  );
};

export default Gallery;
