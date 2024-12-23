import { Row, Col, Card } from 'antd';
import { Layout } from 'antd';

const HistoryArea = () => {
  const images = [
    { title: 'LAWENNAC', src: 'image1.jpg' },
    { title: 'Anime girl', src: 'image2.jpg' },
  ];

  return (
        <Layout>
            <header>
            <h3 style={{ color: '#fff', backgroundColor: '#303030'}}>History</h3>

            </header>

            <Row gutter={[16, 16]}>
                {images.map((image, index) => (
                <Col key={index} xs={24} sm={24} lg={24}>
                    <Row>
                        data
                    </Row>
                    <Card
                    hoverable
                    cover={<img alt={image.title} src={image.src} />}
                    style={{ backgroundColor: '#1a1a1a', color: '#fff' }}
                    >
                    {image.title}
                    </Card>
                </Col>
                ))}
            </Row>
        </Layout>
      
  );
};
export default HistoryArea;