import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '../store';
import { clientServices } from '../../services';

export interface Client {
    id: number;
    rut: string;
    address: string;
    commune: string;
    socialreason: string;
}

export interface ClientState {
    clients: Client[];
    isLoading: boolean;
    error: boolean;
}

const initialState: ClientState = {
    clients: [],
    isLoading: false,
    error: false
};

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        isChecking: (state) => {
            state.isLoading = !state.isLoading;
            state.error = false;
        },
        getClients: (state, action: PayloadAction<Client[]>) => {
            const { payload } = action;
            state.clients = payload.map((client: any) => {
                const { id, rut, address, commune, socialreason } = client;
                return {
                    id,
                    rut,
                    address,
                    commune: commune.name,
                    socialreason,
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

export const { getClients, isChecking, onFailed } = clientSlice.actions;

export const fecthClients = (): AppThunk => async (dispatch) => {
    try {
        dispatch(isChecking());
        const { data } = await clientServices.getClients();
        dispatch(getClients(data));
    } catch (error) {
        dispatch(onFailed());
    }
};

export const clientState = (state: RootState) => state.clients;
export const clientReducer = clientSlice.reducer;
