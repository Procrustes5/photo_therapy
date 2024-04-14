<script setup lang="ts">
import profileImage from '@/assets/images/profile.jpg';
import Menu from '@view/ui-elements/UiMenuDrawer.vue'

const langList = ["en", "kr", "jp"];
const selectedLang = ref<string>(langList[0]);
const handleLangBtn = (lang) => {
  selectedLang.value = lang
}
</script>
<template>
  <div class="profile-wrapper">
    <div class="profile-image">
      <el-image :src="profileImage" class="img"></el-image>
    </div>
    <div class="profile-detail">
      <div class="detail-header">
        <span class="title" v-if="selectedLang === 'kr'">사진가의 말.</span>
        <span class="title" v-else-if="selectedLang === 'en'">The Photographer's Words.</span>
        <span class="title" v-else-if="selectedLang === 'jp'">写真家の言葉</span>
        <div class="lang-btns">
          <div class="lang-btn" @click="handleLangBtn('en')" :class="{clicked: selectedLang === 'en'}">EN</div>
          <div class="lang-btn" @click="handleLangBtn('kr')" :class="{clicked: selectedLang === 'kr'}">KR</div>
          <div class="lang-btn" @click="handleLangBtn('jp')" :class="{clicked: selectedLang === 'jp'}">JP</div>
        </div>
      </div>
      <div v-if="selectedLang === 'kr'">
        <p>
          문학을 전공한 후<br>
          오랫동안 인문학 공부와 글쓰기를 하면서<br>
          사진 작업을 해 오고 있다.
        </p>
        <p>
          한때 스피노자와 니체, 장자, 주역 등 인문고전에 빠져 들었고 <br>
          지금은 불교의 ‘오온(panca khandha)’과 스피노자의 ‘코나투스’에 <br>
          인식의 뿌리를 둔 사진을 주로 찍고 있는 중이다.
        </p>
        <p>
          그간 두 차례 개인전(갤러리 조이, 아트스페이스 누리봄)을 열었다.<br>
          이후 전시 계획은 미정이지만<br>
          촬영 단계에서 프린트 작업까지 모두 스스로 할 계획이어서<br>
          장비를 갖추고 인화작업까지 병행하고 있다.
        </p>
        <p class="dot">.</p>
        <p>
          하나의 달이 천 개의 강물에 비치듯<br>
          한 장의 사진이 천 개의 달그림자가 되어<br>
          사람들의 마음을 위로해 주고 싶다는 생각이 들었다.
        </p>
        <p>
          사진이 넘쳐나는 시대에<br>
          나의 사진은 모닥불 속 작은 불씨 하나에 불과할 것이다.
        </p>
        <p>
          하지만 언젠가 이 불씨가 다시 옮겨 붙어 당신의 가슴을 따뜻하게 지펴 주거나<br>
          잊혀진 존재의 수많은 표정들이 되살아 나는, 그런 사진을 찍으려고 나는 늘 노력하고 있다.
        </p>
      </div>
      <div v-else-if="selectedLang === 'en'">

        <p>
          After majoring in literature,<br>
          I have been engaged in the study of the humanities <br>
          and writing while working on my photography.
        </p>
        <p>
          At one point, I was deeply immersed in humanistic classics such as Spinoza, Nietzsche, Zhuangzi, and the I Ching.<br>
          Now, I am primarily capturing images rooted in the awareness of Buddhism's 'Five Aggregates' (Pancakkhandha) and Spinoza's 'Conatus'.
        </p>
        <p>
          I have held two solo exhibitions.<br>
          While future exhibitions are yet to be determined,<br>
          I plan to handle all aspects from shooting to printing myself.<br>
          I am equipping myself and simultaneously managing the development process.
        </p>
        <p class="dot">.</p>
        <p>
          Just as a single moon reflects in a thousand rivers,<br>
          I wish for one of my photographs to become a thousand moon shadows,<br>
          comforting the hearts of people.
        </p>
        <p>
          In an era overflowing with photographs,<br>
          my work might merely be a tiny ember in a bonfire.
        </p>
        <p>
          However, I continuously strive to capture images that might someday rekindle that ember to warm your heart<br>
          or revive the countless expressions of forgotten beings.
        </p>
      </div>
      <div v-else-if="selectedLang === 'jp'">
        <p>
          文学を専攻し、<br>
          長らく人文学や文筆と共に<br>
          写真の作業をしてきた。
        </p>
        <p>
          一時期スピノザやニーチェ、荘子、周易などの人文古典に耽溺し、<br>
          頃年は仏教の「五蘊」とスピノザの「コナトゥス」に<br>
          認識の根を張った撮影を主にしている。
        </p>
        <p>
          これまでに２回の個人展を開いた。<br>
          以後の展示日程は未定だが、<br>
          撮影から印刷までのを全て独力で行う方針で展開している。
        </p>
        <p class="dot">.</p>
        <p>
          月が一つでも幾千の川に映っているように、<br>
          一枚の写真が幾千の月影となり<br>
          人々の心を慰めたいと思った。
        </p>
        <p>
          写真に満ちる時代に<br>
          私の写真は焚き火の中の小さな火花に過ぎない。
        </p>
        <p>
          しかし、いつかこの火花は散り放ち、あなたの心を暖めるか<br>
          忘れられた存在の様々な顔が蘇る、そんな写真を残したいと思っている。
        </p>
      </div>

      <div class="sign">
        <span class="sign-text">Photographer KIM HAN</span>
      </div>
    </div>
  </div>
  <Menu></Menu>
</template>
<style lang="scss" scoped>
  h1, h3 {
    color: whitesmoke;
  }
  .profile-wrapper {
    display: flex;
    align-items: start;
    width: 100%;
    padding: 0px 15px;
    box-sizing: border-box;
    .profile-image {
      height: 100%;
      .img {
        width: 50vw;
        height: 100vh;
      }
    }
    .profile-detail {
      width: 100%;
      padding: 0px 24px;
      span, p, .lang-btn {
        color: whitesmoke;
      }
      .detail-header {
        display: flex;
        margin-bottom: 40px;
        justify-content: space-between;
        align-items: center;
        .lang-btns {
          display: flex;
        }
        .lang-btn {
          width: 72px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid whitesmoke;
          font-size: 16px;
          cursor: pointer;
        }
        .clicked {
          background: whitesmoke;
          color: black;
        }
      }
      .title {
        font-size: 28px;
        font-weight: 600;
      }
      .dot {
        margin: 30px 0px;
      }
      .sign {
        margin-top: 28px;
        display: flex;
        justify-content: end;
        .sign-text {
          font-weight: 600;
          font-size: 18px;
        }
      }
    }
  }
</style>