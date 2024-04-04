<script lang="ts" setup>
import image1 from '@/assets/images/IMG_9295.jpeg'
import image2 from '@/assets/images/IMG_9296.jpeg'
import image3 from '@/assets/images/IMG_9297.jpeg'
import image4 from '@/assets/images/IMG_9298.jpeg'
import image5 from '@/assets/images/IMG_9299.jpeg'
import image6 from '@/assets/images/IMG_9300.jpeg'
import image7 from '@/assets/images/IMG_9302.jpeg'
import image8 from '@/assets/images/IMG_9303.jpeg'
import image9 from '@/assets/images/IMG_9304.jpeg'
import image10 from '@/assets/images/IMG_9305.jpeg'

import { useHomeStore } from '@store/homeStore.ts'
import { storeToRefs } from 'pinia';
import Drawer from '@view/ui-elements/UiPhotoDrawer.vue'

const homeStore = useHomeStore();
const { clickedImage, isOpened } = storeToRefs(homeStore);
const handleDrawer = (img) => {
  clickedImage.value = img
  isOpened.value = true
}
</script>
<template>
  <div class="home-page" ref="contentRef">
    <el-image :src="image1" @click="handleDrawer(image1)"></el-image>
    <div class="middle-image">
      <el-image class="ml-img ml-img1" :src="image2" @click="handleDrawer(image2)"></el-image>
      <el-image class="ml-img ml-img2" :src="image3" @click="handleDrawer(image3)"></el-image>
      <el-image class="ml-img ml-img3" :src="image4" @click="handleDrawer(image4)"></el-image>
      <el-image class="ml-img ml-img4" :src="image5" @click="handleDrawer(image5)"></el-image>
      <el-image class="ml-img ml-img5" :src="image6" @click="handleDrawer(image6)"></el-image>
      <el-image class="ml-img ml-img6" :src="image10" @click="handleDrawer(image10)"></el-image>
      <el-image class="ml-img ml-img7" :src="image7" @click="handleDrawer(image7)"></el-image>
      <el-image class="ml-img ml-img8" :src="image9" @click="handleDrawer(image9)"></el-image>
    </div>
    <div class="bottom-image">
      <el-image class="btm-img" :src="image8" @click="handleDrawer(image8)"></el-image>
    </div>
  </div>
  <Drawer></Drawer>
</template>
<style lang="scss" scoped>
@import '@style/global.scss';
@import '@style/home-page.scss'
</style>
<style lang="scss" scope>
.ml-img {
  img {
    object-fit: cover;
  }
}
.btm-img {
  width: 100%;
}
.ml-img1 {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }
.ml-img2 {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
}
.ml-img3 {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}
.ml-img4 {
  grid-row: 3 / 4;
  grid-column: 1 / 2;
}
.ml-img5 {
  grid-row: 3 / 4;
  grid-column: 2 / 3;
}
.ml-img6 {
  grid-row: 4 / 5;
  grid-column: 1 / 3;
}
.ml-img7 {
  grid-row: 1 / 4;
  grid-column: 3 / 4;
}
.ml-img8 {
  grid-row: 4 / 5;
  grid-column: 3 / 4;
}
</style>