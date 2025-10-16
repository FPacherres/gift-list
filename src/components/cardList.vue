<script setup>
import card from "@/components/card.vue";
import { ref } from "vue";

const list = ref([
  {
    _id: "a1f3b9c7",
    name: "Regalo 1",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: true,
    reservedBy: "",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    _id: "b2d7e4a1",
    name: "Regalo 2",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: true,
    reservedBy: "",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    _id: "c3f8d2b5",
    name: "Regalo 3",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: false,
    reservedBy: "Lucía Torres",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    _id: "d4a9e6f2",
    name: "Regalo 4",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: true,
    reservedBy: "",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    _id: "e5b1c8d4",
    name: "Regalo 5",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: true,
    reservedBy: "",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    _id: "f6c2a7b9",
    name: "Regalo 6",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: false,
    reservedBy: "Carlos Fernández",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    _id: "g7d4e9c3",
    name: "Regalo 7",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: false,
    reservedBy: "Valeria Ruiz",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    _id: "h8e5f1d7",
    name: "Regalo 8",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: true,
    reservedBy: "",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    _id: "i9f6a3e8",
    name: "Regalo 9",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: false,
    reservedBy: "Javier Ríos",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
  {
    _id: "j1a7b4f9",
    name: "Regalo 10",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: true,
    reservedBy: "",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
]);

// Functions
const updatedItem = (data) => {
  const pos = list.value.findIndex(item => item._id === data._id);
  list.value[pos].reservedBy = data.name;
  list.value[pos].available = data.false;
}

</script>

<template>
  <div class="cardList">
    <card v-for="item in list" :key="item._id" :item="item" @updatedItem="updatedItem" />
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
