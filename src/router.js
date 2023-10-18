import {createRouter, createWebHistory} from 'vue-router';

import HomeView from './views/HomeView';
import AboutView from './views/AboutView';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/about',
      component: AboutView,
    },
  ],
});

export default router;
