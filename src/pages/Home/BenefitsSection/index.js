import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { CheckCircleOutlined, RocketOutlined, SettingOutlined, FolderOpenOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <RocketOutlined style={{ fontSize: "40px", color: "#1890ff" }} />,
      title: "Achieve Excellence Faster",
      description: "With Lawennac, meeting your goals on time is a given. Our platform combines cutting-edge technology, intuitive tools, and a rich content library to keep you ahead of the curve.",
    },
    {
      icon: <SettingOutlined style={{ fontSize: "40px", color: "#52c41a" }} />,
      title: "Next-Level AI Tools",
      description: "Leverage Lawennac’s advanced AI to simplify and elevate your projects. From automated legal analysis to tailored document generation, our tools ensure accuracy and efficiency.",
    },
    {
      icon: <CheckCircleOutlined style={{ fontSize: "40px", color: "#faad14" }} />,
      title: "Precision at Your Fingertips",
      description: "Customize every detail with unmatched control. Maintain consistent styles and fine-tune your work to reflect professionalism and high standards across all your outputs.",
    },
    {
      icon: <FolderOpenOutlined style={{ fontSize: "40px", color: "#ff4d4f" }} />,
      title: "Top-Tier Resources",
      description: "Gain access to an extensive repository of templates, legal references, and resources. Lawennac empowers you to achieve outstanding results effortlessly.",
    },
  ];

  return (
    <div style={{ background: "#f9f9f9", padding: "50px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Title level={2}>Empower Your Vision with Lawennac</Title>
        <Paragraph style={{ fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
          Turn your innovative ideas into reality effortlessly with Lawennac. From professional-grade features to seamless customization, we provide the tools, resources, and precision you need to excel.
        </Paragraph>
      </div>
      <Row gutter={[32, 32]} justify="center">
        {benefits.map((benefit, index) => (
          <Col xs={24} sm={12} md={12} lg={6} key={index}>
            <Card
              bordered={false}
              style={{
                textAlign: "center",
                background: "#fff",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <div style={{ marginBottom: "20px" }}>{benefit.icon}</div>
              <Title level={4}>{benefit.title}</Title>
              <Paragraph>{benefit.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BenefitsSection;
