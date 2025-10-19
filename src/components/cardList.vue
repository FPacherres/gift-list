<script setup>
import card from "@/components/card.vue";
import { ref, onMounted } from "vue";
import cunaImg from "@/assets/cuna.jpg";
import { db } from '@/firebase/firebase';
import { 
  collection, 
  getDocs,
} from 'firebase/firestore';
import { 
  ref as storageRef, 
  uploadBytes, 
  getDownloadURL,
  deleteObject 
} from 'firebase/storage';


const NOMBRE_COLECCION = 'gifts';
const images = {
  cuna: cunaImg,
}

// Obtener items de Firestore
const obtenerItems = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, NOMBRE_COLECCION));

    console.log('Documentos encontrados:', querySnapshot);
    
    list.value = querySnapshot.docs.map(doc => {
      const data = doc.data();
      const img = images[data.img]
      return {
        ...data,
        id: doc.id,
        img
      }
    });
  } catch (error) {
    console.error('Error al obtener items:', error);
  }
};

onMounted(() => {
  obtenerItems();
});

const list = ref([
  {
    _id: "a1f3b9c7",
    name: "Regalo 1",
    img: "https://www.craft-child.com/wp-content/uploads/2024/05/Solid-Wood-Crib-2.webp",
    available: true,
    reservedBy: "",
    description: "Un hermoso regalo ideal para toda ocasión.",
  },
]);

// Functions
const updatedItem = (data) => {
  const pos = list.value.findIndex(item => item._id === data._id);
  list.value[pos].reservedBy = data.reservedBy;
  list.value[pos].available = false;
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
