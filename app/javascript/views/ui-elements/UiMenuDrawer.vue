<script lang="ts" setup>
import { useMenuStore } from '@store/menuStore.ts'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const menuStore = useMenuStore();
const router = useRouter();
const { clickedIcon, isOpened } = storeToRefs(menuStore);
const closeMenu = () => {
  isOpened.value = false
}
const handleClickedCategory = (category) => {
  router.push(`/${category}`)
}
const menuSize = computed(() => {
  if (window.innerWidth < 500) {
    return '40%'
  } else if (window.innerWidth < 769) {
    return '25%'
  } else if (window.innerWidth < 1025) {
    return '20%'
  } else {
    return '15%'
  }
  
})
</script>
<template>
<el-drawer
  class="drawer"
  v-model="isOpened"
  direction="rtl"
  :with-header="false"
  :size="menuSize"
  @click="closeMenu"
  style="background: #0c1117;"
>
<div class="title">▼ Gallery</div>
<div class="menu-wrapper">
  <div class="menu" @click="handleClickedCategory('conatus')">
    <span>Conatus</span>
  </div>
  <div class="menu" @click="handleClickedCategory('moment')">
    <span>The Moment</span>
  </div>
  <div class="menu" @click="handleClickedCategory('gyeongju')">
    <span>Gyeongju</span>
  </div>
  <div class="menu" @click="handleClickedCategory('docu')">
    <span>Docu&Snap</span>
  </div>
</div>
<div class="title">▼ About</div>
<div class="menu-wrapper">
  <div class="menu" @click="handleClickedCategory('direction')">
    <span>Direction</span>
  </div>
  <div class="menu" @click="handleClickedCategory('profile')">
    <span>Profile</span>
  </div>
</div>
</el-drawer>
</template>

<style lang="scss" scoped>
@import '@style/menu-drawer.scss'
</style>
<style lang="scss" scope>
.menu-img {
  width: 100%;
  .el-image__inner {
    width: 100%;
    height: 40px;
  }
}
</style>