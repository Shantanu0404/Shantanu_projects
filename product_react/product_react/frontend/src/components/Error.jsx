import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div style={styles.container}>
      <div style={styles.message}>
        <h1 style={styles.header}>404</h1>
        <p style={styles.text}>Oops! The page you're looking for does not exist.</p>
        <Link to="/" style={styles.link}>Go back to Homepage</Link>
      </div>
    </div>
  );
};

// Inline styling to enhance the layout and appearance of the error page
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
  },
  message: {
    backgroundColor: '#ffffff',
    padding: '3rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '6rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#dc3545', // Red color for the error code
  },
  text: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    color: '#495057',
  },
  link: {
    fontSize: '1.125rem',
    color: '#007bff',
    textDecoration: 'none',
    border: '1px solid #007bff',
    padding: '0.5rem 1.25rem',
    borderRadius: '5px',
    transition: '0.3s ease',
  },
};

export default Error;
