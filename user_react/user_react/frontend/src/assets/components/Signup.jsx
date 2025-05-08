import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [isSubmitting, setIsSubmitting] = useState(false); // To handle button disable
    const [error, setError] = useState(''); // To handle error message
    const navigate = useNavigate();

    const handleSignup = () => {
        // Basic validation
        if (!form.username || !form.password) {
            setError('Please fill out both fields');
            return;
        }

        setIsSubmitting(true); // Disable the button during request
        axios.post('http://localhost:2000/user/signup', form)
            .then(res => {
                alert(res.data.message);
                navigate('/login'); // Redirect to login page
            })
            .catch(err => {
                setError(err.response?.data?.message || 'An error occurred. Please try again.');
            })
            .finally(() => {
                setIsSubmitting(false); // Enable the button after request
            });
    };

    return (
        <div className="container col-md-4 my-5">
            <h3>Signup</h3>

            {/* Error message display */}
            {error && <div className="alert alert-danger">{error}</div>}

            <input
                type="text"
                className="form-control mb-2"
                placeholder="Username"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
            <input
                type="password"
                className="form-control mb-2"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <button
                className="btn btn-dark"
                onClick={handleSignup}
                disabled={isSubmitting} // Disable the button during request
            >
                {isSubmitting ? 'Signing Up...' : 'Signup'}
            </button>
        </div>
    );
};

export default Signup;
