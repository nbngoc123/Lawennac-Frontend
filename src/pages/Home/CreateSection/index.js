import React from "react";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "./CreateSection.css"; // Tạo file CSS riêng nếu cần

const { Title, Paragraph } = Typography;

function CreateSection() {
  const navigate = useNavigate();

  const handleCreateNow = () => {
    navigate("lawennac/create"); // Đường dẫn tới trang "Create"
  };

  return (
    <div className="create-section">
      <div className="create-content">
        <Title level={2} style={{ color: "#001529" }}>
          Ready to Bring Your Ideas to Life?
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#595959" }}>
          Start creating now with our powerful tools and resources. 
          Click the button below to get started!
        </Paragraph>
        <Button
          type="primary"
          size="large"
          onClick={handleCreateNow}
          style={{
            backgroundColor: "#1890ff",
            borderColor: "#1890ff",
            padding: "0 40px",
          }}
        >
          Create Now
        </Button>
      </div>
    </div>
  );
};

export default CreateSection;
