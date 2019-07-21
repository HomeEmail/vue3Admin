export default {
  agePlus: (state) => {
    const { age } = state;
    return age + 1;
  },
  userinfoGetter: (state) => {
    if (state.userinfo.token) {
      return state.userinfo;
    }
    const s = window.sessionStorage.getItem('userinfo');
    if (s) {
      const info = JSON.parse(s);
      // state.userinfo = info;
      return info;
    }
    return {};
  },
};
