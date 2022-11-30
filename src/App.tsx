import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import { MiniDrawer } from './components';
import { store } from './redux/store';
import { theme } from './styles';

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MiniDrawer />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
