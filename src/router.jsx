import React from 'react';
import App from './App'
import Home from './pages/Home'
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children:
  },
  {
    path: "/asdf",
    element: <App />,
  },
]);

export default router;
