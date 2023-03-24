import React, { useEffect } from 'react';
import { GridColDef } from '@mui/x-data-grid';

import { Table } from '../../components';
import { branchOfficeState, fecthBranchOffices } from '../../redux/branchoffices/branchofficeSlice';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';

export const BranchOffices = () => {
    const columnsBranchOffices: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150, flex: 1 },
        { field: 'name', headerName: 'Nombre', width: 150, flex: 1 }
    ];

    const dispatch = useAppDispatch();
    const { isLoading, branchOffices, error } = useAppSelector(branchOfficeState);

    useEffect(() => {
        dispatch(fecthBranchOffices());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert('Error Sucursales');
        }
    }, [error]);

    useEffect(() => {
        if (isLoading) {
            console.log('Cargando');
        }
    }, [isLoading]);

    return <Table rows={branchOffices} columns={columnsBranchOffices} tableName={'Sucursales'} />;
};
