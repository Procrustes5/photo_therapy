<script lang="ts" setup>
import image1 from '@/assets/images/docu/1.jpeg';
import image2 from '@/assets/images/docu/2.jpeg';
import image3 from '@/assets/images/docu/3.jpeg';
import image4 from '@/assets/images/docu/4.jpeg';
import image5 from '@/assets/images/docu/5.jpeg';
import image6 from '@/assets/images/docu/6.jpeg';
import image7 from '@/assets/images/docu/7.jpeg';
import image8 from '@/assets/images/docu/8.jpeg';
import image9 from '@/assets/images/docu/9.jpeg';
import image10 from '@/assets/images/docu/10.jpeg';
import image11 from '@/assets/images/docu/11.jpeg';
import image12 from '@/assets/images/docu/12.jpeg';
import image13 from '@/assets/images/docu/13.jpeg';
import image14 from '@/assets/images/docu/14.jpeg';
import image15 from '@/assets/images/docu/15.jpeg';
import image16 from '@/assets/images/docu/16.jpeg';
import image17 from '@/assets/images/docu/17.jpeg';
import image18 from '@/assets/images/docu/18.jpeg';
import image19 from '@/assets/images/docu/19.jpeg';
import image20 from '@/assets/images/docu/20.jpeg';
import image21 from '@/assets/images/docu/21.jpeg';
import image22 from '@/assets/images/docu/22.jpeg';
import { useHomeStore } from '@store/homeStore.ts'
import { storeToRefs } from 'pinia';
import Drawer from '@view/ui-elements/UiPhotoDrawer.vue'

const homeStore = useHomeStore();
const { clickedImage, isOpened } = storeToRefs(homeStore);
const handleDrawer = (img) => {
  clickedImage.value = img
  isOpened.value = true
}
const images = [image2, image3, image4, image5, image6, image7, image8, image9, image1, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22]
</script>
<template>
  <div class="main-wrapper">
    <div class="main-image-wrapper">
      <div class="main-image">
        <el-image :src="image1" class="img"></el-image>
      </div>
      <div class="fixed-content">
        <span>Docu</span>
        <span class="and">&</span>
        <span>Snap</span>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content-header">
        <span>PHOTOS</span>
      </div>
      <div class="content">
        <div 
          v-for="(image, index) in images"
          :key="index"
          class="content-img"
        >
        <el-image :src="image" class="img" @click="handleDrawer(image)"></el-image>
        </div>
      </div>
    </div>
  </div>
  <Drawer></Drawer>
</template>
<style lang="scss" scoped>
@import '@style/global.scss';
  .main-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .main-image-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      .main-image {
        width: 80%;
        height: 80vh;
        display: flex;
        justify-content: center;
        .img {
          width: 100%;
          height: 100%;
        }
      }
      .fixed-content {
        width: 80%;
        height: 80vh;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          font-size: 80px;
          font-weight: 800;
          color: white;
          line-height: 80px;
          text-shadow: 5px 3px 5px rgba($color: #000000, $alpha: 0.8);
        }
        .and {
          font-size: 65px;
          display: flex;
          align-items: center;
        }
      }
    }
    .content-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .content-header {
        margin: 15px 0px;
        width: 80%;
        span {
          color: whitesmoke;
          font-size: 18px;
          font-weight: 600;
        }
      }
      .content {
        width: 80%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 5px;
        padding: 0px 30px;
        .content-img {
          height: 160px;
          .img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width:767px) {
    .main-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .main-image-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      .main-image {
        width: 80%;
        height: 90vh;
        display: flex;
        justify-content: center;
        .img {
          width: 100%;
          height: 100%;
        }
      }
      .fixed-content {
        width: 80%;
        height: 90vh;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          font-size: 55px;
          font-weight: 800;
          color: white;
          line-height: 50px;
          text-shadow: 5px 3px 5px rgba($color: #000000, $alpha: 0.8);
        }
        .and {
          font-size: 40px;
          display: flex;
          align-items: center;
        }
      }
    }
    .content-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .content-header {
        margin: 15px 0px;
        width: 80%;
        span {
          color: whitesmoke;
          font-size: 18px;
          font-weight: 600;
        }
      }
      .content {
        width: 80%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 5px;
        padding: 0px 30px;
        .content-img {
          height: 160px;
          .img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  }
</style>
<style lang="scss" scope>
img {
  object-fit: cover;
}
</style>