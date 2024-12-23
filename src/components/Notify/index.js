import { Dropdown, Space } from "antd";
import { BellOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";

function Notify() {
    const items = [
        {
            key: '1',
            label: <Link to='/account'>My Account</Link>,
            disabled: false,
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: 'Profile',
            extra: '⌘P',
        },
        {
            key: '3',
            label: 'Billing',
            extra: '⌘B',
        },
        {
            key: '4',
            label: 'Settings',
            extra: '⌘S',
        },
    ];
    return (
        <>
            <Dropdown
                trigger={['click']}
                menu={{
                    items,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <BellOutlined />
                        Notify
                    </Space>
                </a>
            </Dropdown>

        </>
    )
}

export default Notify;
