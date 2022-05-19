import HeaderOnly from '~/components/Layout/HeaderOnly/HeaderOnly';

import Home from '~/pages/Home/Home';
import Profile from '~/pages/Profile/Profile';
import Following from '~/pages/Following/Following';
import Upload from '~/pages/Upload/Upload';
import Search from '~/pages/Search/Search';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
