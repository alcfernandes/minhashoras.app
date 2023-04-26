// import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
import { useState } from 'react';
import SideMenu from './SideMenu';
import AppLogo from './AppLogo';
import AppVersion from './AppVersion';

function SideBar() {
  const { Sider } = Layout;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  return (
    <Sider
      className="app-side-bar"
      breakpoint="sm"
      onBreakpoint={(broken) => {
        setMenuCollapsed(broken);
      }}
    >
      <AppLogo />
      <SideMenu />
      <AppVersion menuCollapsed={menuCollapsed} />
    </Sider>
  );
}

export default SideBar;
