import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import SideBar from './SideBar';

export function MainLayout() {
  const { Content } = Layout;
  return (
    <Layout hasSider>
      <SideBar />
      <Layout className="site-layout" style={{ marginLeft: 15 }}>
        <Content style={{ margin: '15px 0 0', overflow: 'initial' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
