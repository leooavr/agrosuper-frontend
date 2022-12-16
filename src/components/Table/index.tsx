import React from 'react';
import { DataGrid, GridRowsProp, GridColDef, esES } from '@mui/x-data-grid';

interface TableProps {
    rows: GridRowsProp;
    columns: GridColDef[];
    tableName: string;
}

export const Table: React.FC<TableProps> = ({ columns, rows, tableName }) => {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <h1>Tabla {tableName}</h1>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                autoHeight
            />
        </div>
    );
};
