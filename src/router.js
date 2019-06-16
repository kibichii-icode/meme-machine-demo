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
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/about/About.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () =>
        import(/* webpackChunkName: "create" */ './views/create/Create.vue')
    },
    {
      path: '/create/:gifId',
      name: 'create-single',
      component: () =>
        import(
          /* webpackChunkName: "create" */ './views/create/CreateSingle.vue'
        )
    },
    {
      path: '/memes/:memeId',
      name: 'single-meme',
      component: () =>
        import(/* webpackChunkName: "create" */ './views/memes/SingleMeme.vue')
    },
    {
      path: '/memes',
      name: 'all-memes',
      component: () =>
        import(/* webpackChunkName: "create" */ './views/memes/AllMemes.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './views/auth/Login.vue')
    }
  ]
});
