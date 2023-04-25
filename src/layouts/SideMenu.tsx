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
} from '../shared/components/ui/icons';

function SideMenu() {
  const items = [
    { key: '/track', icon: <TrackIcon />, label: 'Horas diárias' },
    { key: '/projects', icon: <ProjectsIcon />, label: 'Projetos' },
    {
      key: 'reports-menu',
      icon: <ReportsMenuIcon />,
      label: 'Relatórios',
      children: [
        { key: '/dashboard', icon: <DashboardIcon />, label: 'Dashboard' },
        { key: '/activity', icon: <ActivityIcon />, label: 'Atividades' },
        { key: '/timesheet', icon: <TimeSheetIcon />, label: 'Semana' },
      ],
    },
    { key: '/clients', icon: <ClientsIcon />, label: 'Clientes' },
    {
      key: 'user-menu',
      icon: <UserMenuIcon />,
      label: 'Alessandro',
      children: [
        {
          key: '/account-admin',
          icon: <AccountAdminIcon />,
          label: 'Administração',
        },
        { key: '/profile', icon: <ProfileIcon />, label: 'Perfil' },
        { key: 'logout', icon: <LogoutIcon />, label: 'Sair' },
      ],
    },
  ];
  const navigate = useNavigate();

  return (
    <Menu
      theme="dark"
      mode="inline"
      items={items}
      onClick={({ key }) => {
        if (key === 'logout') {
          //    TODO implement logout feature here.
        } else {
          navigate(key);
        }
      }}
      defaultSelectedKeys={[window.location.pathname]}
    />
  );
}

export default SideMenu;
