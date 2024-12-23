import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedTag } from "../../actions/counter";
import { Tag, Spin } from "antd";
import axios from "axios";
import "./Topic.css";

const Topics = () => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]); // State chứa danh sách tag
  const [loading, setLoading] = useState(true); // Loading state
  const selected = useSelector((state) => state.tagReducer); // Redux state cho tag đã chọn

  // Fetch tags từ API
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get(
          "https://civitai.com/api/v1/tags?limit=10"
        );
        setTags(response.data.items);
      } catch (error) {
        console.error("Error fetching tags:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTags();
  }, []);

  // Hàm xử lý khi click vào tag
  const handleTagClick = (tag) => {
    if (selected?.name !== tag.name) {
      dispatch(selectedTag(tag.name, tag.link)); // Dispatch nếu tag khác tag hiện tại
    }
  };

  return (
    <div style={{ margin: "20px 0", display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {loading ? (
        <Spin /> // Hiển thị loading spinner trong khi fetch data
      ) : (
        tags.map((tag) => (
          <Tag
            key={tag.name} // Key dựa vào tag.name (đảm bảo unique)
            color={selected?.name === tag.name ? "geekblue" : "blue"}
            style={{ cursor: "pointer", transition: "all 0.3s ease" }}
            onClick={() => handleTagClick(tag)} // Gọi hàm xử lý
          >
            {tag.name}
          </Tag>
        ))
      )}
    </div>
  );
};

export default Topics;
