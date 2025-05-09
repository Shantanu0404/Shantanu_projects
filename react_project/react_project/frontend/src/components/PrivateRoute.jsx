import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = sessionStorage.getItem('isLoggedIn') === 'true';
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
