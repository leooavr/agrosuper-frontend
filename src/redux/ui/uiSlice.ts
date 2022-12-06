import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export interface UiState {
    drawerWidth: number;
    openDrawer: boolean;
    openCollapse: boolean[];
}

const initialState: UiState = {
    drawerWidth: 240,
    openDrawer: false,
    openCollapse: [false]
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openCloseDrawer: (state) => {
            state.openDrawer = !state.openDrawer;
            if (!state.openDrawer) {
                state.openCollapse = initialState.openCollapse;
            }
        },
        openCloseCollapse: (state, action: PayloadAction<number>) => {
            const { payload } = action;
            const newStateCollapse = state.openCollapse.map((oldItem, index) =>
                index === payload ? oldItem : false
            );
            newStateCollapse[payload] = !state.openCollapse[payload];
            state.openCollapse = newStateCollapse;
        }
    }
});

export const { openCloseDrawer, openCloseCollapse } = uiSlice.actions;
export const uiState = (state: RootState) => state.ui;
export const uiReducer = uiSlice.reducer;
