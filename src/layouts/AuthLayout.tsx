import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

export function AuthLayout() {
  const { Content } = Layout;

  return (
    <Layout style={{ height: '100vh' }}>
      <Layout>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
