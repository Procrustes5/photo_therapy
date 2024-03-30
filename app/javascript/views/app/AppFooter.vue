<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>
<template>
  <footer class="footer">
    <div class="footer-left">
      <span class="contact-title">Contact</span>
      <span class="contact-email">phototherapy.contact@gmail.com</span>
    </div>
    <div class="footer-right">
      <div class="photographer">
        <span class="photographer-upper">Photographed by</span>
        <span class="name">Kim Han</span>
        <div class="copyright">
          <span>{{ `© ${currentYear} Phototherapy. All rights reserved.` }}</span>
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
    background: $main;
    padding: 40px;
    display: flex;
  }
  .footer-left {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    .contact-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 12px;
    }
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
    font-size: 8px;
  }
  .footer {
    box-sizing: border-box;
    width: 100%;
    background: $main;
    padding: 25px;
    display: flex;
  }
  .footer-left{
    display: flex;
    flex-direction: column;
    justify-content: end;
    .contact-title {
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 8px;
    }
  }
  .footer-right {
    height: fit-content;
    justify-content: start;
    .photographer {
      display: flex;
      flex-direction: column;
      .photographer-upper {
        font-size: 12px;
        font-weight: 600;
      }
      .name {
        font-size: 10px;
        font-style: italic;
      }
    }
    .copyright {
      display: flex;
      justify-content: end;
      margin-top: 18px;
      color: whitesmoke;
      font-size: 8px;
      text-align: right;
    }
  }
  }
</style>