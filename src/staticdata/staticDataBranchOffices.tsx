import { GridColDef, GridRowsProp } from '@mui/x-data-grid';

export const columnsBranchOffices: GridColDef[] = [
    { field: 'col6', headerName: 'Id', width: 150, flex: 1 },
    { field: 'col7', headerName: 'Nombre', width: 150, flex: 1 }
];

export const rowsBranchOffices: GridRowsProp = [
    { id: 1, col6: 'T000', col7: 'Zona sin demarcar' },
    { id: 2, col6: 'T101', col7: 'Huechuraba' },
    { id: 3, col6: 'T102', col7: 'Viña del Mar' },
    { id: 4, col6: 'T103', col7: 'Rancagua' },
    { id: 5, col6: 'T104', col7: 'Concepcion' },
    { id: 6, col6: 'T105', col7: 'Temuco' },
    { id: 7, col6: 'T106', col7: 'Puerto Montt' },
    { id: 8, col6: 'T107', col7: 'Chillan' },
    { id: 9, col6: 'T109', col7: 'San Antonio' },
    { id: 10, col6: 'T110', col7: 'Osorno' },
    { id: 11, col6: 'T111', col7: 'Valdivia' },
    { id: 12, col6: 'T112', col7: 'Los Angeles' },
    { id: 13, col6: 'T114', col7: 'Hijuelas' },
    { id: 14, col6: 'T117', col7: 'Lo Espejo' },
    { id: 15, col6: 'T119', col7: 'Punta Arenas' },
    { id: 16, col6: 'T121', col7: 'San Felipe' },
    { id: 17, col6: 'T122', col7: 'Sucursal Miraflores' },
    { id: 18, col6: 'T149', col7: 'Castro' },
    { id: 19, col6: 'T152', col7: 'Curico' },
    { id: 20, col6: 'T153', col7: 'Talca' },
    { id: 21, col6: 'T154', col7: 'Coyhaique' },
    { id: 22, col6: 'T161', col7: 'Arica' },
    { id: 23, col6: 'T162', col7: 'Iquique' },
    { id: 24, col6: 'T163', col7: 'Antofagasta' },
    { id: 25, col6: 'T164', col7: 'Calama' },
    { id: 26, col6: 'T165', col7: 'Copiapo' },
    { id: 27, col6: 'T166', col7: 'Coquimbo' }
];
