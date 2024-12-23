import { Menu } from "antd";
import { FormOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";
function MenuSider() {

  const items = [
    {
        key: '1', label: 'Điều hướng', icon: <FormOutlined />, children: [
            { key: "1-1", label: <Link to="/">Trang chủ</Link> },
            { key: "1-2", label: <Link to="/about">About</Link>},
            { key: "1-3", label: <Link to="/contact">Contact</Link>},
            { key: "1-4", label: <Link to="/ad">ADMIN</Link>},
        ]
    },
    { key: '2', label: <Link to="/ana">Phân tích</Link>, icon: <FormOutlined /> },
    { key: '3', label: <Link to="/contact">Contact</Link>, icon: <FormOutlined /> },
]

    return(
        <>
        <Menu
            mode="inline"
            items={items}
            defaultSelectedKeys={["1-1"]}
            defaultOpenKeys={["1"]}

        />
        </>
    )
};

export default MenuSider;