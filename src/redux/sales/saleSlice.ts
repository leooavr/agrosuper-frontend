import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../store';
import { salesServices } from '../../services';

export interface Sale {
    id: number;
    client: string;
    salesKg: number;
    salesNeta: number;
    month: string;
    year: number;
}

export interface SaleState {
    sales: Sale[];
    isLoading: boolean;
    error: boolean;
}

const initialState: SaleState = {
    sales: [],
    isLoading: false,
    error: false
};

export const saleSlice = createSlice({
    name: 'sale',
    initialState,
    reducers: {
        isChecking: (state) => {
            state.isLoading = !state.isLoading;
            state.error = false;
        },
        getSales: (state, action: PayloadAction<Sale[]>) => {
            const { payload } = action;
            state.sales = payload.map((sale: any) => {
                const { id, client, salesKg, salesNeta, month, year } = sale;
                return {
                    id,
                    client: client.name,
                    salesKg,
                    salesNeta,
                    month,
                    year
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

export const { getSales, isChecking, onFailed } = saleSlice.actions;

export const fecthSales = (): AppThunk => async (dispatch) => {
    try {
        dispatch(isChecking());
        const { data } = await salesServices.getSales();
        dispatch(getSales(data));
    } catch (error) {
        dispatch(onFailed());
    }
};

export const saleState = (state: RootState) => state.sales;
export const saleReducer = saleSlice.reducer;
