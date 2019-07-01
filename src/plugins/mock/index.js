/* eslint-disable import/no-extraneous-dependencies */
import Mock from 'mockjs';

if (process.env.NODE_ENV === 'development') {
  Mock.mock(`${process.env.VUE_APP_BASE_URL}/auth/status`, {
    'object|2-4': {
      20190601: '100',
      20190602: '200',
      20190603: '300',
      20190604: '400',
    },
  });
}
