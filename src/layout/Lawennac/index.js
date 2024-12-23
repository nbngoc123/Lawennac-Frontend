import { NavLink, Outlet, useLocation } from "react-router-dom";
import './style.css';
import logo from "./logo4.png";
import { Button, Layout, Tabs } from "antd";
import { RightOutlined, LeftOutlined, SearchOutlined, MenuFoldOutlined, HomeOutlined } from '@ant-design/icons';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import LoginButton from "../../components/LoginButton";

function Lawennac() {
  const { Header, Footer, Sider, Content } = Layout;
  const items = [
    { label: 'Explore', key: 'explore' },
    { label: 'Create', key: 'create' },
    { label: 'Edit', key: 'edit' },
    { label: 'My Creations', key: 'my-creations' },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleTabChange = (key) => {
    navigate(key); 
  };

  const [DisabledSider, setDisabledSider] = useState(false);
  const handleMenuSider = () => {
    setDisabledSider(!DisabledSider);
  };
  const [collapsed, setCollapsed] = useState(false);

  const toggleSider = () => {
    setCollapsed(!collapsed);
  };

  const activeKey = location.pathname.substring(1) || "explore"; 

  return (
    <>
      <Layout className="layout-default-lawennac">
        <header>
          <div className="header-default-lawennac">
            <div className="logo">
              <Button 
                icon={<HomeOutlined />} 
                size="large" 
                className="home-button" 
                onClick={() => navigate('/')} 
                style={{ backgroundColor: '#1f1f1f', border: 'none', color: '#fff', padding: '0 10px', marginRight: '10px' }} />
              <img src={logo} alt="logo" style={{ width: 123, height: 60, borderRadius: 20 }} />
            </div>
            <div className="tab">
              <Tabs
                activeKey={activeKey}
                onChange={handleTabChange}
                tabPosition="top"
                items={items}
                size="middle"
                className="tab-content"
              />
            </div>
            <div className="notify">
              <LoginButton />
            </div>
          </div>
        </header>

        <Layout>
          <Content className="main">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Lawennac;