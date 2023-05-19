import { useNavigate } from 'react-router-dom';

import { Menu } from 'antd';
import {
  AccountAdminIcon,
  ActivityIcon,
  ClientsIcon,
  DashboardIcon,
  LogoutIcon,
  ProfileIcon,
  ProjectsIcon,
  ReportsMenuIcon,
  TimeSheetIcon,
  TrackIcon,
  UserMenuIcon,
} from '@shared/components/app-icons';
import { useAuth } from '@features/auth';

function SideMenu() {
  const { setAuth } = useAuth();

  const items = [
    { key: '/track', icon: <TrackIcon />, label: 'Track' },
    { key: '/projects', icon: <ProjectsIcon />, label: 'Projects' },
    {
      key: 'reports-menu',
      icon: <ReportsMenuIcon />,
      label: 'Reports',
      children: [
        {
          key: '/reports/dashboard',
          icon: <DashboardIcon />,
          label: 'Dashboard',
        },
        { key: '/reports/detailed', icon: <ActivityIcon />, label: 'Detailed' },
        {
          key: '/reports/timesheet',
          icon: <TimeSheetIcon />,
          label: 'Timesheet',
        },
      ],
    },
    { key: '/clients', icon: <ClientsIcon />, label: 'Clients' },
    {
      key: 'user-menu',
      icon: <UserMenuIcon />,
      label: 'Alessandro',
      children: [
        {
          key: '/account-admin',
          icon: <AccountAdminIcon />,
          label: 'Settings',
        },
        { key: '/profile', icon: <ProfileIcon />, label: 'Profile' },
        { key: '/sign-out', icon: <LogoutIcon />, label: 'Sign out' },
      ],
    },
  ];
  const navigate = useNavigate();

  const signOut = () => {
    setAuth({ email: '', password: '', accessToken: '', refreshToken: '' });
  };
  return (
    <Menu
      theme="dark"
      mode="inline"
      items={items}
      onClick={({ key }) => {
        if (key === '/sign-out') {
          signOut();
        } else {
          navigate(key);
        }
      }}
      defaultSelectedKeys={[window.location.pathname]}
    />
  );
}

export default SideMenu;
