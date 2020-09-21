import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { login_API } from '../configs/api'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const onFinish = (values) => {
  console.log('Success:', values);
  login_API(values)
  .then( res => {
    console.log('res', res)
    if(res.code === '0') {
      message.success(res.message)
    } else {
      message.error(res.message)
    }
  })
  .catch( err => console.log('login_API error >>>', err))
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function Login() {
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
