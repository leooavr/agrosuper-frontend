import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Drawer, Table } from '../components';
import { NotFound, Login, Formulario, Regions, Province, Commune, BranchOffices, Sale, Client } from '../pages';
import { PrivateRoutes } from './PrivateRouter';
import { PublicRoutes } from './PublicRouter';
import { storageService } from '../services';
import { useAppDispatch } from '../redux/store/hooks';
import { validateSession } from '../redux/auth/authSlice';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <PublicRoutes>
                <Login />
            </PublicRoutes>
        ),
        errorElement: <NotFound />
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoutes>
                <Drawer />
            </PrivateRoutes>
        ),
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: (
                            <h1>
                                Bienvenido a la herramienta de gestion de datos administrada por la
                                empresa Agrosuper
                            </h1>
                        )
                    },
                    {
                        path: 'regions',
                        element: <Regions />
                    },
                    {
                        path: 'provinces',
                        element: <Province />
                    },
                    {
                        path: 'communes',
                        element: <Commune />
                    },
                    {
                        path: 'form',
                        element: <Formulario />
                    },
                    {
                        path: 'branchOffices',
                        element: <BranchOffices />
                    },
                    {
                        path: 'sales',
                        element: < Sale/>
                    },
                    {
                        path: 'clients',
                        element: < Client />
                    },
                    {
                        path: 'projectedConsumption',
                        element: <h1>DASHBOARD Incorporado segun avance de la empresa</h1>
                    },
                    {
                        path: 'realConsumption',
                        element: <h1>DASHBOARD Incorporado segun avance de la empresa</h1>
                    },
                    {
                        path: 'salesChannels',
                        element: <h1>DASHBOARD Incorporado segun avance de la empresa</h1>
                    },
                    {
                        path: 'deliveryZones',
                        element: <h1>DASHBOARD Incorporado segun avance de la empresa</h1>
                    },
                    {
                        path: 'proteinSectors',
                        element: <h1>DASHBOARD Incorporado segun avance de la empresa</h1>
                    },
                    {
                        path: 'projectedCommunalPoblation',
                        element: <h1>DASHBOARD Incorporado segun avance de la empresa</h1>
                    },
                    {
                        path: 'projectedAreaPoblation',
                        element: <h1>DASHBOARD Incorporado segun avance de la empresa</h1>
                    },
                    {
                        path: 'district',
                        element: <h1>DASHBOARD Incorporado segun avance de la empresa</h1>
                    },
                    {
                        path: 'area',
                        element: <h1>DASHBOARD Incorporado segun avance de la empresa</h1>
                    },
                    {
                        path: 'areasCategory',
                        element: <h1>DASHBOARD Incorporado segun avance de la empresa</h1>
                    }
                ]
            }
        ]
    }
]);

export const AppRouter: React.FC = () => {
    const dispatch = useAppDispatch();

    const accessToken = storageService.getAccessToken();
    const refreshToken = storageService.getRefreshToken();

    useEffect(() => {
        const payload = {
            accessToken,
            refreshToken
        };
        dispatch(validateSession(payload));
    }, [dispatch, accessToken, refreshToken]);
    return <RouterProvider router={router} />;
};
