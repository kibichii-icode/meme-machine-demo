import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, token, user) {
      state.status = 'success';
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    }
  },
  actions: {
    async login(context, email, password) {
      context.commit('auth_request');

      try {
        const response = await axios.post('http://localhost:8000/login', {
          email,
          password
        });

        const { token, user } = response.data;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = token;
        context.commit('auth_success', token, user);

        return Promise.resolve(response);
      } catch (err) {
        context.commit('auth_error');
        localStorage.removeItem('token');
        return Promise.reject(err);
      }
    },
    register(context, user) {
      return new Promise((resolve, reject) => {
        context.commit('auth_request');

        axios({
          url: 'http://localhost:8000/register',
          data: user,
          method: 'POST'
        })
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem('token', token);
            // Add the following line:
            axios.defaults.headers.common['Authorization'] = token;
            context.commit('auth_success', token, user);
            resolve(resp);
          })
          .catch(err => {
            context.commit('auth_error', err);
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    logout(context) {
      return new Promise(resolve => {
        context.commit('logout');
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        resolve();
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
});
