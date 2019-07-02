import state from './state';
import mutations from './mutation';
import actions from './action';
import getters from './getter';

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
