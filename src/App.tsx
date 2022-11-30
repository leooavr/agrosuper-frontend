import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { MiniDrawer } from './components';
import { store } from './redux/store';
import { theme } from './styles';

function App() {
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
