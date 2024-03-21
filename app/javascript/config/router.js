import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@pages/UiHomePage.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});