import Vue from 'vue';
import Vuelidate from 'vuelidate';
import TreeView from 'vue-json-tree-view';
import App from './App.vue';
import router from './router';
import store from './store';
import SocialSharing from 'vue-social-sharing';
import VueMeta from 'vue-meta';
import './fontawesome';

// for our demo app to show a tour guide/features on a page
import TourGuide from './components/TourGuide';

import '@/assets/css/tailwind.css';

Vue.config.productionTip = false;
Vue.use(VueMeta);
Vue.use(SocialSharing);
Vue.use(Vuelidate);
Vue.use(TreeView);
Vue.component('TourGuide', TourGuide);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
