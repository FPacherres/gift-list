<script setup>
import card from "@/components/card.vue";

const list = [
  {
    name: "Regalo 1",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: true,
    reservedBy: "",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    name: "Regalo 2",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: true,
    reservedBy: "",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    name: "Regalo 3",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: false,
    reservedBy: "Lucía Torres",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    name: "Regalo 4",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: true,
    reservedBy: "",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    name: "Regalo 5",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: true,
    reservedBy: "",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    name: "Regalo 6",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: false,
    reservedBy: "Carlos Fernández",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    name: "Regalo 7",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: false,
    reservedBy: "Valeria Ruiz",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    name: "Regalo 8",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: true,
    reservedBy: "",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    name: "Regalo 9",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: false,
    reservedBy: "Javier Ríos",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    name: "Regalo 10",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: true,
    reservedBy: "",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
];

</script>

<template>
  <div class="cardList">
    <card v-for="(item, i) in list" :key="i" :i="i" :item="item" />
  </div>
</template>

<style scoped>
.cardList {
  width: 100vw;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 48px;
  align-items: center;
}
</style>
