import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import _Category from './pages/{Category}';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/:category',
    element: <_Category />,
  }
  // {
  //   path: '/beverages',
  //   element: <Beverages />
  // },
  // {
  //   path: '/desserts',
  //   element: <Desserts />
  // },
  // {
  //   path: '/foods',
  //   element: <Foods />
  // },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// npx json-server --watch data/db.json --port 8000