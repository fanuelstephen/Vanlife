import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function HostLayout() {
  const ActiveStyle = {
    fontWeight: 'bold',
    textecoration: 'undeline',
    color: '#161616',
  };
  return (
    <div>
      
      <nav className="host-nav">
        <NavLink
          to="/host"
          end
          style={({ isActive }) => (isActive ? ActiveStyle : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          style={({ isActive }) => (isActive ? ActiveStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vans"
          style={({ isActive }) => (isActive ? ActiveStyle : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          style={({ isActive }) => (isActive ? ActiveStyle : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HostLayout;
