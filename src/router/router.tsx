import GiatSay from '../pages/GiatSay';
import Home from '../pages/Home';
import Contact from '../pages/contact';
import About from '../pages/About';
import Services from '@/pages/services';
import Giay from '@/pages/Giay';

const routes = {
    home: '/',
    about: '/about',
    id: '/@:nickname',
    adopt: '/adopt',
    search: '/search',
    contact: '/contact',
    GiatSay: '/dich-vu-giat-say',
    GiayDep: '/dich-vu-giay-dep',
    servies: '/dich-vu',
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
    { path: routes.servies, component: Services },

    { path: routes.GiatSay, component: GiatSay },
    { path: routes.GiayDep, component: Giay },
];

const privateRoutes: RouteObject[] = [];

export { routes, publicRoutes, privateRoutes };
