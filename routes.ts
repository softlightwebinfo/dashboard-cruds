// @ts-ignore
const routes = require("next-routes");

module.exports = routes()
    .add({name: 'index', pattern: '/', page: 'index'})
    .add({name: 'login', pattern: '/login', page: 'login'});
