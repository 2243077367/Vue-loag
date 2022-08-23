import Vue from 'vue';
import VueRouter from 'vue-router';
import BookRoutes from '../views/routes.js';

Vue.use(VueRouter);

const routes = [
    {
      path: '/home',
    }, ...BookRoutes];

const router = new VueRouter({
    routes,
    mode: 'hash' // hase / history
});

export default router;
