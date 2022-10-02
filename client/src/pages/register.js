import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import styles from './global.module.css'

import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  const onFinish = async (user) => {
    console.log('Success:', user);
    await axios.post('/', user)
      .then(function ({ status }) {
        console.log(status);
        if (status === 201) navigate("/login");
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
      <h1>REGISTER</h1>
      <Form
        name="register"
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
          Already have an account? <Link to="/login">LOG IN</Link></div>
      </Form.Item>
    </div>
  )
}

export default Register