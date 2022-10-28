import React from 'react';
import Home from './pages/Home'
import PopupLogin from './popups/Login'
import PopupProfile from './popups/Profile'
import PopupRegistration from './popups/Registration'

import Trainbooks from './pages/Trainbooks'
import Statistics from './pages/Statistics'
import Users from './pages/Users'

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
      },
      {
        path: "/profile-fill",
        element: <PopupProfile />,
      },
    ]
  },
  {
    path: "/trainbooks",
    element: <Trainbooks />,
    children: [
      {
        path: "/trainbooks/saved",
      },
      {
        path: "/trainbooks/my",
      }
    ]
  },
  {
    path: "/users",
    element: <Users />,
    children: [
      {
        path: "/users/favorites",
      },
      {
        path: "/users/my",
      }
    ]
  },
  {
    path: "/statistics",
    element: <Statistics />,
    children: [
      {
        path: "/statistics/favorites",
      },
      {
        path: "/statistics/my",
      }
    ]
  },
]);

export default router;
