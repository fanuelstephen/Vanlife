import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const ActiveStyle = {
    fontWeight: 'bold',
    textecoration: 'undeline',
    color: '#161616',
  };
  return (
    <div>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <NavLink
            style={({ isActive }) => (isActive ? ActiveStyle : null)}
            to="/host"
          >
            Host
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? ActiveStyle : null)}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? ActiveStyle : null)}
            to="/vans"
          >
            Vans
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Header;
