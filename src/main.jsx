
import { StrictMode } from 'react';
import { createRoot }  from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import HomePage from './components/Home.jsx'
import AboutPage from './components/About.jsx'
import ProjectsPage from './components/Projects.jsx'
import ContactPage from './components/ContactMe.jsx'
import ResumePage from './components/Resume.jsx'
import ErrorPage from './components/Error.jsx'
// how to import reactDOM 
import {createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    // element: <HomePage />,
    element: <App />,
    // index: true,
    errorElement: <ErrorPage />,
    children: [
      {
        // index: true,
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/projects',
        element: <ProjectsPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/resume',
        element: <ResumePage />
      }
    ]
  }

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
</StrictMode>
)