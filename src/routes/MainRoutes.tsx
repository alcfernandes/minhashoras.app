import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Track from '../features/Track';
import Dashboard from '../features/Dashboard';
import NotImplemented from '../features/NotImplemented';
import NotFound from '../features/NotFound';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/track" />} />
        <Route path="/track" element={<Track />} />
        <Route path="/reports/dashboard" element={<Dashboard />} />
        <Route path="/not-implemented" element={<NotImplemented />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
