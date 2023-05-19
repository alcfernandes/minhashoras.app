import { useNavigate } from 'react-router-dom';

import { Menu } from 'antd';
import { useAuth } from '@features/auth';
import { menuItems } from './menu-itens';

function SideMenu() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === '/sign-out') {
      logout();
    } else {
      navigate(key);
    }
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      items={menuItems}
      onClick={handleMenuClick}
      defaultSelectedKeys={[window.location.pathname]}
    />
  );
}

export default SideMenu;
