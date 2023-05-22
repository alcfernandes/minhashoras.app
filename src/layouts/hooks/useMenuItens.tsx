import { useTranslation } from 'react-i18next';
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

export function useMenuItems() {
  const { t } = useTranslation();

  return [
    { key: '/track', icon: TrackIcon, label: t('track') },
    { key: '/projects', icon: ProjectsIcon, label: t('projects') },
    {
      key: 'reports-menu',
      icon: ReportsMenuIcon,
      label: t('reports'),
      children: [
        {
          key: '/reports/dashboard',
          icon: DashboardIcon,
          label: t('dashboard'),
        },
        {
          key: '/reports/detailed',
          icon: ActivityIcon,
          label: t('detailed_report'),
        },
        {
          key: '/reports/timesheet',
          icon: TimeSheetIcon,
          label: t('timesheet_report'),
        },
      ],
    },
    { key: '/clients', icon: ClientsIcon, label: t('clients') },
    {
      key: 'user-menu',
      icon: UserMenuIcon,
      label: 'Alessandro', // Você deve gerenciar o nome do usuário de maneira diferente
      children: [
        {
          key: '/account-admin',
          icon: AccountAdminIcon,
          label: t('settings'),
        },
        { key: '/profile', icon: ProfileIcon, label: t('profile') },
        { key: '/sign-out', icon: LogoutIcon, label: t('signOut') },
      ],
    },
  ];
}
