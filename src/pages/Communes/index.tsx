import React, { useEffect } from 'react';
import { GridColDef } from '@mui/x-data-grid';

import { Table } from '../../components';
import { communeState, fecthCommunes } from '../../redux/communes/communeSlice';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';

export const Commune = () => {
    const columnsCommunes: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150, flex: 1 },
        { field: 'name', headerName: 'Nombre', width: 150, flex: 1 },
        { field: 'branchOffice', headerName: 'Sucursal', width: 150, flex: 1 },
        { field: 'province', headerName: 'Provincia', width: 150, flex: 1 },
        { field: 'region', headerName: 'Region', width: 150, flex: 1 }
    ];

    const dispatch = useAppDispatch();
    const { isLoading, communes, error } = useAppSelector(communeState);

    useEffect(() => {
        dispatch(fecthCommunes());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert('Error comunas');
        }
    }, [error]);

    useEffect(() => {
        if (isLoading) {
            console.log('cargando');
        }
    }, [isLoading]);

    return <Table rows={communes} columns={columnsCommunes} tableName={'Comunas'} />;
};
