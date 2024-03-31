<script lang="ts" setup>
import { useHomeStore } from '@store/homeStore.ts'
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore();
const { clickedImage, isOpened } = storeToRefs(homeStore);
const closeDrawer = () => {
  isOpened.value = false
}
</script>
<template>
<el-drawer
  class="drawer"
  v-model="isOpened"
  direction="ltr"
  :with-header="false"
  size="100%"
  @click="closeDrawer"
  style="background: #0c1117;"
>
  <div class="drawer-wrapper" :class="{ vertImg: clickedImage.includes('9302') }">
    <div class="img-wrapper">
      <el-image 
        :src="clickedImage" 
        fit="contain" 
        class="drawer-img"
      >
      </el-image>
    </div>
    <div class="story-wrapper">
      <h3>Photo</h3>
      <p>Story about the Photo</p>
    </div>
  </div>
</el-drawer>
</template>

<style lang="scss" scoped>
@import '@style/photo-drawer.scss'
</style>
<style lang="scss" scope>

</style>