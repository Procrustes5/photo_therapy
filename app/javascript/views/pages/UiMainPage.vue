<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";
import image1 from '@/assets/images/IMG_9295.jpeg'
import image2 from '@/assets/images/IMG_9296.jpeg'
import image3 from '@/assets/images/IMG_9297.jpeg'
import image4 from '@/assets/images/IMG_9298.jpeg'
import image6 from '@/assets/images/IMG_9300.jpeg'
import image8 from '@/assets/images/IMG_9303.jpeg'
import image10 from '@/assets/images/IMG_9305.jpeg'
import { useRouter } from 'vue-router';
import { useMenuStore } from '@store/menuStore.ts'
import { storeToRefs } from 'pinia';
import UiHomePage from "./UiHomePage.vue";
import AppHeader from '@app/AppHeader.vue'
import AppFooter from '@app/AppFooter.vue'

const menuStore = useMenuStore();
const { clickedIcon, isOpened } = storeToRefs(menuStore);
const router = useRouter();
const images = [image8, image2, image3, image4];
const categoryImg = [image4, image6, image10, image1]
const currentIndex = ref(0);
const isSlideShown = ref(true)
const closeMenu = () => {
  isOpened.value = false
}

function preventScroll(e) {
  e.preventDefault();
}

function disableScroll() {
  window.addEventListener('wheel', preventScroll, { passive: false });
  window.addEventListener('touchmove', preventScroll, { passive: false });
}

function enableScroll() {
  window.removeEventListener('wheel', preventScroll);
  window.removeEventListener('touchmove', preventScroll);
}

const headerRef = ref<HTMLDivElement>();
const contentRef = ref<HTMLDivElement>();
onMounted(() => {
  const headerObserver = new IntersectionObserver(
    (entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting) {
        isSlideShown.value = true
        disableScroll();
        setTimeout(enableScroll, 1200); 
        window.scrollTo({ top: 0 });
        closeMenu();
      } else {
        isSlideShown.value = false
      }
    },
    {
      root: null,
      threshold: 0,
    }
  );
  headerObserver.observe(headerRef.value!);

  const contentObserver = new IntersectionObserver(
    (entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting) {
        const bottom = contentRef.value!.getBoundingClientRect().bottom
        disableScroll();
        setTimeout(enableScroll, 1200); 
        window.scrollTo({ top: bottom + 315, behavior: "smooth" });
      }
    },
    {
      root: null,
      threshold: 0,
    }
  );

  contentObserver.observe(contentRef.value!);
});

setInterval(() => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
}, 3000);
const handleMainClick = () => {
  const top = headerRef.value!.getBoundingClientRect().height
  window.scrollTo({ top: top + 50, behavior: "smooth" });
}
const categories = ["Conatus", "The moment", "Gyeongju", "Docu&Snap"]
</script>
<template>
  <div class="wrapper">
    <div class="header" @click="handleMainClick" v-if="isSlideShown">
    <div 
      class="main-image" 
      v-for="(image, index) in images"
      :key="index"
      :class="{ active: index === currentIndex, notHorizontal: image !== image8 }"
    >
    <el-image :src="image" class="img"></el-image>
  </div>
  <div class="fixed-content" :class="{ active: currentIndex === 0 }">
    <div class="title">
      Phototherapy
    </div>
    <div class="sub-title">
      Light Up Your Life: Embrace the Power of Phototherapy
    </div>
    <!-- <div class="prepare">This page is preparing for Official Launch</div> -->
  </div>
</div>
<div class="header" v-else></div>
<div class="sizedBox" ref="headerRef"></div>
<div class="sizedBox" ref="contentRef"></div>
<div class="content">
  <app-header v-if="!isSlideShown" class="main-header"/>
  <UiHomePage></UiHomePage>
  <app-footer/>
</div>
  </div>

