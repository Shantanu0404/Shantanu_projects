import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [error, setError] = useState('');  // For error handling
    const [loading, setLoading] = useState(false); // To handle loading state
    const navigate = useNavigate();

    // Handle form changes
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleLogin = async () => {
        if (!form.username || !form.password) {
            setError('Both username and password are required.');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:2000/user/login', form);
            alert(response.data.message);  // Message from the backend
            navigate('/admin');
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
            console.log(err);
        } finally {
            setLoading(false);  // Stop loading spinner after request
        }
    };

    return (
        <div className="container col-md-4 my-5">
            <h3>Login</h3>

            {/* Display error message if there's an error */}
            {error && <div className="alert alert-danger">{error}</div>}

            <input
                type="text"
                className="form-control mb-2"
                placeholder="Username"
                name="username"
                value={form.username}
                onChange={handleChange}
            />
            <input
                type="password"
                className="form-control mb-2"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
            />
            <button
                className="btn btn-dark"
                onClick={handleLogin}
                disabled={loading} // Disable while loading
            >
                {loading ? 'Logging in...' : 'Login'}
            </button>
        </div>
    );
};

export default Login;
