import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '../services/AuthService'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    apiUrl: 'http://mevn-hwk-journal.educationetc.org',
    username: null,
    userId: null
  },
  mutations: {
    authenticate(state) {
      state.isLoggedIn = auth.isLoggedIn();
      if (state.isLoggedIn) {
        state.username = auth.getUsername();
        state.userId = auth.getUserId();
      } else {
        state.username = null;
        state.userId = null;
      }
    }
  },
  actions: {
    authenticate(context) {
      context.commit('authenticate');
    }
  },
  modules: {
  }
})
