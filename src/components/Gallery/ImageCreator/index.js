import React, { useState } from 'react';
import { Card, Avatar, Tooltip, Dropdown, Menu, Button, message  } from 'antd';
import { EditOutlined, ArrowRightOutlined, UserOutlined, MoreOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setSelectedImage } from '../../../actions/imageActions';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

function ImageCreate({ image }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCreateClick = () => {
    navigate('/lawennac/create');
    dispatch(setSelectedImage(image.meta)); // Dispatch the image data
  
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        message.success('Copied to clipboard!');
      })
      .catch(() => {
        message.error('Failed to copy!');
      });
  };
    const [hovered, setHovered] = useState(false);
    const menu = (
        <Menu>
          <Menu.Item key="1">View Details</Menu.Item>
          <Menu.Item key="2">Report</Menu.Item>
          <Menu.Item key="3">Share</Menu.Item>
        </Menu>
      );
  return (
    <>
    <div
        style={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '7px 3px 7px 7px',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '12px',
            lineHeight: '1.5',
        }}
          >
      <Tooltip
      trigger={['click']}
        title={
          <div>
          <p onClick={() => copyToClipboard(image.meta?.prompt || 'N/A')} style={{ cursor: 'pointer',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      WebkitLineClamp: 4,}}>
            <strong>Prompt:</strong> {image.meta?.prompt || 'N/A'}
          </p>
          <p onClick={() => copyToClipboard(image.meta?.negativePrompt || 'N/A')} style={{ cursor: 'pointer', display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      WebkitLineClamp: 4,}}>
            <strong>Negative Prompt:</strong> {image.meta?.negativePrompt || 'N/A'}
          </p>
          <p onClick={() => copyToClipboard(image.meta?.clipSkip || 0)} style={{ cursor: 'pointer' }}>
            🎯 Clip Skip: {image.meta?.clipSkip || 0}
          </p>
          <p onClick={() =>copyToClipboard(image.meta?.steps || 0)} style={{ cursor: 'pointer' }}>
            🔄 Steps: {image.meta?.steps || 0}
          </p>
          <p onClick={() => copyToClipboard(image.meta?.seed || 'N/A')} style={{ cursor: 'pointer' }}>
            🌱 Seed: {image.meta?.seed || 'N/A'}
          </p>
          <p onClick={() => copyToClipboard(image.meta?.cfgScale || 'N/A')} style={{ cursor: 'pointer' }}>
            🌱 cfgScale: {image.meta?.cfgScale || 'N/A'}
          </p>
        </div>
        }
        color="rgba(0, 0, 0, 0.85)"
        overlayStyle={{ maxWidth: '300px' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop: '8px',
            cursor: 'pointer',
          }}
        >
          <InfoCircleOutlined style={{ marginRight: '4px' }} />
          {/* <span>View Metadata</span> */}
        </div>
      </Tooltip>
    </div>
    <div
        style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            backgroundColor: 'rgba(0, 0, 0, 0.27)',
            padding: '4px 0px',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '12px',
            lineHeight: '1.5',
        }}
          >
        <Dropdown overlay={menu} trigger={['click']} >
            <Button style={
                { backgroundColor: 'transparent', border: 'none', padding: '0px', color: '#fff' }
            }>
            <MoreOutlined style={{ fontSize: '30px', cursor: 'pointer' }} />

            </Button>
        </Dropdown>
    </div>

    <div
        style={{
            position: 'absolute',
            top: '80px',
            right: '8px',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            padding: '7px 3px 7px 3px',
            color: '#fff',
            lineHeight: '1.5',
        }}
          >
      <Button
        type="primary"
        shape="round"
        icon={hovered ? '' : <EditOutlined />}
        size="middle"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleCreateClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: hovered ? '0 16px' : '0',
          transition: 'all 0.3s ease',
          background: '#fff',
          color: '#000',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          border: '1px solid #d9d9d9',
          width: hovered ? '130px' : '48px',
          overflow: 'hidden',
        }}
      >
        {hovered ? (
          <>
            CREATE
            <ArrowRightOutlined style={{ marginLeft: '8px' }} />
          </>
        ) : null}
      </Button>
    </div>
    <div
        style={{
            position: 'absolute',
            bottom: '8px',
            left: '8px',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '8px',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '12px',
            lineHeight: '1.5',
        }}
          >
      <Meta
        avatar={<Avatar
          // src={item.creator.image}
          icon={<UserOutlined />}
          fallback={<UserOutlined />}
        />}
        title={image.username || 'Unknown Creator'}
        description={
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '8px'}}>
            <div className="stat-item">
              {/* <HeartOutlined style={{ color: 'red', marginRight: '4px' }} /> */}
              ❤️
              {image.stats.likeCount || 0}
            </div>
            <div className="stat-item" style={{padding: '0px 16px'}}>
              {/* <MessageOutlined style={{ color: 'blue', marginRight: '4px' }} /> */}
              💬
              {image.stats.commentCount || 0}
            </div>
            <div className="stat-item">
              {/* <StarOutlined style={{ color: 'gold', marginRight: '4px' }} /> */}
              ⭐
              {image.stats.heartCount || 0}
            </div>
          </div>
        }
      />
    </div>  
    </>

  );
}

export default ImageCreate;
