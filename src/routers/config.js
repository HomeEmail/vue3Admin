export default (Home, contentRouter, NotFound) => [
  {
    path: '/test',
    component: Home, // 这有个router-view,孩子节点才生效
    name: 'test',
    meta: {
      title: 'test',
      icon: 'el-icon-service',
      hideAtAsideMenu: true,
      hideAtBreadcrumbsNav: true,
      hideAtTabNav: true,
    },
    children: [
      {
        path: '/test1',
        component: () => import('@/views/test/test1.vue'),
        name: 'test1',
        meta: {
          title: 'test1',
          icon: 'el-icon-service',
        },
      },
    ],
  },
  {
    path: '/demo',
    component: Home,
    name: 'demo',
    meta: {
      title: 'demo',
      icon: 'el-icon-menu',
    },
    children: [
      {
        path: '/subPage',
        name: 'subPage',
        meta: {
          title: 'subPage',
          icon: 'el-icon-service',
        },
        // route level code-splitting
        // this generates a separate chunk (subPage.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "subPage" */'@/views/sub-page.vue'),
      },
      {
        path: '/vuexDemo',
        name: 'vuexDemo',
        meta: {
          title: 'vuexDemo',
          icon: 'el-icon-service',
        },
        component: () => import('@/views/vuex-demo.vue'),
      },
      {
        path: '/axiosDemo',
        name: 'axiosDemo',
        meta: {
          title: 'axiosDemo',
          icon: 'el-icon-service',
        },
        component: () => import('@/views/axios-demo.vue'),
      },
    ],
  },
  {
    path: '/home3',
    component: Home, // 这有个router-view,孩子节点才生效
    name: 'home3',
    meta: {
      title: '菜单组1',
      icon: 'el-icon-menu',
    },
    children: [
      {
        path: '/formDemo',
        component: () => import('@/components/dynamic-form/form-demo.vue'),
        name: 'formDemo',
        meta: {
          title: '动态表单demo',
        },
      },
      {
        path: '/parentChildren',
        component: () => import('@/views/parent-children/parent.vue'),
        name: 'parent',
        meta: {
          title: '父子通讯demo',
        },
      },
      {
        component: contentRouter,
        path: '/contentRouter44',
        // contentRouter组件下有孩子的，这个层级的name要和组件
        // contentRouter里的name一样，这样孩子的缓冲打开才能生效
        name: 'contentRouter',
        meta: {
          title: '小学欧迪芬',
          icon: 'el-icon-service',
          needCache: true,
        },
        children: [
          {
            path: '/welcome',
            component: () => import('@/views/welcome.vue'),
            // 如打开里缓存 name 要和组件里的name一样才能缓存
            name: 'welcome',
            meta: {
              title: '欢迎页4欢迎页4欢迎页4欢迎页4欢迎页4',
              needCache: false,
              // icon:'el-icon-service',
            },
          },
          {
            path: '/welcome3',
            // 1.不建议component挂多处，比如这个与上面的一样，
            // 这样做会导致多个与这相关的tab都显示一样的内容，因为都是指向同一个component
            // 如非要这样做，请都关闭缓存(也解决不了显示一样的内容的问题)
            // 2.使用同一个component,页面query等参数不一样的情况
            // 在组件里使用activated钩子激活当前页面数据的显示,并且watch $route
            // 这样可以根据$route的query变化加载不一样的数据
            component: () => import('@/views/welcome.vue'),
            // 如打开里缓存 name 要和组件里的name一样才能缓存
            name: 'welcome3',
            meta: {
              title: '欢迎页3',
              needCache: false,
              // icon:'el-icon-service',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/users/login.vue'),
    name: 'login',
    meta: {
      hideAtAsideMenu: true,
      hideAtBreadcrumbsNav: true,
      needCache: true,
      hideAtTabNav: true,
    },
  },
  {
    path: '/404',
    component: NotFound,
    name: '404',
    meta: {
      hideAtAsideMenu: true,
      hideAtBreadcrumbsNav: true,
      needCache: true,
      hideAtTabNav: true,
    },
  },
  {
    path: '*',
    redirect: { path: '/login' },
    meta: {
      hideAtAsideMenu: true,
      hideAtBreadcrumbsNav: true,
      needCache: true,
      hideAtTabNav: true,
    },
  },
];
