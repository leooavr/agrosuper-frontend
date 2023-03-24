import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../store';
import { provincesService } from '../../services';

export interface Province {
    id: number;
    name: string;
    region: string;
}

export interface ProvinceState {
    provinces: Province[];
    isLoading: boolean;
    error: boolean;
}

const initialState: ProvinceState = {
    provinces: [],
    isLoading: false,
    error: false
};

export const provinceSlice = createSlice({
    name: 'province',
    initialState,
    reducers: {
        isChecking: (state) => {
            state.isLoading = !state.isLoading;
            state.error = false;
        },
        getProvinces: (state, action: PayloadAction<Province[]>) => {
            const { payload } = action;
            state.provinces = payload.map((province: any) => {
                const { id, name, region } = province;
                return {
                    id,
                    name,
                    region: region.name
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

export const { getProvinces, isChecking, onFailed } = provinceSlice.actions;

export const fecthProvinces = (): AppThunk => async (dispatch) => {
    try {
        dispatch(isChecking());
        const { data } = await provincesService.getProvinces();
        dispatch(getProvinces(data));
    } catch (error) {
        dispatch(onFailed());
    }
};

export const provinceState = (state: RootState) => state.provinces;
export const provinceReducer = provinceSlice.reducer;
