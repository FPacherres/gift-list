<script setup>
import { ref, onMounted } from "vue";
import headerCustom from "@/components/headerCustom.vue";
import cardList from "@/components/cardList.vue";
import cardQr from "@/components/cardQr.vue";
import InvitationIntro from "@/components/invitationIntro.vue";
import Loading from "@/components/loading.vue";

// Constants
const tab = ref(1);
const showIntro = ref(true);
const loading = ref(true);

function closeIntroEvent() {
  showIntro.value = false;
}

function showIntroEvent() {
  showIntro.value = true;
}

// Mounted
onMounted(() => {
  const images = Array.from(document.querySelectorAll("img"));

  const promises = images.map(
    (img) =>
      new Promise((resolve) => {
        if (img.complete) return resolve(); // ya está cargada
        img.addEventListener("load", resolve);
        img.addEventListener("error", resolve); // evitar bloqueo si falla
      })
  );

  Promise.all(promises).then(() => {
    loading.value = false; // 🔹 ocultar loading al terminar todo
    console.log("✅ Todas las imágenes cargaron");
  });
});
</script>

<template>
  <transition name="fade">
    <invitation-intro v-if="showIntro" @close="closeIntroEvent" />
  </transition>

  <div v-show="!showIntro" class="main-content">
    <header-custom @show="showIntroEvent" />

    <v-tabs v-model="tab" align-tabs="center" class="custom-tabs">
      <v-tab :value="1">Regalos</v-tab>
      <v-tab :value="2">Efectivo</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item :value="1">
        <card-list />
      </v-tabs-window-item>
      <v-tabs-window-item :value="2">
        <card-qr />
      </v-tabs-window-item>
    </v-tabs-window>
  </div>

  <loading :loading="loading" />
</template>

<style scoped>
.custom-tabs .v-tab {
  color: var(--color-primary);
}
</style>
