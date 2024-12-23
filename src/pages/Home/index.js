import React, { useState } from 'react';
import { Layout, Carousel, Typography, Row, Button} from 'antd';
import 'antd/dist/reset.css';
import './home.css';
import Gallery from '../../components/Gallery';
import ToolCards from '../../components/ToolCards';
import BenefitsSection from './BenefitsSection';
import MoreFeaturesSection from './MoreFeaturesSection';
import CreateSection from './CreateSection';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const App = () => {
  const [showMore, setShowMore] = useState(false); // State để quản lý nội dung thêm

  const slideImages = [
    'https://via.placeholder.com/1200x400?text=Slide+1',
    'https://via.placeholder.com/1200x400?text=Slide+2',
    'https://via.placeholder.com/1200x400?text=Slide+3',
  ];

  // Hàm xử lý khi nhấn "Learn More"
  const handleLearnMore = () => {
    setShowMore(true); // Hiển thị nội dung bổ sung
  };

  return (
    <Layout>

      <Content>
        <Carousel autoplay>
          {slideImages.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </div>
          ))}
        </Carousel>

        <div style={{ padding: '0px 50px', textAlign: 'center' }}>
          <Title level={2}>Welcome to Our Website</Title>
          <Paragraph>
            This is a showcase website built with React and Ant Design.
          </Paragraph>

          <ToolCards />
          <CreateSection />

          { !showMore && <Button
            type="link"
            size="large"
            style={{ marginTop: '20px' }}
            onClick={handleLearnMore} // Gọi hàm khi nhấn
          >
            Learn More
          </Button>}
        </div>

        {/* Nội dung bổ sung */}
        {showMore && (
          <div style={{ padding: '50px', textAlign: 'center', background: '#f5f5f5' }}>
            <Title level={3}>Khám phá thêm, sáng tạo không giới hạn</Title>
            <Paragraph>
              Kết hợp khám phá và lợi ích của việc sử dụng mô hình.
            </Paragraph>
            <Row gutter={[16, 16]}>
              <Row>
              <MoreFeaturesSection />

              </Row>
              <Row style={{ 
              padding: '50px', 
              textAlign: 'center', 
              background: '#f5f5f5',
              display: 'flex',
              flexDirection: 'column',  
              alignItems: 'center',     
              width: '100%',
            }}>
              <Title level={3}>Khám phá ngay!</Title>
              <Paragraph>
                Tham gia ngay, biến trí tưởng tượng thành hình ảnh tuyệt đẹp!
              </Paragraph>
            </Row>
              <Row>
                <Gallery />
              </Row>
              <BenefitsSection />
            </Row>
            
          </div>
        )}
      </Content>

    </Layout>
  );
};

export default App;
