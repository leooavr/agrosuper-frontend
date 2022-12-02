import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Table, MiniDrawer } from '../components';
import { NotFound, Login } from '../pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <NotFound />
    },
    {
        path: '/dashboard',
        element: <MiniDrawer />,
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <Table />
                    },
                    {
                        path: 'users',
                        element: <h1>DASHBOARD USERS</h1>
                    }
                ]
            }
        ]
    }
]);
