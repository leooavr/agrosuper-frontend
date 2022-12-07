import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export interface UiState {
    drawerWidth: number;
    openDrawer: boolean;
    openCollapse: boolean[];
    anchorEl: null | HTMLElement;
}

const initialState: UiState = {
    drawerWidth: 240,
    openDrawer: false,
    openCollapse: [false],
    anchorEl: null
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
        },
        closeMenu: (state) => {
            state.anchorEl = null;
        },
        openMenu: (state, action: PayloadAction<any>) => {
            const { payload } = action;
            state.anchorEl = payload;
        }
    }
});

export const { openCloseDrawer, openCloseCollapse, closeMenu, openMenu } = uiSlice.actions;
export const uiState = (state: RootState) => state.ui;
export const uiReducer = uiSlice.reducer;
