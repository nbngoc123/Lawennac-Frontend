import { Row, Col } from "antd";
import Product from "../Product"
function Item() {
    return (
        <div>
            <Row gutter={[20, 20]}>
                <Col xxl={6} xl={6} lg={6} md={12} ms={24} xs={24}>
                    <Product />
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} ms={24} xs={24}>
                    <Product />
                </Col>                
                <Col xxl={6} xl={6} lg={6} md={12} ms={24} xs={24}>
                    <Product />
                </Col>                
                <Col xxl={6} xl={6} lg={6} md={12} ms={24} xs={24}>
                    <Product />
                </Col>
            </Row>

            <Row gutter={[20, 20]}>
                <Col xxl={16} xl={16} lg={16} md={16} ms={16} xs={24}>
                    <Product style={{ maxHeight: '500px', backgroundColor: 'lightgray' }}/>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} ms={8} xs={24}>
                    <Product style={{ maxHeight: '500px', backgroundColor: 'lightgray' }}/>
                </Col>                

            </Row>
        </div>
    )
}


export default Item;
