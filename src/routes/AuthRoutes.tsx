import { Route, Routes } from 'react-router-dom';
import { AuthLayout } from '../layouts';
import { Login } from '../features';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
