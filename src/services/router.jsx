import React from 'react';
import App from '../App'
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children:
  },
  {
    path: "/asdf",
    element: <App />,
  },
]);

export default router;
