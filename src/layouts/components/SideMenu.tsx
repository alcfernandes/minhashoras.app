import { useNavigate } from 'react-router-dom';

import { Menu } from 'antd';
import { useAuth } from '@features/auth';
import { useMenuItems } from '@layouts/hooks/useMenuItens';

function SideMenu() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const menuItems = useMenuItems();

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
