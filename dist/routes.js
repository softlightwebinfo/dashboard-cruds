"use strict";
// @ts-ignore
const routes = require('next-routes');
const route = routes();
// Name   Page      Pattern
// @ts-ignore
module.exports = route
    .add({ name: 'index', pattern: '/', page: 'index' })
    .add({ name: 'live', pattern: '/live', page: 'live' })
    .add({ name: 'login', pattern: '/login', page: 'login' })
    .add({ name: 'contact', pattern: '/contact', page: 'contact' })
    .add({ name: 'register', pattern: '/register', page: 'register' })
    .add({ name: 'studios', pattern: '/studios', page: 'studios' })
    .add({ name: 'studio', pattern: '/studio/:slug/:id', page: 'studio' })
    .add({ name: 'recording', pattern: '/recording', page: 'recording' })
    .add({ name: 'streams', pattern: '/streams', page: 'streams' })
    .add({ name: 'stream', pattern: '/stream/:date/:slug/:id', page: 'stream' })
    .add({ name: 'rates', pattern: '/rates', page: 'rates' })
    .add({ name: 'dashboard', pattern: '/dashboard', page: 'dashboard' })
    .add({ name: 'dashboard-banners', pattern: '/dashboard/banners', page: 'dashboard/banners' })
    .add({ name: 'dashboard-create-banner', pattern: '/dashboard/banner/create', page: 'dashboard/create-banner' })
    .add({ name: 'dashboard-update-banner', pattern: '/dashboard/banner/:id/update', page: 'dashboard/update-banner' })
    .add({ name: 'dashboard-users', pattern: '/dashboard/users', page: 'dashboard/users' })
    .add({ name: 'dashboard-studio', pattern: '/dashboard/studios', page: 'dashboard/studios' })
    .add({ name: 'dashboard-create-studio', pattern: '/dashboard/studio/create', page: 'dashboard/create-studio' })
    .add({
    name: 'dashboard-create-studio-prices',
    pattern: '/dashboard/studio/:id/update/price',
    page: 'dashboard/create-studio-prices'
})
    .add({
    name: 'dashboard-create-studio-images',
    pattern: '/dashboard/studio/:id/update/images',
    page: 'dashboard/create-studio-images'
})
    .add({
    name: 'dashboard-create-stream',
    pattern: '/dashboard/stream/create',
    page: 'dashboard/create-stream'
})
    .add({
    name: 'dashboard-streams',
    pattern: '/dashboard/streams',
    page: 'dashboard/streams'
});
//# sourceMappingURL=routes.js.map