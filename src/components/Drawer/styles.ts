import { Theme, CSSObject, styled } from '@mui/material/styles';
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';

export const openedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
});

export const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`
    }
});

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));

interface DrawerProps extends MuiDrawerProps {
    open?: boolean;
    drawerWidth: number;
}

export const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})<DrawerProps>(({ theme, open, drawerWidth }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme, drawerWidth),
        '& .MuiDrawer-paper': openedMixin(theme, drawerWidth)
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
    })
}));
