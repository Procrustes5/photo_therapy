<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleClickedCategory = (category) => {
  router.push(`/${category}`)
}
</script>
<template>
  <div class="app-header">
    <div class="header-title">
      <h1 @click="router.push('/')">PhotoTherapy</h1>
    </div>
    <div class="header-scroll-menu">
      <el-dropdown
        trigger="click"
        size="large"
        class="dropdown"
      >
        <el-icon 
          class="header-menu-icon" 
          size="40px"
          color="whitesmoke"
        ><Menu /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleClickedCategory('conatus')">Conatus</el-dropdown-item>
            <el-dropdown-item @click="handleClickedCategory('moment')">The moment</el-dropdown-item>
            <el-dropdown-item @click="handleClickedCategory('gyeongju')">Gyeongju</el-dropdown-item>
            <el-dropdown-item @click="handleClickedCategory('docu')">Docu&Snap</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
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