import { Button, Card, Form, Image, Input, Typography } from 'antd';
import logo from '../assets/images/logo_transparent_background.png';

const { Title } = Typography;

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

export function Login() {
  return (
    <Card
      style={{
        left: '50%',
        top: '20%',
        position: 'absolute',
        transform: 'translateX(-50%)',
      }}
    >
      <div style={{ height: '50', marginBottom: '16px', textAlign: 'center' }}>
        <Image width={170} src={logo} alt="logo" preview={false} />
      </div>
      <Title type="secondary" level={3} style={{ textAlign: 'left' }}>
        Sign In{' '}
      </Title>
      <Form
        name="basic"
        style={{ width: '400px' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="EMAIL"
          name="email"
          hasFeedback
          rules={[
            {
              type: 'email',
              required: true,
              message: 'Please enter a valid email.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="PASSWORD"
          name="password"
          rules={[{ required: true, message: 'Please enter your password.' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
