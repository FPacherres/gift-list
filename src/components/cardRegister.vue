<script setup>
import { ref, defineProps, defineEmits } from "vue";
import Swal from "sweetalert2";
import { db } from '@/firebase/firebase';
import { doc, updateDoc, addDoc, collection } from 'firebase/firestore';

// Props
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});

const regalosBebe = [
  {
    name: "Coche moisés para bebés",
    links: [
      "https://simple.ripley.com.pe/coche-moises-para-bebe-bigi-con-mango-reversible-beige-pmp20001025300?color_80=beige&gad_campaignid=20453007264&gad_source=1&gclid=CjwKCAjwmNLHBhA4EiwA3ts3mVgNCuT1nbGYdFlsM0rtc5HMwPSAIglbRKI9HnJwZ6l8bV2NZFgj7BoC5yUQAvD_BwE"
    ],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Cuna para bebé",
    links: [
      "https://www.falabella.com.pe/falabella-pe/product/142453930/Cuna-Corral-%C2%ABVIENA-STOKKER%C2%BB-2-en-1-Blue/142453932",
      "https://www.falabella.com.pe/falabella-pe/product/883093664/Cuna-Convertible-Confort-Wood-blanco/883093664"
    ],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Cambiador de bebé",
    links: [
      "https://www.falabella.com.pe/falabella-pe/product/140828744/Cambiador-Mudador-De-Panales-De-Bebe-Horizontal-Bano-Publico/140828746?kid=shopp44fc&gclsrc=aw.ds&gad_source=1&gad_campaignid=20114538213&gbraid=0AAAAADs9MO33yj8h7LuVQZcsievqQVD8N&gclid=CjwKCAjwmNLHBhA4EiwA3ts3mcJ5NK2PQJoBgSz4y-cJgkvBXwMtS10aiXP4f37dzl9tEc-ze_KIdBoCQvEQAvD_BwE"
    ],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Pañalera",
    links: [
      "https://www.oechsle.pe/mochila-pa%C3%B1alera-infanti-open-2969801/p?_gl=1*1t7inqj*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwmNLHBhA4EiwA3ts3maQf1clIQIqqjxDSC8OalAjMBx5dpW0WW7WsmHf3VtPeN9ZgPQhPHRoCcuUQAvD_BwE&gbraid=0AAAAADLzVCiriHf1woquaaOwF_B0ntHwY"
    ],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Gimnasio para bebés",
    links: [
      "https://www.falabella.com.pe/falabella-pe/product/119074211/Gimnasio-de-bebe-con-piano-para-patear-verde/119074213"
    ],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Coche bastón",
    links: [
      "https://www.oechsle.pe/coche-de-paseo-para-bebe-circus-rosado-2379991/p?_gl=1*ias1hj*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwmNLHBhA4EiwA3ts3maGVcUCMzU1D89zFqe_Rjv74jrMFj3aJIf5IzdSwmmOd90fiG0u6pxoCdVwQAvD_BwE&gbraid=0AAAAADLzVCiriHf1woquaaOwF_B0ntHwY"
    ],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Silla de comer",
    links: [
      "https://www.oechsle.pe/ebaby-silla-de-comer-regulable-para-bebe-lori-rosa-hojas-2000358/p?_gl=1*15mzdgf*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwmNLHBhA4EiwA3ts3ma87lf2HJdDqouEMFa9ddOfMZJL_uighYWHmKEJhZBfT0r9PLmkLEhoCLjEQAvD_BwE&gbraid=0AAAAADLzVCiriHf1woquaaOwF_B0ntHwY"
    ],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Set de baño para bebés (toalla, esponja, shampú, jabón, loción de baño, etc.)",
    links: [],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Kit de corta uñas para bebé (manicure pulido)",
    links: [
      "https://www.maternelle.pe/products/limador-de-unas-electrico-para-bebe-celeste-maternelle"
    ],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Tina de baño para bebés",
    links: [
      "https://www.falabella.com.pe/falabella-pe/product/883220461/Tina-De-Bano-Bebe-Pol-Con-Termometro-Yamp/883220464?kid=shopp69fc&gclsrc=aw.ds&gad_source=1&gad_campaignid=21209754652&gbraid=0AAAAADs9MO0m9fUU-t0HvLS-irpHlDING&gclid=CjwKCAjwmNLHBhA4EiwA3ts3mW_5FlaHZ7g9DlMeDeDN02Sr86iDwb5f0DgFyKKHRwSFqW7RTWrS6BoCLt8QAvD_BwE"
    ],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Juego de sábanas y edredón de bebé",
    links: [],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Colecho de bebé",
    links: [
      "https://www.falabella.com.pe/falabella-pe/product/143979117/Nido-Colecho-Trenzado-Estrellita-Palo-Rosa/143979118?kid=shopp44fc&gclsrc=aw.ds&gad_source=1&gad_campaignid=20114538213&gbraid=0AAAAADs9MO33yj8h7LuVQZcsievqQVD8N&gclid=CjwKCAjwmNLHBhA4EiwA3ts3md2r7lRWDC3_j1meTjwXGVPkvQZ81ODD7GKJd489TpJW9p_BSuOaLRoCzEQQAvD_BwE"
    ],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Corral de bebé",
    links: [
      "https://www.falabella.com.pe/falabella-pe/product/883501674/Corral-Reja-Para-Ninos-151-X-151-CmScoop/883501675?kid=shopp69fc&gclsrc=aw.ds&gad_source=1&gad_campaignid=21209754652&gbraid=0AAAAADs9MO0m9fUU-t0HvLS-irpHlDING&gclid=CjwKCAjwmNLHBhA4EiwA3ts3mQ40GPITEv1fFE7Gg_8eZ-mxl2D3O4DiQgrYADOAd_kwTBzi0UAOoBoC8IIQAvD_BwE"
    ],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Silla mecedora para bebé",
    links: [
      "https://www.falabella.com.pe/falabella-pe/product/883220434/Silla-Nido-Bebe-Mecedora-Electrica-Priori/883220435"
    ],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Esterilizador de biberones y biberón",
    links: [
      "https://simple.ripley.com.pe/esterilizador-de-biberones-multifuncion-8-modos-pmp20000871731?color_80=blanco&gad_campaignid=20453007264&gad_source=1&gclid=CjwKCAjwmNLHBhA4EiwA3ts3mXJQzw30_ugmIZXNruMCFZ_AHf-XilbiOaj12RlVb5OBRNfUw2v9rBoC0D0QAvD_BwE&s=mdco"
    ],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Canguro ergonómico",
    links: [
      "https://simple.ripley.com.pe/canguro-ergonomico-para-bebe-de-15-posiciones-con-panalera-color-rosado-pmp00003415799?color_80=rosado-bebe&sein=canguro%20ergonomico%20bebe&s=mdco"
    ],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Andador multifuncional",
    links: [
      "https://www.falabella.com.pe/falabella-pe/product/130004632/Andador-multifuncion-para-bebes-4-en-1-Rosado/130004633?kid=shopp44fc&gclsrc=aw.ds&gad_source=1&gad_campaignid=20114538213&gbraid=0AAAAADs9MO33yj8h7LuVQZcsievqQVD8N&gclid=CjwKCAjwmNLHBhA4EiwA3ts3mb8BAcq9e7qbL0q7_QWfHs1ljNRlyJY2a5JPrrY6aWJ37W3fgZFavhoC-NIQAvD_BwE"
    ],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Ajuar de bebé (ropa para bebés)",
    links: [],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  },
  {
    name: "Móvil de bebés",
    links: [
      "https://www.oechsle.pe/movil-para-cuna-baby-kits-animales-lila-2305779/p"
    ],
    description: "",
    available: true,
    img: "cuna",
    reservedBy: ""
  }
];

