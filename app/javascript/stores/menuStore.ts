import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', () => {
  const clickedIcon = ref();
  const isOpened = ref(false);
  const isSlideVisible = ref(true);
  return {
    clickedIcon,
    isOpened,
    isSlideVisible,
  };
});