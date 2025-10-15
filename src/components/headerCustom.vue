<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["show"]);

function handleShow() {
  emit("show");
}

</script>

<template>
    <div class="header">HEader
      <v-btn text="ver invitación" @click="handleShow"/>
    </div>
</template>

<style scoped>
.header {
    width: 350px;
    margin: 0 auto;
    height: 120px;
}

@media (max-width: 600px) {
  .header {
    width: calc(100vw - 48px);
  }
}
</style>