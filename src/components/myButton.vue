<script setup>
import { defineProps } from "vue";

// Props
const props = defineProps({
  text: { type: String, default: "" },
});
</script>

<template>
  <button>
    <span>{{ props.text }}</span>
  </button>
</template>

<style scoped>
button {
    height: 32px;
    padding: 0 24px;
    border-radius: 8px;
    background-color: var(--color-background);
    border: none;
}
button span {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 14px;
}
</style>
