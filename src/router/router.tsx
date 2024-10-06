import GiatSay from '../pages/GiatSay';
import Home from '../pages/Home';
import Contact from '../pages/contact';
import About from '../pages/About';

const routes = {
    home: '/',
    about: '/about',
    id: '/@:nickname',
    adopt: '/adopt',
    search: '/search',
    contact: '/contact',
    GiatSay: '/dich-vu-giat-say',
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

    { path: routes.GiatSay, component: GiatSay },
];

const privateRoutes: RouteObject[] = [];

export { routes, publicRoutes, privateRoutes };
