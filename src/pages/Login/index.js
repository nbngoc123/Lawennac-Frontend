import React, { useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFail } from '../../actions/user';
const LoginPage = () => {
  const [isNewAccount, setIsNewAccount] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = async (url, data) => {
    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        if (isNewAccount) {
          message.success('Tạo tài khoản thành công!');
        } else {
          message.success(response.data.message);
          dispatch(loginSuccess(response.data.userId)); 
        }
        navigate(-1);
      } else if (response.status === 500 || response.status === 404) {
        if (isNewAccount) {
          message.success('Tạo tài khoản không thành công!');
        } else {
          message.success('User not found');
          dispatch(loginFail());
        }
        navigate(-1);
      }
    } catch (error) {
      console.error('Error:', error.message);
      message.error('Có lỗi xảy ra! Vui lòng thử lại.');
      dispatch(loginFail());
    }
  };

  const onFinish = (values) => {
    // console.log('Received values:', values);

    if (isNewAccount) {
      handleSubmit('http://localhost:3006/users/add', values);
    } else {
      handleSubmit('http://localhost:3006/users/auth/login', values);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f0f2f5',
      }}
    >
      <Card title={isNewAccount ? 'Tạo tài khoản' : 'Đăng nhập'} style={{ width: 400 }}>
        <Form
          name="login_form"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
          >
            <Input placeholder="Nhập tên đăng nhập" />
          </Form.Item>

          {isNewAccount && ( // Chỉ hiển thị email khi tạo tài khoản
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Vui lòng nhập email!' },
                { type: 'email', message: 'Email không hợp lệ!' },
              ]}
            >
              <Input placeholder="Nhập email" />
            </Form.Item>
          )}

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {isNewAccount ? 'Tạo tài khoản' : 'Đăng nhập'}
            </Button>
          </Form.Item>

          <Form.Item>
            <Button type="link" block onClick={() => setIsNewAccount(!isNewAccount)}>
              {isNewAccount
                ? 'Đã có tài khoản? Đăng nhập tại đây'
                : 'Chưa có tài khoản? Tạo mới'}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;