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
import sabanasImg from "@/assets/sabanas.jpg";
import ajuarImg from "@/assets/ajuar.jpg";
import setbanoImg from "@/assets/setbano.jpeg";
import { db } from '@/firebase/firebase';
import { 
  collection, 
  getDocs,
} from 'firebase/firestore';

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
  sabanas: sabanasImg,
  ajuar: ajuarImg,
  setbano: setbanoImg,
}

const list = ref([]);
const loading = ref(true);

// Obtener items de Firestore
const obtenerItems = async () => {
  loading.value = true;
  try {
    const querySnapshot = await getDocs(collection(db, NOMBRE_COLECCION));

    list.value = querySnapshot.docs.map(doc => {
      const data = doc.data();
      const img = images[data.img];
      return {
        ...data,
        id: doc.id,
        img
      }
    });
  } catch (error) {
    console.error('Error al obtener items:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  obtenerItems();
});

// Functions
const updatedItem = (data) => {
  const pos = list.value.findIndex(item => item.id === data.id);
  list.value[pos].reservedBy = data.reservedBy;
  list.value[pos].available = false;
}

</script>

<template>
  <div class="cardList">
    <!-- Loading -->
    <div v-if="loading" class="loading-container">
      <v-progress-circular
        indeterminate
        :style="{ color: 'var(--color-primary)' }"
        size="64"
      />
      <p class="loading-text">Cargando regalos...</p>
    </div>

    <!-- Lista de cards -->
    <template v-else>
      <card 
        v-for="item in list" 
        :key="item.id" 
        :item="item" 
        @updatedItem="updatedItem" 
      />
    </template>
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
  min-height: 100vh;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 80px 20px;
  width: 100%;
}

.loading-text {
  font-size: 18px;
  color: var(--color-text-secondary);
  font-weight: 500;
}
</style>