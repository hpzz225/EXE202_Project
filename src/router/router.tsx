import About from '../pages/About';
import Home from '../pages/Home';

const routes = {
    home: '/',
    about: '/about',
    id: '/@:nickname',
    adopt: '/adopt',
    search: '/search',
};

interface RouteObject {
    path: string;
    component: React.ComponentType;
    layout?: React.ComponentType<{ children: React.ReactNode }>;
}
const publicRoutes: RouteObject[] = [
    { path: routes.home, component: Home },
    { path: routes.about, component: About },
];

const privateRoutes: RouteObject[] = [];

export { routes, publicRoutes, privateRoutes };
