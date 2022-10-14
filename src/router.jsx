import React from 'react';
import Home from './pages/Home'
import PopupLogin from './popups/Login'
import PopupRegistration from './popups/Registration'

import Trainbooks from './pages/Trainbooks'

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
    path: "/trainbooks",
    element: <Trainbooks />,
  },
  {
    path: "/users",
    element: <Trainbooks />,
  },
  {
    path: "/statistics",
    element: <Trainbooks />,
  },
]);

export default router;
