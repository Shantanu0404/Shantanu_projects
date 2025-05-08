import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // State to manage navbar collapse
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  // Function to toggle navbar collapse state
  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        {/* Using NavLink for consistency */}
        <NavLink className="navbar-brand" to="/">
          My Product App
        </NavLink>

        {/* Navbar Toggle Button for Small Screens */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="collapsibleNavId"
          aria-expanded={!isNavbarCollapsed} // Dynamically set based on state
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/" 
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/products"
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
