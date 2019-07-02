const GET_USERNAME = 'GET_userName';

export default {
  /**
   * 记录val
   * 直接修改state，eslint会报错，下面加了一条不校验的注释
   * @param {*} state
   */
  /* eslint no-param-reassign: "error" */
  [GET_USERNAME](state) {
    state.userName = 'zsf';
  },
};
