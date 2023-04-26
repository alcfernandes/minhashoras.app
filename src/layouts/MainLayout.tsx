import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import SideBar from './SideBar';

export default function MainLayout() {
  const { Content } = Layout;
  return (
    <Layout hasSider>
      <SideBar />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
