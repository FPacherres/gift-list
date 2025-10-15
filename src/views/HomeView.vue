<script setup>
import { ref } from "vue";
import headerCustom from "@/components/headerCustom.vue";
import cardList from "@/components/cardList.vue";
import cardQr from "@/components/cardQr.vue";
import InvitationIntro from "@/components/invitationIntro.vue";

const tab = ref(1);
const showIntro = ref(true);

function closeIntro() {
  showIntro.value = false;
}
</script>

<template>
  <transition name="fade">
    <invitation-intro v-if="showIntro" @close="closeIntro" />
  </transition>

  <div v-show="!showIntro" class="main-content">
    <header-custom />

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
</template>

<style scoped>
.custom-tabs .v-tab {
  color: var(--color-primary);
}
</style>
