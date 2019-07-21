import Vue from 'vue';
import Router from 'vue-router';
// import defaultComponent from '@/views/default.vue';
// import Home from '@/components/home.vue';
import Home from '@/components/home_image_tool.vue';
import contentRouter from '@/components/content-router.vue';
import NotFound from '@/views/404.vue';
// import routerConfig from '@/routers/config';
import routerConfig from '@/routers/config_image_tool';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: routerConfig(Home, contentRouter, NotFound),
});
