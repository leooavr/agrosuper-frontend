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

import { Drawer, DrawerHeader } from './styles';
import { AppBar } from '../AppBar';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { uiState, openCloseDrawer } from '../../redux/ui/uiSlice';
import { Outlet } from 'react-router-dom';

export const MiniDrawer = () => {
    const theme = useTheme();
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
                <Outlet />
            </Box>
        </Box>
    );
};

export default MiniDrawer;
