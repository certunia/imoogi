import React from 'react';
import App from './App'
import Home from './pages/Home'
import PopupLogin from './popups/Login'
import PopupRegistration from './popups/Registration'
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/login",
        element: <PopupLogin />,
      },
      {
        path: "/registration",
        element: <PopupRegistration />,
      }
    ]
  },
  {
    path: "/asdf",
    element: <App />,
  },
]);

export default router;
