import GiatSay from '../pages/GiatSay';
import Home from '../pages/Home';

const routes = {
    home: '/',
    GiatSay: '/dich-vu-giat-say',
};

interface RouteObject {
    path: string;
    component: React.ComponentType;
    layout?: React.ComponentType<{ children: React.ReactNode }>;
}
const publicRoutes: RouteObject[] = [
    { path: routes.home, component: Home },
    { path: routes.GiatSay, component: GiatSay },
];

const privateRoutes: RouteObject[] = [];

export { routes, publicRoutes, privateRoutes };
