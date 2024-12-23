import React from 'react';
import { Button } from "antd";

const Product = ({ style }) => {
  return (
    <div style={style}>
            <h1>Product</h1>
            <Button type="primary" block>Item</Button>
            <p>Description</p>
      {/* Nội dung của sản phẩm */}
      <p>Here is the product information. This section might be a long list of product details or images.</p>
      {/* Thêm nội dung khác nếu cần */}
        </div>
    );
}
export default Product; 