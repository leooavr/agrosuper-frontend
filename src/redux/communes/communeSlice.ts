import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../store';
import { communesService } from '../../services';

export interface Commune {
    id: number;
    name: string;
    branchOffice: string;
    province: string;
    region: string;
}

export interface CommuneState {
    communes: Commune[];
    isLoading: boolean;
    error: boolean;
}

const initialState: CommuneState = {
    communes: [],
    isLoading: false,
    error: false
};

export const communeSlice = createSlice({
    name: 'commune',
    initialState,
    reducers: {
        isChecking: (state) => {
            state.isLoading = !state.isLoading;
            state.error = false;
        },
        getCommunes: (state, action: PayloadAction<Commune[]>) => {
            const { payload } = action;
            state.communes = payload.map((commune: any) => {
                const { id, name, branchOffice, province } = commune;
                return {
                    id,
                    name,
                    branchOffice: branchOffice.id,
                    province: province.name,
                    region: province.region.name
                };
            });
            state.isLoading = false;
        },
        onFailed: (state) => {
            state.error = true;
            state.isLoading = false;
        }
    }
});

export const { getCommunes, isChecking, onFailed } = communeSlice.actions;

export const fecthCommunes = (): AppThunk => async (dispatch) => {
    try {
        dispatch(isChecking());
        const { data } = await communesService.getCommunes();
        dispatch(getCommunes(data));
    } catch (error) {
        dispatch(onFailed());
    }
};

export const communeState = (state: RootState) => state.communes;
export const communeReducer = communeSlice.reducer;
