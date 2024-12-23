import { NavLink, Outlet } from "react-router-dom";
import './style.css';
import logo from "./logo4.png";
import { Button, Layout } from "antd";
import { useState } from "react";
import LoginButton from "../../components/LoginButton";

function LayoutDefault() {
    const { Header, Footer, Sider, Content } = Layout;
    const [DisabledSider, setDisabledSider] = useState(false);
    const handleMenuSider = () => {
        setDisabledSider(!DisabledSider);
    };
    const [collapsed, setCollapsed] = useState(false);

  const toggleSider = () => {
    setCollapsed(!collapsed);
  };
    return (
        <>
            <Layout className="layout-default-home">
                <header>
                    <div className="logo">
                        <img src={logo} alt="logo" style={{ width: 123, height: 60 }} />
                    </div>
                    <nav className="nav">
                        <NavLink to="/" className="nav-link-home">Trang chủ</NavLink>
                        <NavLink to="/about" className="nav-link-home">Giới thiệu</NavLink>
                        <NavLink to="/contact" className="nav-link-home">Liên hệ</NavLink>
                        <NavLink to="/ad" className="nav-link-home">ADMIN</NavLink>
                    </nav>
                    <div className="notify">
                        <LoginButton />
                    </div>
                </header>
                <Layout>
                    <Content className="main">
                        <Outlet />
                    </Content>
                </Layout>
                <Footer className="footer">
                    &copy; {new Date().getFullYear()} Lawennac 
                </Footer>

            </Layout>
        </>
    );
}
export default LayoutDefault;