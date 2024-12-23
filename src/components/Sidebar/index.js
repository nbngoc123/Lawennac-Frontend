import { Menu } from 'antd';
import { PictureOutlined, VideoCameraOutlined, SketchOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Menu
      mode="inline"
      style={{ height: '100%', backgroundColor: '#1f1f1f', color: '#fff' }}
      items={[
        { label: <Link to="/lawennac/create">Images</Link>, key: 'images', icon: <PictureOutlined /> },
        { label: <Link to="/lawennac/create">Videos</Link>, key: 'videos', icon: <VideoCameraOutlined /> },
        { label: <Link to="/lawennac/create">Reimagine</Link>, key: 'reimagine', icon: <AppstoreOutlined /> },
        { label: <Link to="/lawennac/create">Sketch</Link>, key: 'sketch', icon: <SketchOutlined /> },
      ]}
    />
  );
};
export default Sidebar;