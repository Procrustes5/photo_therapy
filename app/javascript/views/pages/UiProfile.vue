<script setup>
import Menu from '@view/ui-elements/UiMenuDrawer.vue'

</script>
<template>
  <div class="profile-wrapper">
    <h1>Photographer</h1>
    <h3>Kim Han</h3>
  </div>
  <Menu></Menu>
</template>
<style lang="scss" scoped>
  h1, h3 {
    color: whitesmoke;
  }
  .profile-wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    padding: 0px 15px;
    box-sizing: border-box;
  }
</style>