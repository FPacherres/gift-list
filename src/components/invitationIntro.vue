<script setup>
import { ref, onMounted, onBeforeUnmount, defineEmits } from "vue";

const emit = defineEmits(["close"]);

const isSmall = ref(false);

function handleClose() {
  emit("close");
}

function checkScreen() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  isSmall.value = width < 350 || height < 600;
}

onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreen);
});
</script>

<template>
  <transition name="fade">
    <div class="intro-screen" :class="{ small: isSmall }">
      <img class="fondo" src="../assets/fondo.png" alt="" />
      <img class="osito" src="../assets/osito.png" alt="" />

      <span class="label1">
        La dulce espera <br />
        esta por <br />
        terminar...
      </span>

      <div class="box1">
        <span class="text1"
          >Acompáñanos a <br />
          celebrar el</span
        >
        <span class="text2"
          >Baby <br />
          Shower</span
        >
        <span class="text1">en honor a</span>
      </div>

      <div class="box2">
        <span class="name">Alana Kristell</span>
        <span class="extra main">Próximamente</span>
        <div class="date">
          <span class="mounth">Noviembre</span>
          <span class="day">--</span>
          <span class="year">2025</span>
        </div>
        <span class="extra">A las 6:00 P.M.</span>
      </div>

      <span class="address">
        Calle. Daniel Alcides Carrión <br />
        N° 135, Dpt. 501 - Chiclayo
      </span>

      <v-btn class="btn" @click="handleClose">Revisar regalos</v-btn>
      <span class="msg">Regalo por personsa</span>
    </div>
  </transition>
</template>

<style scoped>
.intro-screen {
  position: fixed;
  inset: 0;
  background: #e5e3e2;
  background: linear-gradient(
    0deg,
    rgba(229, 227, 226, 1) 0%,
    rgba(231, 232, 230, 1) 23%,
    rgba(231, 231, 231, 1) 67%,
    rgba(231, 231, 231, 1) 83%,
    rgba(234, 230, 231, 1) 100%
  );
  z-index: 2000;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 28px 0;

  width: 100vw;
  height: 600px;
  max-width: 350px;
  margin: auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(2.05);
}

.intro-screen.small {
  transform: scale(0.8);
}

.osito {
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
}

.fondo {
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  z-index: -1;
  opacity: 0.4;
}

.label1 {
  color: var(--invitation-1);
  text-transform: uppercase;
  font-size: 12px;
  line-height: 18px;
  font-weight: 600;
  width: 160px;
  text-align: center;
  margin-left: auto;
}

.box1 {
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 10px 0 auto;
}

.box1 .text1 {
  color: var(--invitation-1);
  text-transform: uppercase;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
}
.box1 .text2 {
  color: var(--invitation-2);
  text-transform: uppercase;
  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
}

.box2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
}
.box2 .name {
  font-size: 52px;
  line-height: 40px;
  font-weight: 700;
  color: var(--invitation-3);
  margin-bottom: 12px;
  font-family: "Great Vibes", cursive;
}
.box2 .date {
  display: grid;
  grid-template-columns: 1fr auto 60px;
  color: var(--invitation-4);
  align-items: center;
  gap: 12px;
}
.box2 .date .mounth,
.box2 .date .year {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}
.box2 .date .day {
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;
  text-transform: uppercase;
  border-left: 3px solid var(--invitation-4);
  border-right: 3px solid var(--invitation-4);
  padding: 6px 12px;
}
.box2 .extra {
  text-transform: uppercase;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 3px;
}
.box2 .extra.main {
  letter-spacing: 8px;
}

.address {
  margin-top: 20px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  color: var(--invitation-1);
}

.btn {
  background-color: var(--invitation-3);
  border-radius: 30px;
  box-shadow: none;
  color: var(--white);
  font-size: 16px;
  letter-spacing: 0px;
  height: 32px;
  width: 200px;
  margin: 12px auto 0px;
}

.msg {
  font-size: 12px;
  line-height: 12px;
  font-weight: 600;
  color: var(--invitation-4);
  margin-top: 15px;
}
</style>
