import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Box,
    List,
    Divider,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon
} from '@mui/material';
import { ChevronLeft, ChevronRight, Dashboard, Backup, Settings } from '@mui/icons-material';
import { DataGrid, GridRowsProp, GridColDef, esES } from '@mui/x-data-grid';

import { Drawer, DrawerHeader } from './styles';
import { AppBar } from '../Appbar';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { uiState, openCloseDrawer } from '../../redux/ui/uiSlice';

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

export const MiniDrawer = () => {
    const theme = useTheme();
    console.log(theme);
    const dispatch = useAppDispatch();
    const { openDrawer, drawerWidth } = useAppSelector(uiState);

    const handleDrawerOpen = () => {
        dispatch(openCloseDrawer());
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar />
            <Drawer variant="permanent" open={openDrawer} drawerWidth={drawerWidth}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerOpen}>
                        {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Dashboard', 'Backup', 'Settings'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: openDrawer ? 'initial' : 'center',
                                    px: 2.5
                                }}>
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: openDrawer ? 3 : 'auto',
                                        justifyContent: 'center'
                                    }}>
                                    {index === 0 && <Dashboard />}
                                    {index === 1 && <Backup />}
                                    {index === 2 && <Settings />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: openDrawer ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                        autoHeight
                    />
                </div>
            </Box>
        </Box>
    );
};
