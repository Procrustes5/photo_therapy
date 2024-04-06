<script lang="ts" setup>
import image1 from '@/assets/images/conatus/1.jpg';
import image2 from '@/assets/images/conatus/2.jpg';
import image3 from '@/assets/images/conatus/3.jpg';
import image4 from '@/assets/images/conatus/4.jpg';
import image5 from '@/assets/images/conatus/5.jpg';
import image6 from '@/assets/images/conatus/6.jpg';
import image7 from '@/assets/images/conatus/7.jpg';
import image8 from '@/assets/images/conatus/8.jpg';
import image9 from '@/assets/images/conatus/9.jpg';
import image10 from '@/assets/images/conatus/10.jpg';
import image11 from '@/assets/images/conatus/11.jpg';
import image12 from '@/assets/images/conatus/12.jpg';
import image13 from '@/assets/images/conatus/13.jpg';
import image14 from '@/assets/images/conatus/14.jpg';
import image15 from '@/assets/images/conatus/15.jpg';
import image16 from '@/assets/images/conatus/16.jpg';
import image17 from '@/assets/images/conatus/17.jpg';
import image18 from '@/assets/images/conatus/18.jpg';
import image19 from '@/assets/images/conatus/19.jpg';
import image20 from '@/assets/images/conatus/20.jpg';

const images = [image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20]
</script>
<template>
  <div class="main-wrapper">
    <div class="main-image-wrapper">
      <div class="main-image">
        <el-image :src="image1" class="img"></el-image>
      </div>
      <div class="fixed-content">
        <span>Conatus</span>
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
        height: 90vh;
        display: flex;
        justify-content: center;
        position: relative;
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
        justify-content: center;
        align-items: center;
        span {
          font-size: 100px;
          font-weight: 800;
          color: white;
          text-shadow: 5px 5px 30px rgba($color: #000000, $alpha: 0.8);
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
        height: 80vh;
        display: flex;
        justify-content: center;
        position: relative;
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
        justify-content: center;
        align-items: center;
        span {
          font-size: 60px;
          font-weight: 800;
          color: white;
          text-shadow: 1px 1px 30px rgba($color: #000000, $alpha: 0.8);
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
          font-size: 14px;
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