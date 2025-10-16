<script setup>
import { ref } from "vue";
import formQr from "@/components/formQr.vue";

const phone = "+51 987 654 321";
const copied = ref(false);
const dialog = ref(false);

const copyPhone = async () => {
  try {
    await navigator.clipboard.writeText(phone);
    copied.value = true;
    setTimeout(() => (copied.value = false), 1500);
  } catch (err) {
    console.error("No se pudo copiar el número", err);
  }
};
</script>

<template>
  <div class="cardQr">
    <img
      class="qr"
      src="https://g4c7y7r6.delivery.rocketcdn.me/wp-content/uploads/2024/02/QR-code-black-and-white.webp"
      alt="my qr"
    />
    <div class="banks">
      <img src="../assets/plin.png" alt="plin" />
      <img src="../assets/yape.png" alt="yape" />
    </div>
    <span class="phone">{{ phone }}</span>
    <v-btn
      @click="copyPhone"
      :prepend-icon="copied ? 'mdi-check' : 'mdi-content-copy'"
      variant="outlined"
      :style="{ fontSize: '10px', color: 'var(--color-primary)' }"
      density="compact"
      size="large"
    >
      {{ copied ? "Copiado!" : "Copiar número" }}
    </v-btn>
    <v-btn
      class="btnMain text-white"
      :style="{ backgroundColor: 'var(--color-primary)', fontSize: '16px' }"
      size="x-large"
      variant="tonal"
      @click="dialog = true"
    >
      Registrar envio
    </v-btn>

    <v-dialog v-model="dialog" max-width="500px" persistent>
      <form-qr @closeModal="dialog=false" />
    </v-dialog>
  </div>
</template>

<style scoped>
.cardQr {
  width: 100vw;
  padding: 20px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 48px;
  align-items: center;
}

/* Qr */
.cardQr .qr {
  height: 200px;
  width: 200px;
  object-fit: cover;
}

/* Bancos */
.banks {
  display: flex;
  gap: 20px;
}
.banks img {
  height: 40px;
  width: 40px;
  object-fit: cover;
}

/* Phone */
.phone {
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
}

/* Boton */
.btnMain {
    margin-top: 24px;
}
</style>
