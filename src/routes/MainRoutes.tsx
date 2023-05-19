import { Navigate, Route, Routes } from 'react-router-dom';
import Track from '@features/Track';
import Dashboard from '@features/Dashboard';
import NotImplemented from '@features/NotImplemented';
import NotFound from '@features/NotFound';
import { Login } from '@features/auth';
import { Profile } from '@features/profile';
import { Clients } from '@features/clients';
import { AuthLayout, MainLayout } from '../layouts';
import RequireAuth from './RequireAuth';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Navigate to="/track" />} />
          <Route path="/track" element={<Track />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reports/dashboard" element={<Dashboard />} />
          <Route path="/not-implemented" element={<NotImplemented />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
