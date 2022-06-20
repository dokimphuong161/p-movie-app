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
    },
    {
        path: '/:category/:id',
        component: Detail,
    },
    {
        path: '/:category/search/:id',
        component: Catalog,
        layout: GridLayout,
    },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
