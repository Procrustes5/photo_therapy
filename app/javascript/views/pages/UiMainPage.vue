<script setup lang="ts">
import image1 from '@/assets/images/IMG_9295.jpeg'
import image2 from '@/assets/images/IMG_9296.jpeg'
import image3 from '@/assets/images/IMG_9297.jpeg'
import image4 from '@/assets/images/IMG_9298.jpeg'
import image6 from '@/assets/images/IMG_9300.jpeg'
import image8 from '@/assets/images/IMG_9303.jpeg'
import image10 from '@/assets/images/IMG_9305.jpeg'
import { useRouter } from 'vue-router';

const router = useRouter();
const images = [image8, image2, image3];
const categoryImg = [image4, image6, image10, image1]
const currentIndex = ref(0);
const isShowingMain = ref(true);
setInterval(() => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
}, 5000);
const handleMainClick = () => {
  isShowingMain.value = false
}
const categories = ["The Sea", "Punctum","The Kyeongju", "The Busan"]
</script>
<template>
<div class="header" @click="handleMainClick" v-if="isShowingMain">
  <div 
    class="main-image" 
    v-for="(image, index) in images"
    :key="index"
    :class="{ active: index === currentIndex }"
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
    <div class="prepare">This page is preparing for Official Launch</div>
  </div>
</div>
<div class="category" v-else>
  <div 
    class="category-item"
    v-for="(item, n) in categories"
    :key="n"
    @click="router.push('/photo')"
  >
    <el-image :src="categoryImg[n]" class="category-img"></el-image>
    <span>{{ item }}</span>
  </div>
</div>
</template>
<style lang="scss">
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
  opacity: 0;
  .title {
    margin: 70px 0px;
    font-size: 80px;
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
    font-size: 60px;
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
    margin: 20px 0px;
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
    font-size: 12px;
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
</style>