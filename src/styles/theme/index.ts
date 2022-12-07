import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0288d1',
            light: '#e0e0e0',
            contrastText: '#fff'
        },
        secondary: {
            main: '#ff5722',
            contrastText: '#fff'
        }
    }
});
