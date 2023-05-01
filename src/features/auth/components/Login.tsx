import { Button, Card, Form, Image, Input, message, Typography } from 'antd';
import { useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import logo from '../../../assets/images/logo_transparent_background.png';

import { AuthContext } from '../stores/AuthProvider';
import { minhasHorasApi } from '../../../shared/services/minhashoras-api';

interface ILoginData {
  email: string;
  password: string;
}

const { Title } = Typography;

export function Login() {
  const { setAuth } = useContext(AuthContext);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const messageError = (messageText: string) => {
    messageApi.open({
      type: 'error',
      content: messageText,
    });
  };
  const onSubmit = async (loginData: ILoginData) => {
    try {
      const response = await minhasHorasApi.post(
        '/token/',
        JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      // console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));

      const accessToken = response?.data?.access;
      const refreshToken = response?.data?.refresh;
      setAuth({
        email: loginData.email,
        password: loginData.password,
        accessToken,
        refreshToken,
      });
      navigate('/track');
    } catch (error) {
      const apiError = error as AxiosError;
      if (!apiError?.response) {
        messageError('No server response.');
      } else if (apiError?.response?.status === 401) {
        messageError('Invalid credentials');
      } else if (apiError?.response?.status === 404) {
        messageError('Unauthorized');
      } else {
        messageError('Unexpected error');
      }
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
