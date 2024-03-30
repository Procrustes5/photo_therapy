import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', () => {
  const clickedImage = ref();
  const isOpened = ref(false);
  const isSlideVisible = ref(true);
  return {
    clickedImage,
    isOpened,
    isSlideVisible,
  };
});