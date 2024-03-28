<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
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
            <el-dropdown-item>The Sea</el-dropdown-item>
            <el-dropdown-item>The Kyeongju</el-dropdown-item>
            <el-dropdown-item>Punctum</el-dropdown-item>
            <el-dropdown-item>The Busan</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

        <!-- class="header-menu"
        mode="horizontal" 
        background-color="transparent"
        :popper-offset="4"
      > -->
        <!-- <el-sub-menu index="1">

        </el-sub-menu>
      </el-drop> -->

      <!-- <div class="header-menu-wrapper">
        <div class="menu-item">
          <span>The&nbsp;</span>
          <span>Sea</span>
        </div>
        <div class="menu-item kj">
          <span>The&nbsp;</span>
          <span>Kyeongju</span>
        </div>
        <div class="menu-item">
          <span>Punctum</span>  
        </div>
        <div class="menu-item">
          <span>The&nbsp;</span>
          <span>Busan</span>
        </div>
      </div> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import '@style/app-header.scss';
</style>
<style lang="scss" scope>
</style>