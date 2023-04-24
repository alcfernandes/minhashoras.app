import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

export default function MainLayout() {
  return (
    <>
      <h1>MinhasHoras.app</h1>
      <SideBar />
      <p className="read-the-docs">
        Here, coming soon, the MyHours application.
      </p>
      <div>
        <Outlet />
      </div>
    </>
  );
}
