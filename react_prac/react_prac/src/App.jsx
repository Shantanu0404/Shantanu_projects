import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./component/Layout";
import Error from "./component/Error";

const Home = lazy(() => import('./component/Home'));
const Form = lazy(() => import('./component/Form'));
const Counter = lazy(() => import('./component/Counter'));
const About = lazy(() => import('./component/About'));
const Card = lazy(() => import('./component/Card'));
const ContactUs = lazy(() => import('./component/ContactUs'));
const Buttons = lazy(() => import('./component/Buttons'));
const DashBoard = lazy(() => import('./component/DashBoard'));

function App() {

  const path = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>
        },
        {
          path: 'form',
          element: <Suspense fallback={<div>Loading...</div>}><Form /></Suspense>
        },
        {
          path: 'counter',
          element: <Suspense fallback={<div>Loading...</div>}><Counter /></Suspense>
        },
        {
          path: 'button',
          element: <Suspense fallback={<div>Loading...</div>}><Buttons /></Suspense>
        },
        {
          path: 'card',
          element: <Suspense fallback={<div>Loading...</div>}><Card /></Suspense>
        },
        {
          path: 'contact',
          element: <Suspense fallback={<div>Loading...</div>}><ContactUs /></Suspense>
        },
        {
          path: 'about',
          element: <Suspense fallback={<div>Loading...</div>}><About /></Suspense>
        },
        {
          path: 'dashboard',
          element: <Suspense fallback={<div>Loading...</div>}><DashBoard /></Suspense>
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={path} />
    </>
  )
}

export default App;
