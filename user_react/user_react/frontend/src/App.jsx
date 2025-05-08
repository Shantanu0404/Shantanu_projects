// External Libraries
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Layout & Error Handling
import Layout from './assets/components/Layout';
import Error from './assets/components/Error';

// Admin Pages
import Home from './assets/components/Home';
import User from './assets/components/User';
import AddUser from './assets/components/Adduser';
import EditUser from './assets/components/Edituser';

// Authentication
import Signup from './assets/components/Signup';
import Login from './assets/components/Login';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/admin',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: 'user', element: <User /> },
        { path: 'user/add', element: <AddUser /> },
        { path: 'user/edit/:id', element: <EditUser /> },
      ],
    },
    { path: '/signup', element: <Signup /> },
    { path: '/login', element: <Login /> },
    { path: '*', element: <Error /> },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
