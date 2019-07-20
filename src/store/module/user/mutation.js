const SET_USERINFO = 'SET_USERINFO';

export default {
  /**
   * 记录val
   * 直接修改state，eslint会报错，下面加了一条不校验的注释
   * @param {*} state
   */
  /* eslint no-param-reassign: "error" */
  [SET_USERINFO](state, preload) {
    state.userinfo = preload;
  },
};
