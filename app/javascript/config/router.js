import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@pages/UiHomePage.vue'
import MainPage from '@pages/UiMainPage.vue'

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
    path: '/:pathMatch(.*)*',
    redirect: '/',
    // 404ページ実装
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});