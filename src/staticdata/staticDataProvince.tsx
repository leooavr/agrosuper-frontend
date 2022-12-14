import { GridColDef, GridRowsProp } from '@mui/x-data-grid';

export const columnsProvinces: GridColDef[] = [
    { field: 'col3', headerName: 'Id', width: 150, flex: 1 },
    { field: 'col4', headerName: 'Nombre', width: 150, flex: 1 },
    { field: 'col5', headerName: 'Numero Region', width: 150, flex: 1 }
];

export const rowsProvinces: GridRowsProp = [
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
