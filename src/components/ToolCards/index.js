import React, { useRef } from 'react';
import { Image , Card, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './style.css'
const ToolCards = () => {
  const tools = [
    { 
      title: 'Generate images', 
      description: 'From words to images', 
      link: '/lawennac/create',
      image: require('./img/i1.jpg') 
      },
    { 
      title: 'Generate videos', 
      description: 'Create stunning videos from text or images', 
      link: '/lawennac/create',
      image: require('./img/i2.jpg') 
    },
    { 
      title: 'Reimagine', 
      description: 'Variations with AI', 
      link: '/reimagine',
      image: require('./img/i3.jpg') 
    },
    { 
      title: 'Sketch to image', 
      description: 'From doodle to whatever you imagine', 
      link: '/sketch-to-image',
      image: require('./img/i4.jpg')
},
    { 
      title: 'Upscale', 
      description: 'Increase resolution', 
      link: '/upscale',
      image: require('./img/i5.jpg')
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === 'left' ? -300 : 300;
    }
  };

  return (
    <div style={{ position: 'relative', margin: '20px 0' }}>
      <Button
        type="link"
        shape="circle"
        icon={<LeftOutlined />}
        onClick={() => scroll('left')}
        style={{ backgroundColor: '#1f1f1f', position: 'absolute', left: 0, top: '50%', zIndex: 1, transform: 'translateY(-50%)' }}
      />

<div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          overflowX: 'hidden', 
          gap: '16px',
          padding: '10px',
          whiteSpace: 'nowrap',
        }}
      >
        {tools.map((tool, index) => (
          <Link to={tool.link} key={index} style={{ flex: '0 0 250px', textDecoration: 'none' }}>
            <div 
              style={{
                borderRadius: '8px',
                border: '1px solid #1f1f1f',
                backgroundColor: '#1a1a1a',
                color: '#fff',
                textAlign: 'center',
                cursor: 'pointer', 
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <Image 
                src={tool.image} 
                alt={tool.title} 
                preview={false} 
                height={300} 
                width={300}
                className='tool-cart-image'
                style={{ transition: "transform 0.3s ease" }}
              />
              <div style={{
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%',
                padding: '16px',
                backgroundColor: 'rgba(0, 0, 0, 0)', 
                color: '#fff', 
                fontFamily: 'revert'
               }}>
                <h3 style={{ color: '#fff' }}>{tool.title}</h3>
                <p style={{ color: '#ccc' }}>{tool.description}</p>
              </div> 
            </div>
          </Link>
        ))}
      </div>

      <Button
        type="link"
        shape="circle"
        icon={<RightOutlined />}
        onClick={() => scroll('right')}
        style={{ backgroundColor: '#1f1f1f', position: 'absolute', right: 0, top: '50%', zIndex: 1, transform: 'translateY(-50%)' }}
      />
    </div>
  );
};

export default ToolCards;