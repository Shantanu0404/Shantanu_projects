import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-4 mt-5 shadow-lg">
      <div className="container">
        <p className="mb-0">
          &copy; {currentYear} <strong>My Blog</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
