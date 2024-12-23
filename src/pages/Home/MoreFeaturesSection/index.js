import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { Image, Typography, Avatar } from "antd";
import "./style.css";
const { Title } = Typography;

function MoreFeaturesSection() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://civitai.com/api/v1/models?limit=20&types=Checkpoint"
        );
        const data = await response.json();
        setImages(data.items);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div style={{ background: "#f9f9f9", padding: "50px 20px" }}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image) => {
          // Check if the necessary data exists before rendering
          const imageUrl = image?.modelVersions[1]?.images[0]?.url;
          if (!imageUrl) {
            return null; // Skip rendering if no image URL
          }

          return (
            <div
              className="image-feature"
              key={image.id}
              style={{
                position: "relative",
                transition: "transform 0.3s ease",
              }}
            >
              <Image
                src={imageUrl}
                alt={image?.name}
                preview={false}
                style={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                  borderRadius: "8px",
                }}
              />
              <div
                className="info-image"
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: "8px",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  padding: "7px 3px 7px 7px",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "12px",
                  lineHeight: "1.5",
                  display: "flex",
                  alignItems: "center",
                  width: "95%",
                }}
              >
                <Avatar
                  src={image.creator.image}
                  size="large"
                  style={{ marginRight: "8px" }}
                />
                <div>
                  <Title level={5} style={{ color: "#fff", margin: 0 }}>
                    {image.name}
                  </Title>
                  <p style={{ color: "#fff", margin: 0, fontSize: "10px" }}>
                    by {image.creator.username}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}

export default MoreFeaturesSection;