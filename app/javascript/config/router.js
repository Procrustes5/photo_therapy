import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@pages/UiHomePage.vue'
import MainPage from '@pages/UiMainPage.vue'
import DocuPage from '@pages/UiDocu.vue'
import GyeongjuPage from '@pages/UiGyeongju.vue'
import MomentPage from '@pages/UiMoment.vue'
import ConatusPage from '@pages/UiConatus.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },
  {
    path: '/photo',
    component: HomePage,
  },
  {
    path: '/docu',
    component: DocuPage,
  },
  {
    path: '/gyeongju',
    component: GyeongjuPage,
  },
  {
    path: '/moment',
    component: MomentPage,
  },
  {
    path: '/conatus',
    component: ConatusPage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
    // 404ページ実装
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});