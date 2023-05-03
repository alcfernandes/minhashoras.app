import { Button, Card, Form, Image, Input, message, Typography } from 'antd';
import { useCallback, useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo_transparent_background.png';
import { useAuth, useLogin } from '../hooks';

interface ILoginData {
  email: string;
  password: string;
}

const { Title } = Typography;

export function Login() {
  const { setAuth } = useAuth();
  const { login, error } = useLogin();

  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const messageError = useCallback(
    (messageText: string) => {
      messageApi.open({
        type: 'error',
        content: messageText,
      });
    },
    [messageApi]
  );

  useEffect(() => {
    if (error) {
      messageError(error);
    }
  }, [error, messageError]);

  const onSubmit = async (loginData: ILoginData) => {
    const tokens = await login(loginData);
    if (tokens) {
      setAuth({
        email: loginData.email,
        password: loginData.password,
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      });
      navigate(from, { replace: true });
    }
  };

  const onSubmitFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    messageApi.open({
      type: 'error',
      content: 'Form validation failed.',
    });
  };

  return (
    <>
      {contextHolder}
      <Card
        style={{
          left: '50%',
          top: '20%',
          position: 'absolute',
          transform: 'translateX(-50%)',
        }}
      >
        <div
          style={{ height: '50', marginBottom: '16px', textAlign: 'center' }}
        >
          <Image width={170} src={logo} alt="logo" preview={false} />
        </div>
        <Title type="secondary" level={3} style={{ textAlign: 'left' }}>
          Sign In{' '}
        </Title>
        <Form
          name="basic"
          style={{ width: '400px' }}
          initialValues={{ remember: true }}
          onFinish={onSubmit}
          onFinishFailed={onSubmitFailed}
          autoComplete="off"
          layout="vertical"
          form={form}
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

          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                Sign In
              </Button>
            )}
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}
