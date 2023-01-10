import React, { useEffect } from 'react';
import { GridColDef } from '@mui/x-data-grid';

import { Table } from '../../components';
import { provinceState, fecthProvinces } from '../../redux/provinces/provinceSlice';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';

export const Province = () => {
    const columnsProvinces: GridColDef[] = [
        { field: 'id', headerName: 'Numero', width: 150, flex: 1 },
        { field: 'name', headerName: 'Nombre', width: 150, flex: 1 },
        { field: 'region', headerName: 'Region', width: 150, flex: 1 }
    ];

    const dispatch = useAppDispatch();
    const { isLoading, provinces, error } = useAppSelector(provinceState);

    useEffect(() => {
        dispatch(fecthProvinces());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert('Error provncias');
        }
    }, [error]);

    useEffect(() => {
        if (isLoading) {
            console.log('cargando');
        }
    }, [isLoading]);

    return <Table rows={provinces} columns={columnsProvinces} tableName={'Provincias'} />;
};
