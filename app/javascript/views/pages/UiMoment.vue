<script lang="ts" setup>
import image1 from '@/assets/images/moment/1.jpeg';
import image2 from '@/assets/images/moment/2.jpeg';
import image3 from '@/assets/images/moment/3.jpeg';
import image4 from '@/assets/images/moment/4.jpeg';
import image5 from '@/assets/images/moment/5.jpeg';
import image6 from '@/assets/images/moment/6.jpeg';
import image7 from '@/assets/images/moment/7.jpeg';
import image8 from '@/assets/images/moment/8.jpeg';
import image9 from '@/assets/images/moment/9.jpeg';
import image10 from '@/assets/images/moment/10.jpeg';
import image11 from '@/assets/images/moment/11.jpeg';
import image12 from '@/assets/images/moment/12.jpeg';
import image13 from '@/assets/images/moment/13.jpeg';
import image14 from '@/assets/images/moment/14.jpeg';
import image15 from '@/assets/images/moment/15.jpeg';
import image16 from '@/assets/images/moment/16.jpeg';
import image17 from '@/assets/images/moment/17.jpeg';
import image18 from '@/assets/images/moment/18.jpeg';
import image19 from '@/assets/images/moment/19.jpeg';
import image20 from '@/assets/images/moment/20.jpeg';
import image21 from '@/assets/images/moment/21.jpeg';
import image22 from '@/assets/images/moment/22.jpeg';
import image23 from '@/assets/images/moment/23.jpeg';
import image24 from '@/assets/images/moment/24.jpeg';
import image25 from '@/assets/images/moment/25.jpeg';
import image26 from '@/assets/images/moment/26.jpeg';
import image27 from '@/assets/images/moment/27.jpeg';
import image28 from '@/assets/images/moment/28.jpeg';
import image29 from '@/assets/images/moment/29.jpeg';
import image30 from '@/assets/images/moment/30.jpeg';
import image31 from '@/assets/images/moment/31.jpeg';
import image32 from '@/assets/images/moment/32.jpeg';
import image33 from '@/assets/images/moment/33.jpeg';

const images = [image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image26, image27, image28, image29, image30, image31, image32, image33]
</script>
<template>
  <div class="main-wrapper">
    <div class="main-image-wrapper">
      <div class="main-image">
        <el-image :src="image1" class="img"></el-image>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content-header">
        <span>This page is preparing to release</span>
      </div>
      <div class="content">
        <div 
          v-for="(image, index) in images"
          :key="index"
          class="content-img"
        >
        <el-image :src="image" class="img"></el-image>
        </div>
      </div>
    </div>
  </div>
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
</style>
<style lang="scss" scope>
img {
  object-fit: cover;
}
</style>