import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', () => {
  const clickedImage = ref();
  const isOpened = ref(false);
  return {
    clickedImage,
    isOpened
  };
});