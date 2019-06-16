import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faStar,
  faCheck,
  faShareAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCoffee, faStar, faCheck, faShareAlt);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
