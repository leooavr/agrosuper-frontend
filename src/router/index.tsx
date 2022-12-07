import React from 'react';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { createBrowserRouter } from 'react-router-dom';

import { Drawer, Table } from '../components';
import { NotFound, Login } from '../pages';

const columnsRegions: GridColDef[] = [
    { field: 'col1', headerName: 'Numero', width: 150, flex: 1 },
    { field: 'col2', headerName: 'Nombre', width: 150, flex: 1 }
];

const rowsRegions: GridRowsProp = [
    { id: 1, col1: 1, col2: 'Región de Tarapacá' },
    { id: 2, col1: 2, col2: 'Región de Antofagasta' },
    { id: 3, col1: 3, col2: 'Región de Atacama' },
    { id: 4, col1: 4, col2: 'Región de Coquimbo' },
    { id: 5, col1: 5, col2: 'Región de Valparaíso' },
    { id: 6, col1: 6, col2: 'Región del Libertador Bernardo O´Higgins' },
    { id: 7, col1: 7, col2: 'Región del Maule' },
    { id: 8, col1: 8, col2: 'Región del Bío-Bío' },
    { id: 9, col1: 9, col2: 'Región de La Araucanía' },
    { id: 10, col1: 10, col2: 'Región de Los Lagos' },
    { id: 11, col1: 11, col2: 'Región de Aysén del Gral.Ibañez del Campo' },
    { id: 12, col1: 12, col2: 'Región de Magallanes y Antártica Chilena' },
    { id: 13, col1: 13, col2: 'Región Metropolitana de Santiago' },
    { id: 14, col1: 14, col2: 'Región de Los Ríos' },
    { id: 15, col1: 15, col2: 'Región de Arica y Parinacota' },
    { id: 16, col1: 16, col2: 'Región de Ñuble' }
];

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
                        element: <Table rows={rowsRegions} columns={columnsRegions} />
                    },
                    {
                        path: 'provinces',
                        element: <Table rows={rowsRegions} columns={columnsRegions} />
                    },
                    {
                        path: 'communes',
                        element: <Table rows={rowsRegions} columns={columnsRegions} />
                    }
                ]
            }
        ]
    }
]);
