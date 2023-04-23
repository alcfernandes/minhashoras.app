import { NavLink, Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <h1>MinhasHoras.app</h1>

      <NavLink to="/track">Track</NavLink>
      <span> | </span>
      <NavLink to="/dashboard">Dashboard</NavLink>

      <p className="read-the-docs">
        Here, coming soon, the MyHours application.
      </p>
      <div>
        <Outlet />
      </div>
    </>
  );
}
