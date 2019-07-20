import Vue from 'vue';
import Vuex from 'vuex';
import module1 from './module/module1';
import user from './module/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    module1,
    user,
  },
});
