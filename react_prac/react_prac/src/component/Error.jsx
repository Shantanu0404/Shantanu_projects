import React from 'react';

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
      <h1 className="display-1 text-danger fw-bold">404</h1>
      <h3 className="text-secondary mb-3">Oops! The page you're looking for doesn't exist.</h3>
      <p className="text-muted">It might have been removed, renamed, or never existed.</p>
      <a href="/" className="btn btn-outline-primary mt-3">Go to Homepage</a>
    </div>
  );
};

export default NotFound;
