<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["show"]);

function handleShow() {
  emit("show");
}

</script>

<template>
    <div class="header">
      <div class="img">
        <img src="../assets/bebe.jpeg" alt="Alana Kristell">
        <v-btn text="ver" variant="flat" @click="handleShow" class="btn"/>
      </div>
      <div class="title">
        <h1>Alana Kristell</h1>
        <h2>Regalos Ideales</h2>
      </div>
    </div>
</template>

<style scoped>
.header {
  width: 350px;
  margin: 0 auto;
  height: 120px;
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  column-gap: 16px;
}

.img {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0 12px;
}
.header img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 3px solid var(--color-primary);
}
.img .btn {
  font-size: 12px;
  background-color: var(--color-primary);
  color: var(--white);
  height: 24px;
  position: absolute;
  bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.title {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.title h1 {
  color: var(--black);
  font-size: 20px;
  line-height: 20px;
}
.title h2 {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 25px;
  line-height: 25px;
}

@media (max-width: 600px) {
  .header {
    width: calc(100vw - 48px);
  }
}
</style>