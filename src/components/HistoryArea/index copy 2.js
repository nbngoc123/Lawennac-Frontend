import { Row, Col, Card, Tooltip, message, Button } from 'antd';
import { Layout, Image, Space } from 'antd';
import { HistoryOutlined, CopyOutlined, DownloadOutlined, LeftOutlined, RightOutlined, RotateLeftOutlined, RotateRightOutlined, SwapOutlined, UndoOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import './HistoryArea.css'
import { useEffect, useState } from 'react';
import axios from "axios";

const HistoryArea = () => {
  // const images = [
  //   { 
  //     title: 'LAWENNAC', 
  //     src: ['https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'] 
  //   },
  //   { 
  //     title: 'Anime girl', 
  //     src: [
  //       'https://tse2.mm.bing.net/th/id/OIP.8aKPegkbGEHkldvO_kruygHaE8?rs=1&pid=ImgDetMain',
  //       'https://tse2.mm.bing.net/th/id/OIP.8aKPegkbGEHkldvO_kruygHaE8?rs=1&pid=ImgDetMain'
  //     ] 
  //   }
  // ];
  const [loadGenarateImage, setLoadGenarateImage] = useState(true);

  const [images, setImages] = useState([]); // State duy nhất cho hình ảnh
  const [images1, setImages1] = useState([]); // State duy nhất cho hình ảnh
  const fetchImages = async (url) => {
    try {
      const response = await axios.get(url);
      setImages1(response.data.reverse() || []); // Set state hình ảnh
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
    }
  };

  // Fetch mặc định khi component mount
  useEffect(() => {
    fetchImages("http://localhost:3006/api/image-requests/5");
  }, []);

  const handleCopy = (title) => {
    navigator.clipboard.writeText(title).then(() => {
      message.success(`${title} copied to clipboard!`);
    }).catch(() => {
      message.error('Failed to copy!');
    });
  };

  const handleDownload = (url) => {
    const suffix = url.slice(url.lastIndexOf('.'));
    const filename = Date.now() + suffix;
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(blobUrl);
        link.remove();
      });
  };

  return (
    <Layout className='scrollable-layout-history-area'>
      <header style={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: '#000' }}>
        <h3 style={{ backgroundColor: '#303030', padding: '4px 7px',borderRadius: '4px', color: '#fff', textAlign: 'center' }}> <HistoryOutlined /> History</h3>
      </header>

      <Row gutter={[20, 20]} style={{ padding: '16px' }}>
        {images1.map((image, imageIndex) => (
          <Col style={{backgroundColor: '#303030', paddingLeft: '0px', paddingBottom: '5px', paddingRight:   '0px'}} key={imageIndex} xs={24} sm={24} lg={24}>
            <Row gutter={[8, 5]}>
              <Col span={24}>
                <Tooltip
                  title={
                    <div>
                      <span style={{color: '#fff' }}>Prompt: {image.positive_prompt}</span>
                      <Button
                        icon={<CopyOutlined />}
                        size="small"
                        style={{ marginLeft: '8px' }}
                        onClick={() => handleCopy(image.positive_prompt)}
                      >
                        Copy
                      </Button>
                    </div>
                  }
                >
                  <p style={{ fontSize: '0.7rem', margin: 'auto',overflow: 'hidden', paddingRight: '90%', paddingBottom: '10px', paddingLeft: '3px', backgroundColor: '#000', color: '#fff', cursor: 'pointer' }}>{image.positive_prompt}</p>
                </Tooltip>
              </Col>
              {/* {image.src.map((url, urlIndex) => ( */}
                <Col 
                // key={urlIndex} 
                xs={24} sm={12} lg={12}>
                  <Image.PreviewGroup
                    preview={{
                      toolbarRender: (
                        _,
                        {
                          actions: {
                            onActive,
                            onFlipY,
                            onFlipX,
                            onRotateLeft,
                            onRotateRight,
                            onZoomOut,
                            onZoomIn,
                            onReset,
                          },
                        },
                      ) => (
                        <Space size={12} className="toolbar-wrapper">
                          <LeftOutlined onClick={() => onActive?.(-1)} />
                          <RightOutlined onClick={() => onActive?.(1)} />
                          <DownloadOutlined onClick={() => handleDownload(image.image_url)} />
                          <SwapOutlined rotate={90} onClick={onFlipY} />
                          <SwapOutlined onClick={onFlipX} />
                          <RotateLeftOutlined onClick={onRotateLeft} />
                          <RotateRightOutlined onClick={onRotateRight} />
                          <ZoomOutOutlined onClick={onZoomOut} />
                          <ZoomInOutlined onClick={onZoomIn} />
                          <UndoOutlined onClick={onReset} />
                        </Space>
                      ),
                    }}
                  >
                    <Image
                      alt={image.positive_prompt}
                      src={image.image_url}
                      style={{
                        backgroundColor: '#1a1a1a',
                        color: '#fff',
                        width: '100%',
                        margin: 'auto'
                      }}
                    />
                  </Image.PreviewGroup>
                </Col>
              {/* ))} */}
            </Row>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default HistoryArea;
