import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loading state
        try {
            const response = await api.post('/auth/signup', { username, password });
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed');
            setLoading(false); // Stop loading if signup fails
        }
    };

    const validatePassword = () => {
        return password.length >= 6; // You can customize the password validation rules
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-4 text-center">Sign Up</h2>

                    {error && <div className="alert alert-danger">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                aria-describedby="usernameHelp"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                aria-describedby="passwordHelp"
                            />
                            <small id="passwordHelp" className="form-text text-muted">
                                Password must be at least 6 characters long.
                            </small>
                        </div>

                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={loading || !validatePassword()}
                            >
                                {loading ? 'Creating Account...' : 'Sign Up'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
