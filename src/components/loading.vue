<template>
  <div class="loading" :class="{ 'loading--hide': !loading }">
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  loading: {
    type: Boolean,
    default: true
  }
});
</script>

<style scoped>
.loading {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
  position: fixed;
  inset: 0;
  z-index: 9999;
  opacity: 1;
  transform: scale(1);
  pointer-events: all;
  transition:
    opacity 0.4s ease-in-out,
    transform 0.4s ease-in-out 0.4s;
}

/* Estado oculto */
.loading--hide {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
  transition:
    opacity 0.4s ease-in-out,
    transform 0.4s ease-in-out 0s;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
