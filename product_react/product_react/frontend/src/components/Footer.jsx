import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-2">&copy; {new Date().getFullYear()} My Product App. All rights reserved.</p>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaLinkedin size={24} />
          </a>
        </div>

        <div className="mt-3">
          <a href="/about" className="text-white mx-2">About Us</a>
          <a href="/contact" className="text-white mx-2">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
