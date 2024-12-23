import { Button } from 'antd';
import { FilePdfOutlined } from '@ant-design/icons';

function AD() {
    return (
        // khu vực test thư viện antd
        <>
            <div>
                <Button type='primary' loading={false} href='/'>Home</Button>
                <Button icon={<FilePdfOutlined />}>Upload</Button>
            </div>
        </>
    )
}

export default AD;

