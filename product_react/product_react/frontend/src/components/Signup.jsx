import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        if (!form.username || !form.password) {
            setError('Please fill in all fields.');
            return;
        }

        if (form.password.length < 6) {
            setError('Password should be at least 6 characters long.');
            return;
        }

        axios.post('http://localhost:2000/product/signup', form)
            .then(res => {
                alert(res.data.message);
                navigate('/login');
            })
            .catch(err => {
                console.log(err);
                setError('Something went wrong. Please try again.');
            });
    };

    return (
        <div className="container my-5 col-md-4">
            <h3>Signup</h3>
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
            <button className="btn btn-dark" onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default Signup;
