const routes = [{
    path: '/about',
    component: () => import('./AboutView.vue')
  }, {
    path: '/',
    component: () => import('./HomeView.vue')
  }, {
    path: '/movie',
    component: () => import('./MovieView.vue')
  }, {
    path: '/routines',
    component: () => import('./RoutinesView.vue')
  }];
  
  export default routes;