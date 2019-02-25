import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/home/Home.vue')
    },
    {
      path: 'about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/about/About.vue')
    },
    {
      path: 'create',
      name: 'create',
      component: () =>
        import(/* webpackChunkName: "create" */ './views/create/Create.vue')
    }
  ]
});
