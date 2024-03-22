<script lang="ts" setup>
import AppHeader from '@app/AppHeader.vue'
import AppFooter from '@app/AppFooter.vue'
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route)
</script>
<template>
  <div class="app">
    <app-header v-if="route.path!=='/'" />
    <router-view />
    <!-- <app-footer /> -->
  </div>
</template>
<style lang="scss" scoped>
  @import '@style/global.scss';
  @import '@style/app.scss'
</style>
