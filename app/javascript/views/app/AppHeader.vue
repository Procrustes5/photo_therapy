<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useMenuStore } from '@store/menuStore.ts'
import { storeToRefs } from 'pinia';

const menuStore = useMenuStore();
const { clickedIcon, isOpened } = storeToRefs(menuStore);
const router = useRouter();

const handleMenu = () => {
  isOpened.value = true
}
</script>
<template>
  <div class="app-header">
    <div class="header-title">
      <h1 @click="router.push('/')">PhotoTherapy</h1>
    </div>
    <div class="header-scroll-menu">
      <div
        class="dropdown"
        @click="handleMenu" 
      >
        <el-icon 
          class="header-menu-icon" 
          size="40px"
          color="whitesmoke"
        ><Menu /></el-icon>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import '@style/app-header.scss';
</style>
<style lang="scss" scope>
@media screen and (max-width:767px) {

}
</style>