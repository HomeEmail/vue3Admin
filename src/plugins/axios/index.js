import Vue from 'vue';
import axios from 'axios';
// import { mapState, mapGetters, mapActions } from 'vuex';
import store from '@/store/index';
import axiosConfig from './config';

const instance = axios.create(axiosConfig);

// 请求前拦截处
instance.interceptors.request.use((config) => {
  const con = config;
  // const obj = {
  //   ...mapState({
  //     token: state => state.user.userinfo.token,
  //   }),
  // };
  console.log('instance.interceptors.request store.state:', store.state);
  con.headers.Authorization = store.state.user.userinfo.token; // test例子
  return con;
}, err => Promise.reject(err));

instance.interceptors.response.use(
  response => Promise.resolve(response.data),

  (error) => {
    const {
      code, response, message, config,
    } = error;
    console.log('response', response);
    if (response.status === 401) {
      // 未登陆
      Vue.prototype.$alert('登录失效，请重新登录', '提示', {
        confirmButtonText: '确定',
        callback: (action) => {
          Vue.prototype.router.push('/login');
        },
      });
    }
    if (code === 'ECONNABORTED') {
      console.error('请求超时，请重试', message);
    }
    return Promise.reject(message);
  },
);

export default instance;