</template>
<style lang="scss" scoped>
@import '@style/global.scss';
.wrapper {
  width: 100%;
  height: 100%;
  background: $main;
}
.main-header {
  opacity: 0;
  animation: fadeInUp 1.5s ease-out forwards;
}
.header {
  width: 100%;
  height: 100%;
  background: $main;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: fadeInUp 1.5s ease-out forwards;
}
.sizedBox {
  height: 300px;
  background: $main;
}
.main-image {
  position: absolute;
  transition: opacity 1s ease;
  opacity: 0;
  .img {
    height: 100%;
  }
}
.notHorizontal {
  height: 100%;
}
.main-image.active {
  opacity: 1;
}
.fixed-content {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  .title {
    margin: 70px 0px;
    font-size: 90px;
    font-weight: 600;
    color: whitesmoke;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    opacity: 0;
    transform: translateY(20px); /* 아래에서 시작 */
    animation: fadeInUp 1.0s ease-out forwards;
  }
  .sub-title {
    font-size: 24px;
    font-weight: 400;
    color: whitesmoke;
    opacity: 0.8;
    font-style: italic;
  }
  .prepare {
    color: whitesmoke;
    margin-top: 30px;
    border: 1px solid whitesmoke;
    font-weight: 600;
    padding: 4px 6px;
  }
}
.fixed-content.active {
  opacity: 1;
}
@keyframes fadeInUp {
  to {
    opacity: 1; /* 완전히 불투명하게 */
    transform: translateY(0); /* 원래 위치로 */
}
}
.content {
  width: 100%;
  height: 100%;
}
.category {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 0.5fr 0.5fr;
  background: black;
  overflow: hidden;
  opacity: 0;
  animation: fadeInUp 2.0s ease-out forwards;
  .category-item {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .category-item:hover {
    box-sizing: border-box;
    border: 1px solid whitesmoke;
  }
  .category-img {
    width: 100%;
    height: 100%;
    position: relative;
  }
  span {
    position: fixed;
    color: whitesmoke;
    font-size: 40px;
    font-weight: 600;
  }
}
@media screen and (max-width:1023px) {
.header {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  animation: fadeInUp 1.5s ease-out forwards;
}
.main-image {
  position: absolute;
  transition: opacity 1s ease;
  opacity: 0;
  .img {
    height: 100%;
  }
}
.main-image.active {
  opacity: 1;
}
.fixed-content {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    margin: 50px 0px;
    font-size: 70px;
    font-weight: 600;
    color: whitesmoke;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    opacity: 0;
    transform: translateY(20px); /* 아래에서 시작 */
    animation: fadeInUp 1.0s ease-out forwards;
  }
  .sub-title {
    font-size: 20px;
    font-weight: 400;
    color: whitesmoke;
    font-style: italic;
  }
}
.category {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 0.5fr 0.5fr;
  background: black;
  overflow: hidden;
  opacity: 0;
  animation: fadeInUp 2.0s ease-out forwards;
  .category-item {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .category-item:hover {
    box-sizing: border-box;
    border: 1px solid whitesmoke;
  }
  .category-img {
    width: 100%;
    height: 100%;
    position: relative;
  }
  span {
    position: fixed;
    color: whitesmoke;
    font-size: 40px;
    font-weight: 600;
  }
}
.prepare {
    color: whitesmoke;
    margin-top: 30px;
    font-size: 12px;
    border: 1px solid whitesmoke;
    font-weight: 600;
    padding: 4px 6px;
  }
}
@media screen and (max-width:767px) {
.header {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  animation: fadeInUp 1.5s ease-out forwards;
}
.main-image {
  position: absolute;
  transition: opacity 1s ease;
  opacity: 0;
  .img {
    width: 100%;
  }
}
.notHorizontal {
  width: 100%;
  height: auto;
}
.main-image.active {
  opacity: 1;
}
.fixed-content {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    margin: 30px 0px;
    font-size: 40px;
    font-weight: 600;
    color: whitesmoke;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    opacity: 0;
    transform: translateY(20px); /* 아래에서 시작 */
    animation: fadeInUp 1.0s ease-out forwards;
  }
  .sub-title {
    font-size: 8px;
    font-weight: 400;
    color: whitesmoke;
    font-style: italic;
  }
  .prepare {
    color: whitesmoke;
    border: 1px solid whitesmoke;
    font-size: 8px;
    font-weight: 600;
    padding: 2px 4px;
    margin-top: 16px;
  }
}
.category {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: black;
  overflow: hidden;
  opacity: 0;
  animation: fadeInUp 2.0s ease-out forwards;
  .category-item {
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .category-item:hover {
    box-sizing: border-box;
    border: 1px solid whitesmoke;
  }
  .category-img {
    width: 100%;
    height: 100%;
    position: relative;
  }
  span {
    position: fixed;
    color: whitesmoke;
    font-size: 20px;
    font-weight: 600;
  }
}
}

</style>
<style lang="scss" scope>
.category-img {
  img {
    object-fit: cover;
  }
}
img {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* 標準構文 */
}
</style>