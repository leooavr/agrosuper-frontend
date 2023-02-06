import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../store';
import { regionsService } from '../../services';

export interface Region {
    id: number;
    name: string;
}

export interface RegionState {
    regions: Region[];
    isLoading: boolean;
    error: boolean;
}

const initialState: RegionState = {
    regions: [],
    isLoading: false,
    error: false
};

export const regionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {
        isChecking: (state) => {
            state.isLoading = !state.isLoading;
            state.error = false;
        },
        getRegions: (state, action: PayloadAction<Region[]>) => {
            const { payload } = action;
            state.regions = payload;
            state.isLoading = false;
        },
        onFailed: (state) => {
            state.error = true;
            state.isLoading = false;
        }
    }
});

export const { getRegions, isChecking, onFailed } = regionSlice.actions;

export const fecthRegions = (): AppThunk => async (dispatch) => {
    try {
        dispatch(isChecking());
        const { data } = await regionsService.getRegions();
        dispatch(getRegions(data));
    } catch (error) {
        dispatch(onFailed());
    }
};

export const regionState = (state: RootState) => state.regions;
export const regionReducer = regionSlice.reducer;
