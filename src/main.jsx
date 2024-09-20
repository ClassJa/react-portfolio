
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
import {createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // index: true,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/about',
        element: <AboutPage />
      }
      ,{
        // index: true,
        path: '/',
        element: [<AboutPage />, <HomePage />]
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