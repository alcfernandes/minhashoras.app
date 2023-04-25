// import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
import SideMenu from './SideMenu';
import AppLogo from './AppLogo';

function SideBar() {
  const { Sider } = Layout;
  return (
    <Sider
      className="app-side-bar"
      breakpoint="sm"
      // TODO Transfer the setMenuCollapsed method to AppContext
      // onBreakpoint={(broken) => {
      //   setMenuCollapsed(broken);
      // }}
    >
      <AppLogo />
      <SideMenu />
    </Sider>
  );
}

export default SideBar;
