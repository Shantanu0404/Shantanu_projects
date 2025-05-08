import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!form.username || !form.password) {
      alert('Both fields are required!');
      return;
    }

    setLoading(true);
    setError('');
    
    axios
      .post('http://localhost:2000/product/login', form)
      .then((res) => {
        alert(res.data.message);
        navigate('/admin');
      })
      .catch((err) => {
        setError('Login failed. Please check your credentials.');
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="container my-5 col-md-4">
      <h3>Login</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="password"
        className="form-control mb-2"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button className="btn btn-dark" onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default Login;
