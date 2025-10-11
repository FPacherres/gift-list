<script setup>
import { defineProps, computed } from "vue";
import myButton from "@/components/myButton.vue";

// Props
const props = defineProps({
  i: { type: Number, default: 0 },
  item: { type: Object, default: () => ({}) },
});

// Estado del regalo
const status = computed(() => props.item?.status || "available");

// Color del card según estado o posición
// const cardColorVar = computed(() => {
//   if (status.value === "taken") return "--color-disabled";
//   return props.i % 2 === 0
//     ? "--color-primary-soft"
//     : "--color-secondary-soft";
// });
</script>

<template>
  <div class="card" :style="{ backgroundColor: `var(${cardColorVar})` }">
    <div class="card__status">
      <span>{{ status === "available" ? "Disponible" : "Reservado" }}</span>
    </div>
    <div class="card__content">
      <img :src="props.item?.img || null" :alt="props.item?.name || '-'" />
      <div class="card__content-body">
        <span class="title">{{ props.item?.name || "-" }}</span>
        <span class="author"><strong>👤</strong> Fabián Pacherres</span>
        <div class="card__content-body-actions">
          <my-button text="Yo lo llevo" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 550px;
  flex-shrink: 0;
  height: 200px;
  width: 100%;
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.card__content {
  height: 200px;
  align-items: center;
  display: grid;
  grid-template-columns: 200px 1fr;
  background: v-bind("props.item.bg");
  padding: 20px;
  column-gap: 20px;
}

.card__content-body {
  display: grid;
  grid-template-rows: auto auto 1fr;
  height: 160px;
}

.card__content-body-actions {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}

.card__content-body-actions button {
  width: 100%;
}

/* === TEXTO VERTICAL CENTRADO === */
.card__status {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: v-bind("props.item.bgMain");
}

.card__status span {
  transform: rotate(-90deg);
  transform-origin: center;
  white-space: nowrap;
  text-align: center;
  text-transform: uppercase;
}

.card img {
  width: 200px;
  height: 160px;
  object-fit: cover;
  border-radius: 6px;
}

@media (max-width: 600px) {
  .card {
    grid-template-columns: 50px 1fr;
  }
  .card__content {
    grid-template-columns: 120px 1fr;
  }
  .card img {
    width: 120px;
    height: 160px;
  }
}
</style>
