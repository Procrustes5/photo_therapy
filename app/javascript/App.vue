<script lang="ts" setup>
import AppHeader from '@app/AppHeader.vue'
import AppFooter from '@app/AppFooter.vue'
</script>
<template>
  <div class="app">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>
<style lang="scss" scoped>
  @import '@style/global.scss';
  @import '@style/app.scss'
</style>
