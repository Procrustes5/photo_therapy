<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>
<template>
  <footer class="footer">
    <div class="footer-left">
    </div>
    <div class="footer-right">
      <div class="photographer">
        <span class="photographer-upper">Photographed by</span>
        <span class="name">Kim Han</span>
        <div class="copyright">
          © <span>{{ currentYear }}</span> Phototherapy. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@import '@style/global.scss';
  span {
    color: whitesmoke;
  }
  .footer {
    box-sizing: border-box;
    width: 100%;
    height: 300px;
    background: $main;
    padding: 40px;
    display: flex;
  }
  .footer-left {
    width: 100%;
  }
  .footer-right {
    width: 100%;
    .photographer {
      display: flex;
      flex-direction: column;
      align-items: end;
      .photographer-upper {
        font-size: 18px;
        font-weight: 600;
      }
      .name {
        font-style: italic;
      }
    }
    .copyright {
      margin-top: 24px;
      color: whitesmoke;
    }
  }
  @media screen and (max-width:767px) {
    span {
    color: whitesmoke;
  }
  .footer {
    box-sizing: border-box;
    width: 100%;
    height: 300px;
    background: $main;
    padding: 25px;
  }
  .footer-right {
    .photographer {
      display: flex;
      flex-direction: column;
      .photographer-upper {
        font-size: 14px;
        font-weight: 600;
      }
      .name {
        font-size: 12px;
        font-style: italic;
      }
    }
    .copyright {
      margin-top: 18px;
      color: whitesmoke;
      font-size: 12px;
    }
  }
  }
</style>