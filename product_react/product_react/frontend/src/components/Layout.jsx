import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 py-4" style={{ backgroundColor: '#f9f9f9' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
