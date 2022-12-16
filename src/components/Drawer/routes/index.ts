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
        icon: 'travel_explore',
        name: 'Geografía',
        childrens: [
            {
                path: 'regions',
                nameChildren: 'Regiones',
                iconChildren: 'south_america'
            },
            {
                path: 'provinces',
                nameChildren: 'Provincias',
                iconChildren: 'south_america'
            },
            {
                path: 'communes',
                nameChildren: 'Comunas',
                iconChildren: 'south_america'
            },
            {
                path: 'branchOffices',
                nameChildren: 'Sucursales',
                iconChildren: 'storemalldirectory'
            },
            {
                path: 'form',
                nameChildren: 'Formulario',
                iconChildren: 'description'
            }
        ]
    },
    {
        icon: 'redeem',
        name: 'Comercio',
        childrens: [
            {
                path: 'sales',
                nameChildren: 'Ventas',
                iconChildren: 'attach_money'
            },
            {
                path: 'clients',
                nameChildren: 'Clientes',
                iconChildren: 'perm_identity'
            },
            {
                path: 'projectedConsumption',
                nameChildren: 'Consumo Proyectado',
                iconChildren: 'rule'
            },
            {
                path: 'realConsumption',
                nameChildren: 'Consumo Real',
                iconChildren: 'playlist_add_check'
            },
            {
                path: 'salesChannels',
                nameChildren: 'Canales de Venta',
                iconChildren: 'storemalldirectory'
            },
            {
                path: 'deliveryZones',
                nameChildren: 'Zonas de reparto',
                iconChildren: 'local_shipping'
            },
            {
                path: 'proteinSectors',
                nameChildren: 'Sector Proteína',
                iconChildren: 'savings'
            }
        ]
    },
    {
        icon: 'groups',
        name: 'Poblacional',
        childrens: [
            {
                path: 'projectedCommunalPoblation',
                nameChildren: 'Proyeccion Comunal',
                iconChildren: 'people'
            },
            {
                path: 'projectedAreaPoblation',
                nameChildren: 'Proyeccion Area',
                iconChildren: 'people'
            },
            {
                path: 'district',
                nameChildren: 'Distritos',
                iconChildren: 'real_estate_agent'
            },
            {
                path: 'area',
                nameChildren: 'Areas',
                iconChildren: 'real_estate_agent'
            },
            {
                path: 'areasCategory',
                nameChildren: 'Categoría Areas',
                iconChildren: 'category'
            }
        ]
    }
];
