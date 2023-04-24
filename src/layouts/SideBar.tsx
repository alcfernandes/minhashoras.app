import { NavLink } from 'react-router-dom';

function SideBar() {
  return (
    <>
      <h2>SideBar</h2>
      <NavLink to="/track">Track</NavLink>
      <span> | </span>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </>
  );
}

export default SideBar;
