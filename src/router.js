import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

import SiteLayout from '@/layouts/site/SiteLayout';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: SiteLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'about',
          name: 'about',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/About.vue')
        }
      ]
    }
  ]
});
