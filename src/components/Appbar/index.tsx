import React from 'react';
import { Toolbar, IconButton, Typography, Menu, MenuItem, Divider } from '@mui/material';
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';

import { AppBarStyle, StyledContent } from './style';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';
import { uiState, openCloseDrawer, closeMenu, openMenu } from '../../redux/ui/uiSlice';
import { authState } from '../../redux/auth/authSlice';

export const AppBar = () => {
    const dispatch = useAppDispatch();
    const { openDrawer, drawerWidth, anchorEl } = useAppSelector(uiState);
    const { user } = useAppSelector(authState);

    const handleDrawerOpen = () => {
        dispatch(openCloseDrawer());
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        dispatch(openMenu(event.currentTarget));
    };

    const handleClose = () => {
        dispatch(closeMenu());
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
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Administración de datos Agrosuper
                </Typography>
                <StyledContent>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        <MenuItem>{user.name}</MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
                    </Menu>
                </StyledContent>
            </Toolbar>
        </AppBarStyle>
    );
};
