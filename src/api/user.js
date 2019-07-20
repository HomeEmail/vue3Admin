
import axios from '@/plugins/axios/index';

// 获取登录密码加密的key
export function getLoginAesKey() {
  const url = 'loginKey';
  return axios.get(url);
}
export function login(data) {
  const url = 'login';
  return axios.post(url, data);
}
export function logout() {
  const url = 'logout';
  return axios.post(url);
}
export function test() {
  console.log('test');
  return 'test';
}