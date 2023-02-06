import React, { useEffect } from 'react';
import { GridColDef } from '@mui/x-data-grid';

import { Table } from '../../components';
import { regionState, fecthRegions } from '../../redux/regions/regionSlice';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';

export const Regions = () => {
    const columnsRegions: GridColDef[] = [
        { field: 'id', headerName: 'Numero', width: 150, flex: 1 },
        { field: 'name', headerName: 'Nombre', width: 150, flex: 1 }
    ];

    const dispatch = useAppDispatch();
    const { isLoading, regions, error } = useAppSelector(regionState);

    useEffect(() => {
        dispatch(fecthRegions());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert('Error Regions');
        }
    }, [error]);

    useEffect(() => {
        if (isLoading) {
            console.log('Cargando');
        }
    }, [isLoading]);

    return <Table rows={regions} columns={columnsRegions} tableName={'Regiones'} />;
};
