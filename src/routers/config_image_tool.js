export default (Home, contentRouter, NotFound) => [
  {
    path: '/home',
    component: Home,
    name: 'home',
    meta: {
      hideAtAsideMenu: true,
      hideAtBreadcrumbsNav: true,
      needCache: true,
      hideAtTabNav: true,
    },
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
