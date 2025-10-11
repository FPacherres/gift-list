<script setup>
import card from "@/components/card.vue";

const list = [
  {
    name: "Regalo 1",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    status: "taken",
    bg: "linear-gradient(90deg, #FF5F6D 0%, #FFC371 100%)",
    bgMain: "#FF6F61", // naranja intenso para resaltar
  },
  {
    name: "Regalo 2",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    status: "taken",
    bg: "linear-gradient(90deg, #36D1DC 0%, #5B86E5 100%)",
    bgMain: "#217CA3", // azul oscuro
  },
  {
    name: "Regalo 3",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    status: "available",
    bg: "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
    bgMain: "#FF5A7A", // rosa fuerte
  },
  {
    name: "Regalo 4",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    status: "taken",
    bg: "linear-gradient(90deg, #8E2DE2 0%, #4A00E0 100%)",
    bgMain: "#9F4EEA", // violeta medio
  },
  {
    name: "Regalo 5",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    status: "taken",
    bg: "linear-gradient(90deg, #56ab2f 0%, #a8e063 100%)",
    bgMain: "#4C6F2B", // verde bosque
  },
  {
    name: "Regalo 6",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    status: "available",
    bg: "linear-gradient(90deg, #ED4264 0%, #FFEDBC 100%)",
    bgMain: "#D93A5F", // magenta oscuro
  },
  {
    name: "Regalo 7",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    status: "available",
    bg: "linear-gradient(90deg, #FF5F6D 0%, #FFC371 100%)",
    bgMain: "#FF8B7B",
  },
  {
    name: "Regalo 8",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    status: "taken",
    bg: "linear-gradient(90deg, #36D1DC 0%, #5B86E5 100%)",
    bgMain: "#2C99B7",
  },
  {
    name: "Regalo 9",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    status: "available",
    bg: "linear-gradient(90deg, #8E2DE2 0%, #4A00E0 100%)",
    bgMain: "#7B3AD8",
  },
  {
    name: "Regalo 10",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    status: "taken",
    bg: "linear-gradient(90deg, #ED4264 0%, #FFEDBC 100%)",
    bgMain: "#C1224A",
  },
];


</script>

<template>
  <card v-for="(item, i) in list" :key="i" :i="i" :item="item" />
</template>

<style scoped>
</style>
