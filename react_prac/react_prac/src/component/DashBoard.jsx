import React, { useState } from 'react';

const UserPortal = () => {
  const [role, setRole] = useState('');

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-center gap-4 mb-5">
        <button className="btn btn-outline-primary" onClick={() => setRole('user')}>
          Login as User
        </button>
        <button className="btn btn-outline-dark" onClick={() => setRole('admin')}>
          Login as Admin
        </button>
      </div>

      {role === 'user' && (
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="card text-center shadow-sm border-0 rounded-4">
              <div className="card-body">
                <h3 className="card-title text-success mb-3">User Dashboard</h3>
                <p className="text-muted">Welcome back! Explore your personalized space.</p>
                <a href="#" className="btn btn-success">Visit Profile</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {role === 'admin' && (
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="card text-center shadow-sm border border-secondary rounded-4 bg-light">
              <div className="card-body">
                <h3 className="card-title text-dark mb-3">Admin Dashboard</h3>
                <p className="text-muted">
                  You have access to all system features. Use the tools below to manage the platform.
                </p>
                <a href="#" className="btn btn-dark">Admin Panel</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPortal;
