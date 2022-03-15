const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
    ],
  },
  {
    path: '/tabs',
    component: () => import('layouts/TabLayout.vue'),
    children: [
      { path: '/tabs', name: 'tabs', component: () => import('pages/PageTabs.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
