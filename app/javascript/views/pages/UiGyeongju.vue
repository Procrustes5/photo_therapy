<script lang="ts" setup>
import image1 from '@/assets/images/gyeongju/1.jpeg';
import image2 from '@/assets/images/gyeongju/2.jpeg';
import image3 from '@/assets/images/gyeongju/3.jpeg';
import image4 from '@/assets/images/gyeongju/4.jpeg';
import image5 from '@/assets/images/gyeongju/5.jpeg';
import image6 from '@/assets/images/gyeongju/6.jpeg';
import image7 from '@/assets/images/gyeongju/7.jpeg';
import image8 from '@/assets/images/gyeongju/8.jpeg';
import image9 from '@/assets/images/gyeongju/9.jpeg';
import image10 from '@/assets/images/gyeongju/10.jpeg';
import image11 from '@/assets/images/gyeongju/11.jpeg';
import image12 from '@/assets/images/gyeongju/12.jpeg';
import image13 from '@/assets/images/gyeongju/13.jpeg';
import image14 from '@/assets/images/gyeongju/14.jpeg';
import image15 from '@/assets/images/gyeongju/15.jpeg';
import image16 from '@/assets/images/gyeongju/16.jpeg';
import image17 from '@/assets/images/gyeongju/17.jpeg';
import image18 from '@/assets/images/gyeongju/18.jpeg';
import image19 from '@/assets/images/gyeongju/19.jpeg';
import image20 from '@/assets/images/gyeongju/20.jpeg';
import image21 from '@/assets/images/gyeongju/21.jpeg';
import image22 from '@/assets/images/gyeongju/22.jpeg';
import image23 from '@/assets/images/gyeongju/23.jpeg';
import image24 from '@/assets/images/gyeongju/24.jpeg';
import image25 from '@/assets/images/gyeongju/25.jpeg';

const images = [image2, image3, image4, image5, image6, image7, image8, image9, image1, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25]
</script>
<template>
  <div class="main-wrapper">
    <div class="main-image-wrapper">
      <div class="main-image">
        <el-image :src="image10" class="img"></el-image>
      </div>
      <div class="fixed-content">
        <span class="en">Gyeongju</span>
        <span>慶州</span>
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
        justify-content: space-between;
        align-items: center;
        span {
          writing-mode: vertical-rl;
          font-size: 100px;
          font-weight: 800;
          color: white;
          text-shadow: 1px 1px 1px rgba($color: #000000, $alpha: 0.8);
        }
        .en {
          font-size: 60px;
          letter-spacing: 4px;
          margin-left: 25px;
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
        .img {
          width: 100%;
          height: 100%;
        }
      }
      .fixed-content {
        box-sizing: border-box;
        width: 80%;
        height: 80vh;
        position: absolute;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        align-items: center;
        padding-top: 10px;
        span {
          writing-mode: horizontal-tb;
          font-size: 60px;
          font-weight: 800;
          color: white;
          text-shadow: 1px 1px 1px rgba($color: #000000, $alpha: 0.8);
        }
        .en {
          font-size: 35px;
          margin-left: 10px;
          letter-spacing: 2px;
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