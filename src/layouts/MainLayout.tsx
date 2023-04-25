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
    // <>
    //   <h1>MinhasHoras.app</h1>
    //   <SideBar />
    //   <p className="read-the-docs">
    //     Here, coming soon, the MyHours application.
    //   </p>
    //   <div>
    //     <Outlet />
    //   </div>
    // </>
  );
}
