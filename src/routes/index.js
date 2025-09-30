import routerConfig from '~/config/routes';
import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
const publicRoutes = [
    { path: routerConfig.home, component: Home },
    { path: routerConfig.following, component: Following },
    { path: routerConfig.profile, component: Profile },
    { path: routerConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routerConfig.search, component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
