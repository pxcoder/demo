import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';

const modules = import.meta.glob('./views/**/index.vue');

const routes: RouteRecordRaw[] = Object.keys(modules)
  .filter(filepath => /\d{10}/.test(filepath))
  .map(filepath => {
    const filename = filepath.match(/\d{10}/)![0];
    return {
      name: filename,
      path: `/${filename}`,
      component: modules[filepath],
    };
  });

routes.push(
  {
    name: 'Home',
    path: '/',
    redirect: routes[routes.length - 1]['path'],
  },
  {
    name: '404',
    path: '/404',
    component: () => import('./views/404/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
);

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
