<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["show"]);

function handleShow() {
  emit("show");
}

</script>

<template>
    <div class="header">
      <img src="../assets/bebe.jpeg" alt="Alana Kristell">
      <h1>Alana Kristell</h1>
      <h2>Regalos Ideales</h2>
      <v-btn text="ver invitación" variant="outlined" @click="handleShow" class="btn"/>
    </div>
</template>

<style scoped>
.header {
  width: 350px;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 20px 0 40px;
}

.header img {
  height: 240px;
  width: 240px;
  border-radius: 40px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  margin-bottom: 20px;
}

h1 {
  color: var(--black);
  font-size: 32px;
  line-height: 32px;
  font-family: "Great Vibes", cursive;
  font-weight: 600;
}
h2 {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 36px;
  line-height: 36px;
}

.btn {
  color: var(--color-primary);
  height: 32px;
  margin-top: 20px;
}

.header img,
.header h1,
.header h2,
.header .btn {
  opacity: 0;
  transform: translateY(20px);
  animation: fade-up 0.8s ease-out forwards;
}

.header h1 {
  animation-delay: 0.2s;
}
.header h2 {
  animation-delay: 0.4s;
}
.header .btn {
  animation-delay: 0.6s;
}

@keyframes fade-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


@media (max-width: 600px) {
  .header {
    width: calc(100vw - 48px);
  }
}
</style>