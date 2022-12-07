import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Drawer } from '../components';
import { NotFound, Login } from '../pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <NotFound />
    },
    {
        path: '/dashboard',
        element: <Drawer />,
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <h1>inicio</h1>
                    },
                    {
                        path: 'regions',
                        element: <h1>DASHBOARD REGIONES</h1>
                    },
                    {
                        path: 'provinces',
                        element: <h1>DASHBOARD PROVINCIAS</h1>
                    },
                    {
                        path: 'communes',
                        element: <h1>DASHBOARD COMUNAS</h1>
                    }
                ]
            }
        ]
    }
]);
