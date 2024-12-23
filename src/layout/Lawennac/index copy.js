import { Outlet } from "react-router-dom";
import './style.css';
import logo from "./logo4.png";
import { Layout, Tabs } from "antd";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import LoginButton from "../../components/LoginButton";
function Lawennac() {
    const { Content } = Layout;
    const items = [
        { label: 'Explore', key: 'explore' },
        { label: 'Create', key: 'create' },
        { label: 'Edit', key: 'edit' },
        { label: 'My Creations', key: 'my-creations' },
      ];

    const navigate = useNavigate();

    const handleTabChange = (key) => {
    navigate(key); // Điều hướng đến đường dẫn tương ứng với key
    };

    // const [DisabledSider, setDisabledSider] = useState(false);
    // const handleMenuSider = () => {
    //     setDisabledSider(!DisabledSider);
    // };
    // const [collapsed, setCollapsed] = useState(false);

//   const toggleSider = () => {
//     setCollapsed(!collapsed);
//   };
    return (
        <>
            <Layout className="layout-default">
                <header>
                    <div className="header-default">
                        {/* <div className="right-wrapper">
                            <Button className="collesp-icon" onClick={toggleSider}>{collapsed ? <LeftOutlined /> : <RightOutlined />}</Button>   
                        </div> */}

                        <div className="logo">
                            <img src={logo} alt="logo" style={{ width: 123, height: 60 }} />
                        </div>
                        <div className="tab">
                            <Tabs
                                defaultActiveKey="/create"
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
                    {/* <Sider 
                        // collapsed={DisabledSider} 
                        collapsed={collapsed}
                        onCollapse={setCollapsed}
                        theme="light"
                        collapsible={false}
                        collapsedWidth={0}
                        >
                        </Sider> */}
                    <Content className="main">
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
}
export default Lawennac;