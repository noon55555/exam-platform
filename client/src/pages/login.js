import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import styles from './global.module.css'

import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const onFinish = async (user) => {
    console.log('Success:', user);
    await axios.post('/checkUser', user)
      .then(function ({data: {founduser}}) {
        console.log(founduser)
        if (founduser > 0) navigate("/upload-img");
        else message.error('User not found')
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.container}>
      <h1>LOG IN</h1>
      <Form
        name="login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={styles.form}
        size='large'
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Form.Item>
        <div style={{ textAlign: 'left' }}>
          Do not have an account? <Link to="/">REGISTER</Link></div>
      </Form.Item>
    </div>
  )
}

export default Login