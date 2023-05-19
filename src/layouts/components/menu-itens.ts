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

export const menuItems = [
  { key: '/track', icon: TrackIcon, label: 'Track' },
  { key: '/projects', icon: ProjectsIcon, label: 'Projects' },
  {
    key: 'reports-menu',
    icon: ReportsMenuIcon,
    label: 'Reports',
    children: [
      {
        key: '/reports/dashboard',
        icon: DashboardIcon,
        label: 'Dashboard',
      },
      { key: '/reports/detailed', icon: ActivityIcon, label: 'Detailed' },
      {
        key: '/reports/timesheet',
        icon: TimeSheetIcon,
        label: 'Timesheet',
      },
    ],
  },
  { key: '/clients', icon: ClientsIcon, label: 'Clients' },
  {
    key: 'user-menu',
    icon: UserMenuIcon,
    label: 'Alessandro',
    children: [
      {
        key: '/account-admin',
        icon: AccountAdminIcon,
        label: 'Settings',
      },
      { key: '/profile', icon: ProfileIcon, label: 'Profile' },
      { key: '/sign-out', icon: LogoutIcon, label: 'Sign out' },
    ],
  },
];
