import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Box,
    List,
    Divider,
    IconButton,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Icon,
    Collapse,
    Drawer as DraweMui
} from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ExpandLess, ExpandMore } from '@mui/icons-material';

import { DrawerHeader, Main, StyledLogo } from './styles';
import { AppBar } from '../AppBar';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { uiState, openCloseDrawer, openCloseCollapse } from '../../redux/ui/uiSlice';
import { routesDrawer, RouteDrawer, ChildrenRoute } from './routes';

export const Drawer = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { openDrawer, drawerWidth, openCollapse } = useAppSelector(uiState);

    const handleDrawerOpen = () => {
        dispatch(openCloseDrawer());
    };

    const handleCollapseOpen = (index: number) => {
        dispatch(openCloseCollapse(index));
    };

    const handleNavigation = (path: string) => {
        navigate(`/dashboard/${path}`);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar />
            <DraweMui
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box'
                    },
                    '& div': {
                        bgcolor: theme.palette.primary.main,
                        color: theme.palette.secondary.contrastText
                    }
                }}
                variant="persistent"
                anchor="left"
                open={openDrawer}>
                <DrawerHeader>
                    <StyledLogo src="assets/images/logo-agro.webp" />
                    <IconButton onClick={handleDrawerOpen}>
                        {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {routesDrawer.map(({ icon, name, childrens }: RouteDrawer, index) => (
                        <>
                            <ListItemButton onClick={() => handleCollapseOpen(index)} key={index}>
                                <ListItemIcon>
                                    <Icon>{icon}</Icon>
                                </ListItemIcon>
                                <ListItemText primary={name} />
                                {childrens?.length &&
                                    (openCollapse[index] ? <ExpandLess /> : <ExpandMore />)}
                            </ListItemButton>
                            {childrens?.length && (
                                <Collapse in={openCollapse[index]} timeout="auto" unmountOnExit>
                                    {childrens.map(
                                        (
                                            { iconChildren, nameChildren, path }: ChildrenRoute,
                                            index
                                        ) => (
                                            <List component="div" disablePadding key={index}>
                                                <ListItemButton
                                                    sx={{ pl: 4 }}
                                                    onClick={() => handleNavigation(path)}>
                                                    <ListItemIcon>
                                                        <Icon>{iconChildren}</Icon>
                                                    </ListItemIcon>
                                                    <ListItemText primary={nameChildren} />
                                                </ListItemButton>
                                            </List>
                                        )
                                    )}
                                </Collapse>
                            )}
                        </>
                    ))}
                </List>
            </DraweMui>
            <Main open={openDrawer} drawerWidth={drawerWidth}>
                <DrawerHeader />
                <Outlet />
            </Main>
        </Box>
    );
};

export default Drawer;
