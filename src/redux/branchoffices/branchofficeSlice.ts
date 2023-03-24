import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../store';
import { branchofficesService } from '../../services';

export interface BranchOffice {
    id: string;
    name: string;
}

export interface BranchOfficeState {
    branchOffices: BranchOffice[];
    isLoading: boolean;
    error: boolean;
}

const initialState: BranchOfficeState = {
    branchOffices: [],
    isLoading: false,
    error: false
};

export const branchofficeSlice = createSlice({
    name: 'branchOffices',
    initialState,
    reducers: {
        isChecking: (state) => {
            state.isLoading = !state.isLoading;
            state.error = false;
        },
        getBranchOffices: (state, action: PayloadAction<BranchOffice[]>) => {
            const { payload } = action;
            state.branchOffices = payload;
            state.isLoading = false;
        },
        onFailed: (state) => {
            state.error = true;
            state.isLoading = false;
        }
    }
});

export const { getBranchOffices, isChecking, onFailed } = branchofficeSlice.actions;

export const fecthBranchOffices = (): AppThunk => async (dispatch) => {
    try {
        dispatch(isChecking());
        const { data } = await branchofficesService.getBranchOffices();
        dispatch(getBranchOffices(data));
    } catch (error) {
        dispatch(onFailed());
    }
};

export const branchOfficeState = (state: RootState) => state.branchoffices;
export const branchofficeReducer = branchofficeSlice.reducer;
