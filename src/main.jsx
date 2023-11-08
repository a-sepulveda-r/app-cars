import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import LayoutApp from './layout/LayoutApp';
import NotFound from './pages/NotFound';
import ResponsiveTable from './pages/ResponsiveTable';
import CrudComponent from './pages/CrudComponent';

const router = createHashRouter([
  {
    path: '/',
    element: <LayoutApp />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            path: '/',
            element: <CrudComponent />,
          },
          {
            path: '/list',
            element: <ResponsiveTable />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
