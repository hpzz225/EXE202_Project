import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/contact';

const routes = {
    home: '/',
    about: '/about',
    id: '/@:nickname',
    adopt: '/adopt',
    search: '/search',
    contact: '/contact',
};

interface RouteObject {
    path: string;
    component: React.ComponentType;
    layout?: React.ComponentType<{ children: React.ReactNode }>;
}
const publicRoutes: RouteObject[] = [
    { path: routes.home, component: Home },
    { path: routes.about, component: About },
    { path: routes.contact, component: Contact },

];

const privateRoutes: RouteObject[] = [];

export { routes, publicRoutes, privateRoutes };
