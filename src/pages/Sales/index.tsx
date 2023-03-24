import React, { useEffect } from 'react';
import { GridColDef } from '@mui/x-data-grid';

import { Table } from '../../components';
import { saleState, fecthSales } from '../../redux/sales/saleSlice';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';

export const Sale = () => {
    const columnsSales: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150, flex: 1 },
        { field: 'client', headerName: 'Cliente', width: 150, flex: 1 },
        { field: 'salesKg', headerName: 'Ventas(KG)', width: 150, flex: 1 },
        { field: 'salesNeta', headerName: 'Ventas(Neta)', width: 150, flex: 1 },
        { field: 'month', headerName: 'Mes', width: 150, flex: 1 },
        { field: 'year', headerName: 'Año', width: 150, flex: 1 }
    ];

    const dispatch = useAppDispatch();
    const { isLoading, sales, error } = useAppSelector(saleState);

    useEffect(() => {
        dispatch(fecthSales());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert('Error ventas');
        }
    }, [error]);

    useEffect(() => {
        if (isLoading) {
            console.log('cargando');
        }
    }, [isLoading]);

    return <Table rows={sales} columns={columnsSales} tableName={'Ventas'} />;
};