const subirTodosLosRegalos = async () => {
  try {
    const promises = regalosBebe.map(regalo => 
      addDoc(collection(db, NOMBRE_COLECCION), regalo)
    );
    
    const resultados = await Promise.all(promises);
    console.log(`✅ ${resultados.length} regalos subidos exitosamente`);
    return resultados;
  } catch (error) {
    console.error('❌ Error:', error);
  }
};


// Emits
const emit = defineEmits(["closeModal", "updatedItem"]);

// State
const name = ref("");
const loading = ref(false);

const NOMBRE_COLECCION = 'gifts'; // Cambia esto por el nombre de tu colección

// Validaciones
function required(v) {
  return !!v || "Campo obligatorio";
}

// Envío con Firebase
async function onSubmit() {
  if (!name.value) return;

  loading.value = true;

  try {
    // Referencia al documento en Firestore
    const docRef = doc(db, NOMBRE_COLECCION, props.item.id);
    
    // Actualizar el documento
    await updateDoc(docRef, {
      reservedBy: name.value,
      available: false
    });

    console.log("Item actualizado en Firebase:", {
      id: props.item.id,
      reservedBy: name.value,
      available: false
    });

    // Emitir evento con los datos actualizados
    emit("updatedItem", { 
      id: props.item.id, 
      reservedBy: name.value, 
      available: false 
    });

    showAlert(true);
    emit("closeModal");
  } catch (error) {
    console.error("Error al actualizar item:", error);
    showAlert(false);
  } finally {
    loading.value = false;
  }
}

