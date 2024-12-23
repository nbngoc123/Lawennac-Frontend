import { Row, Col, Card, Tooltip, message, Button, Spin } from 'antd';
import { Layout, Image, Space } from 'antd';
import { 
  HistoryOutlined, CopyOutlined, DownloadOutlined, LeftOutlined, 
  RightOutlined, RotateLeftOutlined, RotateRightOutlined, SwapOutlined, 
  UndoOutlined, ZoomInOutlined, ZoomOutOutlined 
} from '@ant-design/icons';
import './HistoryArea.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import axios from "axios";

const HistoryArea = () => {
  // const [loading, setLoading] = useState(true); 
  const [images, setImages] = useState([]); 
  const res = useSelector(state => state.generateImageReducer);
  const userLogined = useSelector(state => state.userReducer);
  
  // console.log(res);

  const fetchImages = async (url) => {
    try {
      const response = await axios.get(url);
      setImages(response.data.reverse() || []); 
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchImages(`http://localhost:3006/api/image-requests/${userLogined.userId}`);
  }, [res.status, userLogined.userId]);

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
    <>


    <Layout className='scrollable-layout-history-area'>
      <header style={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: '#000' }}>
        <h3 style={{ backgroundColor: '#303030', padding: '4px 7px',borderRadius: '4px', color: '#fff', textAlign: 'center' }}> 
          <HistoryOutlined /> History
        </h3>
      </header>

       {/* // Hiển thị nội dung khi không loading */}
       { res.status ? ( 
        <div style={{ minHeight: '360px' }}>

          <Row justify="center" align="middle" style={{ minHeight: '350px', backgroundColor: '#303030' }}> 
            <Col>
              <Spin size="large" />
            </Col>
          </Row>
        </div>

      ) : (''
      )}
        <Row gutter={[20, 20]} style={{ padding: '16px' }}>
          {images.map((image, imageIndex) => (
            <Col 
              style={{backgroundColor: '#303030', paddingLeft: '0px', paddingBottom: '5px', paddingRight:   '0px'}} 
              key={imageIndex} 
              xs={24} 
              sm={24} 
              lg={24}
            >
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
                <Col  
                  xs={24} 
                  sm={12} 
                  lg={12}
                >  
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
              </Row>  
            </Col>
          ))}
        </Row> 
    </Layout>  

    </>

  );  
};

export default HistoryArea;