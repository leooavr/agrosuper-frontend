import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState, AppThunk } from '../store';
import { authService } from '../../services';

export interface User {
    rut: string;
    name: string;
    email: string;
}

export interface AuthState {
    isLoading: boolean;
    isAuthenticated: boolean;
    token: string;
    user: User;
    error: boolean;
}

const initialState: AuthState = {
    isLoading: false,
    isAuthenticated: false,
    token: '',
    user: {
        rut: '',
        name: '',
        email: ''
    },
    error: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        isChecking: (state) => {
            state.isLoading = !state.isLoading;
        },
        loginSucess: (state, action: PayloadAction<any>) => {
            const { payload } = action;
            state.isAuthenticated = true;
            state.isLoading = false;
            state.user = {
                email: payload.email,
                name: payload.name,
                rut: payload.rut
            };
            state.token = payload.token;
            localStorage.setItem('token', payload.token);
        },
        loginFailed: (state) => {
            state.error = true;
            state.isLoading = false;
        }
    }
});

export const { isChecking, loginFailed, loginSucess } = authSlice.actions;

export const login =
    (rut: string, password: string): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(isChecking());
            const { data } = await authService.login(rut, password);
            dispatch(loginSucess(data));
        } catch (error) {
            dispatch(loginFailed());
        }
    };

export const authState = (state: RootState) => state.auth;
export const authReducer = authSlice.reducer;
