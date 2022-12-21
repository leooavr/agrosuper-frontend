import axios from 'axios';
import { storageService } from '../services';
import { auth } from '../helpers/constants';
import { store } from '../redux/store';
import { refreshSession } from '../redux/auth/authSlice';

export const clientBackend = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 1000
});

clientBackend.interceptors.request.use(
    (request: any) => {
        const accessToken = storageService.getAccessToken();
        const refreshToken = storageService.getRefreshToken();

        if (accessToken && refreshToken) {
            request.headers[auth.access_token] = accessToken;
            request.headers[auth.refresh_token] = refreshToken;
        }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

clientBackend.interceptors.response.use(
    (response: any) => {
        const { access_token: accessToken, refresh_token: refreshToken } = response.headers;
        if (accessToken && refreshToken) {
            const payload = {
                accessToken,
                refreshToken
            };
            store.dispatch(refreshSession(payload));
        }
        return response;
    },
    (error) => {
        const { response } = error;
        if (response.status === 403) {
            storageService.clearStorage();
            window.location.assign('/');
        }
    }
);
