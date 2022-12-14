import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/store/hooks';

interface PublicRouterProps {
    children: any;
}

export const PublicRoutes: React.FC<PublicRouterProps> = ({ children }) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return isAuthenticated ? <Navigate to="/dashboard" /> : children;
};
