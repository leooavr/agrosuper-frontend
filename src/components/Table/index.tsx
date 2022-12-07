import React from 'react';
import { DataGrid, GridRowsProp, GridColDef, esES } from '@mui/x-data-grid';

interface TableProps {
    rows: GridRowsProp;
    columns: GridColDef[];
}

export const Table: React.FC<TableProps> = ({ columns, rows }) => {
    return (
        <div style={{ height: 300, width: '100%' }}>
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
