import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState, AppThunk } from '../store';
import { authService, storageService } from '../../services';

export interface User {
    rut: string;
    name: string;
    email: string;
}

export interface AuthState {
    isLoading: boolean;
    isAuthenticated: boolean;
    accessToken: string;
    refreshToken: string;
    user: User;
    error: boolean;
}

const initialState: AuthState = {
    isLoading: false,
    isAuthenticated: false,
    accessToken: '',
    refreshToken: '',
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
            state.error = false;
        },
        loginSucess: (state, action: PayloadAction<any>) => {
            const { payload } = action;
            console.log(payload);
            state.isAuthenticated = true;
            state.isLoading = false;
            state.user = {
                email: payload.email,
                name: payload.name,
                rut: payload.rut
            };
            state.accessToken = payload.accessToken;
            state.refreshToken = payload.refreshToken;
            storageService.setAccessToken(payload.accessToken);
            storageService.setRefreshToken(payload.refreshToken);
        },
        refreshSession: (state, action: PayloadAction<any>) => {
            const { payload } = action;
            state.isAuthenticated = true;
            state.accessToken = payload.accessToken;
            state.refreshToken = payload.refreshToken;
            state.user = state.user;
            storageService.setAccessToken(payload.accessToken);
            storageService.setRefreshToken(payload.refreshToken);
        },
        loginFailed: (state) => {
            state.error = true;
            state.isLoading = false;
        },
        validateSession: (state, action: PayloadAction<any>) => {
            const { payload } = action;
            state.isAuthenticated = payload.accessToken ? true : false;
            state.accessToken = payload.accessToken;
            state.refreshToken = payload.refreshToken;
        }
    }
});

export const { isChecking, loginFailed, loginSucess, validateSession, refreshSession } =
    authSlice.actions;

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
