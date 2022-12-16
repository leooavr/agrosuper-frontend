import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import { store } from './redux/store';
import { theme } from './styles';
import { AppRouter } from './router';

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppRouter />
            </ThemeProvider>
        </Provider>
    );
};

export default App;
