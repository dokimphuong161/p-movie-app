import Home from '~/pages/Home';
import Catalog from '~/pages/Catalog';
import Detail from '~/pages/Detail';
import { GridLayout } from '~/layouts/Layouts';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/:category',
        component: Catalog,
        layout: null,
    },
    {
        path: '/:category/:id',
        component: Detail,
        layout: GridLayout,
    },
    {
        path: '/:category/search/:id',
        component: Catalog,
    },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
