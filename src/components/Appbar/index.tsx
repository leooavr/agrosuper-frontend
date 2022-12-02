import React from 'react';
import { Toolbar, IconButton, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { AppBarStyle } from './style';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';
import { uiState, openCloseDrawer } from '../../redux/ui/uiSlice';

export const AppBar = () => {
    const dispatch = useAppDispatch();
    const { openDrawer, drawerWidth } = useAppSelector(uiState);

    const handleDrawerOpen = () => {
        dispatch(openCloseDrawer());
    };

    return (
        <AppBarStyle position="fixed" open={openDrawer} drawerWidth={drawerWidth}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(openDrawer && { display: ' ' })
                    }}>
                    <Menu />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Agrosuper
                </Typography>
            </Toolbar>
        </AppBarStyle>
    );
};
