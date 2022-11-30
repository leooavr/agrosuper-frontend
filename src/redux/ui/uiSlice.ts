import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

export interface UiState {
    drawerWidth: number;
    openDrawer: boolean;
}

const initialState: UiState = {
    drawerWidth: 240,
    openDrawer: false
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openCloseDrawer: (state) => {
            state.openDrawer = !state.openDrawer;
        }
    }
});

export const { openCloseDrawer } = uiSlice.actions;
export const uiState = (state: RootState) => state.ui;
export const uiReducer = uiSlice.reducer;
