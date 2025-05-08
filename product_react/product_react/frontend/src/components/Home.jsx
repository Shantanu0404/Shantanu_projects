import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="display-4 mb-4">Welcome to the Product Dashboard</h1>
      <p className="lead text-muted">Manage your products easily with the tools below.</p>

      <div className="d-flex justify-content-center gap-4 mt-5">
        <NavLink
          to="/admin/products"
          className="btn btn-primary btn-lg"
          style={{ transition: '0.3s' }}
        >
          <strong>View Products</strong>
        </NavLink>
        <NavLink
          to="/admin/products/add"
          className="btn btn-outline-primary btn-lg"
          style={{ transition: '0.3s' }}
        >
          <strong>Add New Product</strong>
        </NavLink>
      </div>

      <div className="mt-5">
        <p className="text-muted">
          Easily view, edit, and add products to your inventory. Manage everything in just a few clicks!
        </p>
      </div>
    </div>
  );
};

export default Home;
