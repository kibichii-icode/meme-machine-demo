import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCoffee, faStar, faCheck);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
