import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { MiniDrawer, Table } from '../components';
import { NotFound, Login } from '../pages';

const columnsRegions: GridColDef[] = [
    { field: 'col1', headerName: 'Número', width: 150, flex: 1 },
    { field: 'col2', headerName: 'Nombre', width: 150, flex: 1 }
];
const rowsRegions: GridRowsProp = [
    { id: 1, col1: 1, col2: 'Region de Tarapaca' },
    { id: 2, col1: 2, col2: 'Region de Antofagasta' },
    { id: 3, col1: 3, col2: 'Region de Atacama' },
    { id: 4, col1: 4, col2: 'Region de Coquimbo' },
    { id: 5, col1: 5, col2: 'Region de Valparaiso' },
    { id: 6, col1: 6, col2: 'Region del Libertador Bernardo O´higgins' },
    { id: 7, col1: 7, col2: 'Region del Maule' },
    { id: 8, col1: 8, col2: 'Region del Bío-bío' },
    { id: 9, col1: 9, col2: 'Region de la Araucanía' },
    { id: 10, col1: 10, col2: 'Region de Los Lagos' },
    { id: 11, col1: 11, col2: 'Region de Aysen' },
    { id: 12, col1: 12, col2: 'Region de Magallanes' },
    { id: 13, col1: 13, col2: 'Region Metropolitana de Santiago' },
    { id: 14, col1: 14, col2: 'Region de los Rios' },
    { id: 15, col1: 15, col2: 'Region de Arica y Parinacota' },
    { id: 16, col1: 16, col2: 'Region del Ñuble' }
];
const columnsProvinces: GridColDef[] = [
    { field: 'col4', headerName: 'ID', width: 150, flex: 1 },
    { field: 'col5', headerName: 'Nombre', width: 150, flex: 1 },
    { field: 'col6', headerName: 'Numero Region', width: 150, flex: 1 }
];
const rowsProvinces: GridRowsProp = [
    { id: 1, col4: 11, col5: 'Iquique', col6: 1 },
    { id: 2, col4: 21, col5: 'Tocopilla', col6: 2 },
    { id: 3, col4: 22, col5: 'El Loa', col6: 2 },
    { id: 4, col4: 23, col5: 'Antofagasta', col6: 2 },
    { id: 5, col4: 31, col5: 'Huasco', col6: 3 },
    { id: 6, col4: 32, col5: 'Copiapo', col6: 3 },
    { id: 7, col4: 33, col5: 'Chañaral', col6: 3 },
    { id: 8, col4: 41, col5: 'Elqui', col6: 4 },
    { id: 9, col4: 42, col5: 'Choapa', col6: 4 },
    { id: 10, col4: 43, col5: 'Limari', col6: 4 },
    { id: 11, col4: 51, col5: 'Los Andes', col6: 5 },
    { id: 12, col4: 52, col5: 'Petorca', col6: 5 },
    { id: 13, col4: 53, col5: 'San Felipe', col6: 5 },
    { id: 14, col4: 54, col5: 'Marga Marga', col6: 5 },
    { id: 15, col4: 55, col5: 'San Antonio', col6: 5 },
    { id: 16, col4: 56, col5: 'Valparaiso', col6: 5 }
];
const columnsCommunes: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150, flex: 1 },
    { field: 'col2', headerName: 'Column 2', width: 150, flex: 1 },
    { field: 'col3', headerName: 'Column 3', width: 150, flex: 1 }
];
const rowsCommunes: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World', col3: 'asdfj' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome', col3: 'asdfj' },
    { id: 3, col1: 'MUI', col2: 'is Amazing', col3: 'asdfj' }
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
                        element: <Table rows={rowsCommunes} columns={columnsCommunes} />
                    }
                ]
            }
        ]
    }
]);
