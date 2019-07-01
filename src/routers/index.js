import Vue from 'vue';
import Router from 'vue-router';
import defaultComponent from '@/views/default.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: defaultComponent,
    },
    {
      path: '/subPage',
      name: 'subPage',
      // route level code-splitting
      // this generates a separate chunk (subPage.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "subPage" */'@/views/subPage.vue'),
    },
    {
      path: '/vuexDemo',
      name: 'vuexDemo',
      component: () => import('@/views/vuexDemo.vue'),
    },
    {
      path: '/axiosDemo',
      name: 'axiosDemo',
      component: () => import('@/views/axiosDemo.vue'),
    },
  ],
});
