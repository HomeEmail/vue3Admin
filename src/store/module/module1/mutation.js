const GET_VAL = 'GET_VAL';

export default {
  /**
   * 记录val
   * 直接修改state，eslint会报错，下面加了一条不校验的注释
   * @param {*} state
   */
  /* eslint no-param-reassign: "error" */
  [GET_VAL](state) {
    state.val = 2;
  },
};
