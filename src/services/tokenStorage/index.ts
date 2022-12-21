import { auth } from '../../helpers/constants';

export const getAccessToken = () => {
    return localStorage.getItem(auth.access_token);
};

export const getRefreshToken = () => {
    return localStorage.getItem(auth.refresh_token);
};

export const setAccessToken = (accessToken: string) => {
    localStorage.setItem(auth.access_token, accessToken);
};

export const setRefreshToken = (refreshToken: string) => {
    localStorage.setItem(auth.refresh_token, refreshToken);
};

export const clearStorage = () => {
    localStorage.clear();
};
