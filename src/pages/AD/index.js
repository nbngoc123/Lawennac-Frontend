import { Button, Row, Col } from 'antd';
import { FilePdfOutlined } from '@ant-design/icons';
import Item from '../../components/Item';

function AD() {
    return (
        // khu vực test thư viện antd
        <>
            <div>
                <Button type='primary' loading={false} href='/'>Home</Button>
                <Button icon={<FilePdfOutlined />}>Upload</Button>
            </div>
            <Item />
        </>
    )
}

export default AD;

