import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Drawer, Table } from '../components';
import { NotFound, Login, Formulario, Regions, Province } from '../pages';
import { PrivateRoutes } from './PrivateRouter';
import { PublicRoutes } from './PublicRouter';
import { storageService } from '../services';
import { useAppDispatch } from '../redux/store/hooks';
import { validateSession } from '../redux/auth/authSlice';

import {
    columnsBranchOffices,
    rowsBranchOffices,
    columnsCommunes,
    rowsCommunes
} from '../staticdata';

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
                        element: <h1>Bienvenido a la herramienta de gestion de datos administrada por  la empresa Agrosuper</h1>
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
                        element: (
                            <Table
                                rows={rowsCommunes}
                                columns={columnsCommunes}
                                tableName={'Comunas'}
                            />
                        )
                    },
                    {
                        path: 'form',
                        element: <Formulario />
                    },
                    {
                        path: 'branchOffices',
                        element: (
                            <Table
                                rows={rowsBranchOffices}
                                columns={columnsBranchOffices}
                                tableName={'Sucursales'}
                            />
                        )
                    },
                    {
                        path: 'sales',
                        element: <h1>DASHBOARD sucursales</h1>
                    },
                    {
                        path: 'clients',
                        element: <h1>DASHBOARD sucursales</h1>
                    },
                    {
                        path: 'projectedConsumption',
                        element: <h1>DASHBOARD sucursales</h1>
                    },
                    {
                        path: 'branchOffices',
                        element: <h1>DASHBOARD sucursales</h1>
                    },
                    {
                        path: 'realConsumption',
                        element: <h1>DASHBOARD sucursales</h1>
                    },
                    {
                        path: 'salesChannels',
                        element: <h1>DASHBOARD sucursales</h1>
                    },
                    {
                        path: 'deliveryZones',
                        element: <h1>DASHBOARD sucursales</h1>
                    },
                    {
                        path: 'proteinSectors',
                        element: <h1>DASHBOARD sucursales</h1>
                    },
                    {
                        path: 'projectedCommunalPoblation',
                        element: <h1>DASHBOARD sucursales</h1>
                    },
                    {
                        path: 'projectedAreaPoblation',
                        element: <h1>DASHBOARD sucursales</h1>
                    },
                    {
                        path: 'district',
                        element: <h1>DASHBOARD sucursales</h1>
                    },
                    {
                        path: 'area',
                        element: <h1>DASHBOARD sucursales</h1>
                    },
                    {
                        path: 'areasCategory',
                        element: <h1>DASHBOARD sucursales</h1>
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
