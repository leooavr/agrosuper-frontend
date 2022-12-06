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
    Collapse
} from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ExpandLess, ExpandMore } from '@mui/icons-material';

import { Drawer, DrawerHeader } from './styles';
import { AppBar } from '../Appbar';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { uiState, openCloseDrawer, openCloseCollapse } from '../../redux/ui/uiSlice';
import { routesDrawer, RouteDrawer, ChildrenRoute } from './routes';

export const MiniDrawer = () => {
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
            <Drawer variant="permanent" open={openDrawer} drawerWidth={drawerWidth}>
                <DrawerHeader>
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
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Outlet />
            </Box>
        </Box>
    );
};

export default MiniDrawer;
