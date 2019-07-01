import Vue from 'vue';
import Element from 'element-ui';
import App from './App.vue';
import '@/assets/styles/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'iflex/iflex.css';
import '@/assets/styles/common.less';
import router from '@/routers/index';
import store from '@/store/index';
import axiosInstance from '@/plugins/axios/index';
import '@/plugins/mock/index';


Vue.config.productionTip = false;
Vue.prototype.$axios = axiosInstance;
Vue.use(Element, { size: 'mini' }); // medium small mini

// 全局路由前置守卫
router.beforeEach((to, from, next) => {
  console.log('全局路由前置守卫 beforeEach to:', to, 'from:', from);
  next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
