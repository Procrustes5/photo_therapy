import { router } from '@config/router.js';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query';
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import 'element-plus/dist/index.css';

const queryClient = new QueryClient();

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(App);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
  app.use(router);
  app.use(createPinia());
  app.use(ElementPlus);
  app.use(VueQueryPlugin, {
    queryClient,
  });
  // if (process.env.NODE_ENV === 'development') {
  //   worker.start();
  // }
  app.mount('#app');
});