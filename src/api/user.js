
import axios from '@/plugins/axios/index';

// 获取登录密码加密的key
export function getLoginAesKey() {
  const url = 'auth/status';
  return axios.post(url);
}
export function test() {
  console.log('test');
  return 'test';
}
