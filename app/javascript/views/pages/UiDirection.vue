<script setup>
import Menu from '@view/ui-elements/UiMenuDrawer.vue'
const items = ['色', '受', '想', '行', '識'];
const activeIndex = ref(0);

// 3초마다 activeIndex 업데이트
setInterval(() => {
  if (activeIndex.value < items.length - 1) {
    activeIndex.value++;
  } else {
    activeIndex.value = 0; // 마지막에 다다르면 다시 처음으로
  }
}, 3000);
</script>
<template>
  <div class="page-container">
    <div class="page-left">
      <div class="donut">
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="['circle', { active: activeIndex === index }, `circle${index + 1}`]"
        >
          {{ item }}
        </div>
        <div class="arrows">
          <el-icon class="arrow" color="whitesmoke" size="60"><DArrowRight /></el-icon>
        </div>
        <div class="icons">
          <el-icon color="whitesmoke" size="60" :class="['icon', { active: activeIndex === 0 }]"><Sunrise /></el-icon>
          <el-icon color="whitesmoke" size="60" :class="['icon', { active: activeIndex === 1 }]"><View /></el-icon>
          <el-icon color="whitesmoke" size="60" :class="['icon', { active: activeIndex === 2 }]"><UserFilled /></el-icon>
          <el-icon color="whitesmoke" size="60" :class="['icon', { active: activeIndex === 3 }]"><ChatDotSquare /></el-icon>
          <el-icon color="whitesmoke" size="60" :class="['icon', { active: activeIndex === 4 }]"><Picture /></el-icon>
        </div>
      </div>
    </div>
    <div class="page-right">
      <h1>Main Concept : pañca-skandha(五蘊)</h1>
      <span class="description">The photographs are based on the Buddhist concept of the Five Aggregates. The Five Aggregates discuss how we perceive and receive objects, which is highly relevant to photography. This concept is also associated with achieving mental peace and healing through photographs.</span>
      <div class="contents">
        <span class="content">rupa 色蘊 : Form</span>
        <span class="content">vedana 受蘊 : Sensation</span>
        <span class="content">saṃjñā 想蘊 : Apperception</span>
        <span class="content">saṃskāra 行蘊 : Thought-fabrications</span>
        <span class="content">vijñāna 識蘊 : Perception</span>
      </div>
    </div>
  </div>
  <Menu></Menu>
</template>
<style lang="scss" scoped>
.page-container {
  width: 100%;

  display: flex;
  .page-left {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page-right {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px 24px;
    h1 {
      color: whitesmoke;
    }
    .description {
      font-size: 24px;
      color: whitesmoke;
      margin: 40px 0px;
    }
    .contents {
      display: flex;
      flex-direction: column;
      .content {
        color: whitesmoke;
        font-size: 24px;
      }
    }
  }
}
.arrows {
  transform: translate(-77px, -75px) rotate(-52deg);
}
.donut {
  position: relative;
  width: 300px;
  height: 300px;
  border: 10px solid whitesmoke;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icons {
  width: 35%;
  height: 35%;
  border: 4px solid whitesmoke;
  border-radius: 50%;
  transform: translate(-28px, 0px);
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    display: none;
  }
  .active {
    display: flex;
  }
}
.circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: whitesmoke;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size: 26px;
  font-weight: 600;
  border: 4px solid black;
}


.circle1 { transform: translate(0, -150px); }
.circle2 { transform: translate(128px, -75px); }
.circle3 { transform: translate(128px, 75px); }
.circle4 { transform: translate(0, 150px); }
.circle5 { transform: translate(-128px, 75px); }

.circle.active {
  opacity: 1; /* 활성화 상태에서는 불투명 */
  box-shadow: 0 0 8px 2px #fff; /* 빛나는 효과 */
}

@media screen and (max-width:767px) {
  .page-container {
    flex-direction: column;
    margin: 10px 0px;
    .page-left {
      margin: 20px 0px;
    }
    .page-right {
      box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px 24px;
    h1 {
      margin: 18px 0px;
      color: whitesmoke;
      font-size: 20px;
    }
    .description {
      width: 100%;
      font-size: 18px;
      color: whitesmoke;
      margin: 20px 0px;
    }
    .contents {
      display: flex;
      flex-direction: column;
      .content {
        color: whitesmoke;
        font-size: 18px;
      }
    }
  }
  }
}

</style>