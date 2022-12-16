import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/store/hooks';

interface PrivateRouterProps {
    children: any;
}

export const PrivateRoutes: React.FC<PrivateRouterProps> = ({ children }) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    // return isAuthenticated ? children : <Navigate to="/" />;
    return children;
};
