import React from 'react';
import { DataGrid, GridRowsProp, GridColDef, esES } from '@mui/x-data-grid';

const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World', col3: 'asdfj' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome', col3: 'asdfj' },
    { id: 3, col1: 'MUI', col2: 'is Amazing', col3: 'asdfj' }
];

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150, flex: 1 },
    { field: 'col2', headerName: 'Column 2', width: 150, flex: 1 },
    { field: 'col3', headerName: 'Column 3', width: 150, flex: 1 }
];

export const Table = () => {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                autoHeight
            />
        </div>
    );
};
