import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ReactElement } from 'react';
import { useAuth } from '../features/auth';

function RequireAuth() {
  const { auth } = useAuth();
  const location = useLocation();

  const result: ReactElement = auth?.email ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
  return result;
}

export default RequireAuth;
