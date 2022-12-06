import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { MiniDrawer, Table } from '../components';
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

const columnsProvinces: GridColDef[] = [
    { field: 'col3', headerName: 'Id', width: 150, flex: 1 },
    { field: 'col4', headerName: 'Nombre', width: 150, flex: 1 },
    { field: 'col5', headerName: 'Numero Region', width: 150, flex: 1 }
];

const rowsProvinces: GridRowsProp = [
    { id: 1, col3: 11, col4: 'Iquique', col5: 1 },
    { id: 2, col3: 21, col4: 'Tocopilla', col5: 2 },
    { id: 3, col3: 22, col4: 'El Loa', col5: 2 },
    { id: 4, col3: 23, col4: 'Antofagasta', col5: 2 },
    { id: 5, col3: 31, col4: 'Huasco', col5: 3 },
    { id: 6, col3: 32, col4: 'Copiapó', col5: 3 },
    { id: 7, col3: 33, col4: 'Chañaral', col5: 3 },
    { id: 8, col3: 41, col4: 'Elqui', col5: 4 },
    { id: 9, col3: 42, col4: 'Choapa', col5: 4 },
    { id: 10, col3: 43, col4: 'Limarí', col5: 4 },
    { id: 11, col3: 51, col4: 'Los Andes', col5: 5 },
    { id: 12, col3: 52, col4: 'Petorca', col5: 5 },
    { id: 13, col3: 53, col4: 'San Felipe', col5: 5 },
    { id: 14, col3: 54, col4: 'Marga Marga', col5: 5 },
    { id: 15, col3: 55, col4: 'San Antonio', col5: 5 },
    { id: 16, col3: 56, col4: 'Valparaíso', col5: 5 }
];

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
                        element: <h1>inicio</h1>
                    },
                    {
                        path: 'regions',
                        element: <Table rows={rowsRegions} columns={columnsRegions} />
                    },
                    {
                        path: 'provinces',
                        element: <Table rows={rowsProvinces} columns={columnsProvinces} />
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
