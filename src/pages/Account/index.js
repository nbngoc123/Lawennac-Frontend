import { Button, Col, Input, Row } from "antd";
import { useState } from "react";
import { Submit } from "../../services/Submit";

function Account() {
    const [Data, setData] = useState({});
    const handleData = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value });
    };
    const handleSubmit = async () => {
        console.log(Data);
        const res = await Submit(Data);
    } 
    return (
        <>
            <Row gutter={[20, 20]}>
                <Col span={24}>
                    <Input name="name" placeholder="Enter your name" onChange={handleData}/>
                </Col>
                <Col span={12}>
                    <Input name="sdt" placeholder="Enter your account number" onChange={handleData}/>
                </Col>
                <Col span={12}>
                    <Input name="email" addonAfter="@gmail.com" placeholder="Enter your account email" onChange={handleData}/>
                </Col>
                <Button type="primary" onClick={handleSubmit}>Submit</Button>
            </Row>
        </>
    )
};
export default Account;