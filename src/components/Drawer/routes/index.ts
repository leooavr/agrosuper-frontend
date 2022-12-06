export interface RouteDrawer {
    icon: React.ReactNode;
    name: string;
    childrens?: ChildrenRoute[];
}

export interface ChildrenRoute {
    path: string;
    nameChildren: string;
    iconChildren: string;
}

export const routesDrawer: RouteDrawer[] = [
    {
        icon: 'description',
        name: 'Inicio'
    },
    {
        icon: 'south_america',
        name: 'Geografía',
        childrens: [
            {
                path: 'regions',
                nameChildren: 'Regiones',
                iconChildren: 'analytics'
            },
            {
                path: 'provinces',
                nameChildren: 'Provincias',
                iconChildren: 'analytics'
            },
            {
                path: 'communes',
                nameChildren: 'Comunas',
                iconChildren: 'analytics'
            }
        ]
    }
];