// Cancelar
function onCancel() {
  emit("closeModal");
}

// Alert reutilizable
function showAlert(ok) {
  if (ok) {
    Swal.fire({
      title: "¡Registro exitoso!",
      text: "Tu registro ha sido guardado correctamente.",
      icon: "success",
      showConfirmButton: false,
      allowOutsideClick: false,
      timer: 2000,
    });
  } else {
    Swal.fire({
      title: "Upps! ocurrió un error.",
      text: "Por favor inténtalo nuevamente.",
      icon: "error",
      showConfirmButton: false,
      allowOutsideClick: false,
      timer: 2000,
    });
  }
}

// subirTodosLosRegalos();
</script>

<template>
  <div class="cardRegister" :class="{ 'cardRegister--loading': loading }">
    <div class="cardRegister__img">
      <span class="msg">Regalo por persona</span>
      <img :src="props.item.img" :alt="props.item.name" />
    </div>

    <span class="title">{{ props.item.name }}</span>
    <span class="description">{{ props.item.description }}</span>

    <v-text-field
      v-model="name"
      :readonly="loading"
      :rules="[required]"
      label="Nombre"
      placeholder="Ingresa tu nombre"
      class="input"
      clearable
    />

    <div class="actions">
      <!-- Botón Guardar -->
      <v-btn
        :loading="loading"
        :disabled="loading || !name"
        size="large"
        type="submit"
        variant="elevated"
        block
        class="text-white"
        style="background-color: var(--color-primary)"
        @click="onSubmit"
      >
        Guardar
      </v-btn>

      <!-- Botón Cancelar -->
      <v-btn
        :disabled="loading"
        size="large"
        variant="outlined"
        block
        class="outlined-btn"
        @click="onCancel"
      >
        Cancelar
      </v-btn>
    </div>

    <!-- Overlay de carga -->
    <div v-if="loading" class="overlay">
      <v-progress-circular indeterminate color="primary" size="48" />
    </div>
  </div>
</template>

<style scoped>
.cardRegister {
  max-width: 500px;
  width: calc(100vw - 40px);
  height: auto;
  background-color: var(--color-background);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 48px 24px;
  gap: 12px;
  position: relative;
}

.cardRegister__img {
  overflow: hidden;
  border-radius: 8px;
  position: relative;
}
.cardRegister__img img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.cardRegister__img .msg {
  position: absolute;
  background-color: var(--color-primary);
  color: var(--white);
  font-size: 12px;
  line-height: 12px;
  padding: 4px 12px;
  border-radius: 6px;
  font-weight: 600;
  top: 8px;
  left: 8px;
}

.title {
  font-size: 20px;
  font-weight: 600;
}
.description {
  font-size: 16px;
  color: var(--color-text-secondary);
  margin-bottom: 10px;
}

.input {
  height: 42px;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
}

/* Botón outlined con borde del color primario */
.outlined-btn {
  border: 1px solid var(--color-primary) !important;
  color: var(--color-primary) !important;
}

/* Overlay cuando loading */
.overlay {
  position: absolute;
  inset: 0;
  background-color: var(--color-background-opacity);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  z-index: 5;
}
</style>