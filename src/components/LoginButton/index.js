import React from 'react';
import { Button, Modal } from 'antd'; 
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/user'; 

const LoginButton = () => {
  const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Hàm xử lý login
  const handleLogin = () => {
    navigate('/login');
  };

  // Hàm xử lý logout
  const handleLogout = () => {
    Modal.confirm({
      title: 'Xác nhận đăng xuất',
      content: 'Bạn có chắc chắn muốn rời xa tôi?',
      onOk() {
        dispatch(logout()); 
      },
      onCancel() {
      }
    });
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    background: 'transparent',
    border: 'none',
    borderRadius: '20px',
    border: '1px solid #1f1f1f',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    textAlign: 'center',
    cursor: 'pointer', 
    overflow: 'hidden',
  };

  return (
    <>
      {isLoggedIn ? (
        <Button
          type="text"
          icon={<LogoutOutlined style={{ color: '#1890ff', fontSize: '30px' }} />}
          onClick={handleLogout}
          style={buttonStyle}
        >
          Đăng xuất
        </Button>
      ) : (
        <Button
          type="text"
          icon={<LoginOutlined style={{ color: '#1890ff', fontSize: '30px' }} />}
          onClick={handleLogin}
          style={buttonStyle}
        >
          Đăng nhập
        </Button>
      )}
    </>
  );
};

export default LoginButton;
