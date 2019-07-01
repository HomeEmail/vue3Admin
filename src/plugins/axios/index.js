import axios from 'axios';
import axiosConfig from './config';

const instance = axios.create(axiosConfig);

// 请求前拦截处
instance.interceptors.request.use((config) => {
  const con = config;
  con.headers.Authorization = 'Bearer'; // test例子
  return con;
}, err => Promise.reject(err));

instance.interceptors.response.use(
  response => Promise.resolve(response.data),

  (error) => {
    const {
      code, response, message, config,
    } = error;

    if (code === 'ECONNABORTED') {
      console.error('请求超时，请重试', message);
    }
    return Promise.reject(message);
  },
);

export default instance;
