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
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/AboutPage',
        element: <AboutPage />
      },
      {
        path: '/ProjectsPage',
        element: <ProjectsPage />
      },
      {
        path: '/ContactPage',
        element: <ContactPage />
      },
      {
        path: '/ResumePage',
        element: <ResumePage />
      }
    ]
  }
  // Todo: Define the accessible routes, and which components respond to which URL
]);
//  <Router>
// </Router>


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   <RouterProvider router={router} />
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
</StrictMode>
)
