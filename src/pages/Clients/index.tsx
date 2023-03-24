import React, { useEffect } from 'react';
import { GridColDef } from '@mui/x-data-grid';

import { Table } from '../../components';
import { clientState, fecthClients } from '../../redux/clients/clientSlice';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';

export const Client = () => {
    const columnsClients: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150, flex: 1 },
        { field: 'rut', headerName: 'Rut', width: 150, flex: 1 },
        { field: 'address', headerName: 'Direccion', width: 150, flex: 1 },
        { field: 'commune', headerName: 'Comuna', width: 150, flex: 1 },
        { field: 'social_reason', headerName: 'Razon Social', width: 150, flex: 1 }
    ];

    const dispatch = useAppDispatch();
    const { isLoading, clients, error } = useAppSelector(clientState);

    useEffect(() => {
        dispatch(fecthClients());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert('Error clientes');
        }
    }, [error]);

    useEffect(() => {
        if (isLoading) {
            console.log('cargando');
        }
    }, [isLoading]);

    return <Table rows={clients} columns={columnsClients} tableName={'Clientes'} />;
};
