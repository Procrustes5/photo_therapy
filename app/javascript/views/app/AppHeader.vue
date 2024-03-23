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
      <div class="header-menu-wrapper">
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
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import '@style/app-header.scss'
</style>