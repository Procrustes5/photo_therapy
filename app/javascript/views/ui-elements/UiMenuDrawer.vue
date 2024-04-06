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
</script>
<template>
<el-drawer
  class="drawer"
  v-model="isOpened"
  direction="rtl"
  :with-header="false"
  size="20%"
  @click="closeMenu"
  style="background: #0c1117;"
>
<div class="menu-wrapper">
  <div class="menu" @click="handleClickedCategory('conatus')">Conatus</div>
  <div class="menu" @click="handleClickedCategory('moment')">The Moment</div>
  <div class="menu" @click="handleClickedCategory('gyeongju')">Gyeongju</div>
  <div class="menu" @click="handleClickedCategory('docu')">Docu&Snap</div>
</div>
</el-drawer>
</template>

<style lang="scss" scoped>
@import '@style/menu-drawer.scss'
</style>
<style lang="scss" scope>

</style>