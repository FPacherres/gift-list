<script setup>
import card from "@/components/card.vue";
import { ref, onMounted } from "vue";
import cunaImg from "@/assets/cuna.jpg";
import tinaImg from "@/assets/tina.jpg";
import andadorImg from "@/assets/andador.jpg";
import cambiadorImg from "@/assets/cambiador.jpg";
import canguroImg from "@/assets/canguro.jpg";
import cocheImg from "@/assets/coche.jpg";
import cocheBastonImg from "@/assets/cocheBaston.jpg";
import colechoImg from "@/assets/colecho.jpg";
import corralImg from "@/assets/corral.jpg";
import cortaunasImg from "@/assets/cortaunas.jpg";
import esterilizadorImg from "@/assets/esterilizador.jpg";
import gimnasioImg from "@/assets/gimnasio.jpg";
import mecedoraImg from "@/assets/mecedora.jpg";
import movilImg from "@/assets/movil.jpg";
import panaleraImg from "@/assets/panalera.jpg";
import sillaImg from "@/assets/silla.jpg";
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
  tina: tinaImg,
  andador: andadorImg,
  cambiador: cambiadorImg,
  canguro: canguroImg,
  coche: cocheImg,
  cocheBaston: cocheBastonImg,
  colecho: colechoImg,
  corral: corralImg,
  cortaunas: cortaunasImg,
  esterilizador: esterilizadorImg,
  gimnasio: gimnasioImg,
  mecedora: mecedoraImg,
  movil: movilImg,
  panalera: panaleraImg,
  silla: sillaImg,
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
