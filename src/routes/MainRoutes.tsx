import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthLayout, MainLayout } from '../layouts';
import Track from '../features/Track';
import Dashboard from '../features/Dashboard';
import NotImplemented from '../features/NotImplemented';
import NotFound from '../features/NotFound';
import { Login } from '../features';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/track" />} />
        <Route path="/track" element={<Track />} />
        <Route path="/reports/dashboard" element={<Dashboard />} />
        <Route path="/not-implemented" element={<NotImplemented />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
