import { Button, Col, Row } from "antd";
import Graph from "../../components/Graph";

function Analysis() {
    return (
        <>
            
            <Row>
                <Col span={24}>
                    <h1>NewJeans</h1>                
                </Col>
            
            </Row>
            <Row>
                <Graph />
            </Row>
        </>
    )
}

export default Analysis;
