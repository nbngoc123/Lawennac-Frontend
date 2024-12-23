import { Layout } from 'antd';
import HistoryArea from '../../components/HistoryArea';
import PromptArea from '../../components/PromptArea';
import { Button, Row, Col } from 'antd';
// import Sidebar from '../../components/Sidebar';
import { useState } from 'react';
import ListImg from "../../components/listImg";
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import './style.css';



const { Sider, Content } = Layout;

const Create = () => {

    const [collapsed, setCollapsed] = useState(true);

  const toggleSider = () => {
    setCollapsed(!collapsed);
  };
    return (
        <Layout style={{ height: '100%', backgroundColor: '#000' }}>

            <Content style={{ paddingLeft: '2px', backgroundColor: '#000', position: 'relative' }}>
                <Row gutter={[16, 16]} style={{ height: '100%' }}>
                    <Col xs={24} lg={8}>
                        <PromptArea />
                    </Col>
                    <Col xs={24} lg={16}>
                        <HistoryArea />
                    </Col> 
                </Row>
                
                    <div className="right-wrapper">
                        <Button className="collesp-icon" onClick={toggleSider}>{collapsed ? <LeftOutlined /> : <RightOutlined />}</Button>   
                    </div>
            </Content>
                       
            <Sider
                // collapsed={DisabledSider} 
                defaultCollapsed={true}
                collapsed={collapsed}
                onCollapse={setCollapsed}
                theme="dark"
                collapsible={false}
                collapsedWidth={0}
                className='scrollable-sider'
            >
                <ListImg />
            </Sider>
        </Layout>
    );
};

export default Create;
