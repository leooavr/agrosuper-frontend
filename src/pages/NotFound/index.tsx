import React from 'react';
import { useRouteError } from 'react-router-dom';

export const NotFound = () => {
    const error: any = useRouteError();

    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <p>{error.statusText || error.message}</p>
        </div>
    );
};
