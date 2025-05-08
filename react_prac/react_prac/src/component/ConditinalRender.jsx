import React, { useState } from 'react';

const ToggleAccessButton = () => {
  const [status, setStatus] = useState('Sign In');

  const handleToggle = () => {
    setStatus((prev) => (prev === 'Sign In' ? 'Sign Out' : 'Sign In'));
  };

  return (
    <div className="text-center my-3">
      <button className="btn btn-success px-4 py-2" onClick={handleToggle}>
        {status}
      </button>
    </div>
  );
};

export default ToggleAccessButton;
