import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Drawer, Table } from '../components';
import { NotFound, Login } from '../pages';
import {
    columnsRegions,
    rowsRegions,
    columnsProvinces,
    rowsProvinces,
    columnsBranchOffices,
    rowsBranchOffices,
    columnsCommunes,
    rowsCommunes
} from '../staticdata';

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
                        element: (
                            <Table
                                rows={rowsRegions}
                                columns={columnsRegions}
                                tableName={'Region'}
                            />
                        )
                    },
                    {
                        path: 'provinces',
                        element: (
                            <Table
                                rows={rowsProvinces}
                                columns={columnsProvinces}
                                tableName={'Provincia'}
                            />
                        )
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
