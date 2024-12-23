import { Layout } from 'antd';
import ToolCards from '../../components/ToolCards';
import Topics from '../../components/Topics';
import Gallery from '../../components/Gallery';
import './Explore.css';

const { Header, Content } = Layout;

const Explore = () => {
  return (
    <Layout className="scrollable-content" style={{ backgroundColor: '#000', color: '#fff' }}>
      <h3 style={{ margin: '0px', padding: '2px 20px', fontSize: '24px', fontWeight: 'bold' }}>
        AI tools
      </h3>
      <Content style={{ padding: '10px 20px', backgroundColor: '#000',  }}>
        <ToolCards />

        <header style={{ margin: '20px 0px', padding: '20px 20px', fontSize: '24px', fontWeight: 'bold', color: '#fff', paddingLeft:'0px' }}>
          Featured Images
        </header>
        {/* <Topics /> */}

        <Gallery />
      </Content>

    </Layout>
  );
};

export default Explore;
