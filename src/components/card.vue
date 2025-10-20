<script setup>
import { defineProps, computed, ref, defineEmits } from "vue";
import CardRegister from "./cardRegister.vue";

// Props
const props = defineProps({
  item: { type: Object, default: () => ({}) },
});

// Emits
const emit = defineEmits(["updatedItem"]);

// Constants
const dialog = ref(false);

// Estado del regalo
const status = computed(() => props.item?.available || false);

// Functions
const updatedItem = (list) => {
  emit("updatedItem", list);
};
</script>

<template>
  <div class="card">
    <div class="card__img">
      <span class="status">{{ status ? "Disponible" : "Reservado" }}</span>
      <img :src="props.item.img" :alt="props.item.name" />
    </div>
    <div class="card__text">
      <span class="title">{{ props.item.name }} </span>
      <template v-if="status" >
        <span v-if="props.item.description !== ''" class="description">{{ props.item.description }}</span>
        <div v-if="props?.item?.links?.length" class="links">
          <span class="main">Referencias: </span>
          <a v-for="(link,l) in props.item.links" :key="l" class="tag" :href="link" target="_blank">
            Links {{ l + 1 }}
          </a>
        </div>
      </template>
      <div class="user" v-else>
        <v-icon size="small">mdi-account</v-icon>
        <span>{{ props.item.reservedBy }}</span>
      </div>
    </div>
    <v-btn
      v-if="status"
      prepend-icon="mdi-gift-outline"
      class="text-white"
      style="background-color: var(--color-primary)"
      variant="flat"
      size="large"
      @click="dialog = true"
    >
      Yo lo llevo
    </v-btn>
  </div>
  <v-dialog v-model="dialog" max-width="500px" persistent>
    <CardRegister
      @closeModal="dialog = false"
      :item="props.item"
      @updatedItem="updatedItem"
    />
  </v-dialog>
</template>

<style scoped>
.card {
  width: 100vw;
  max-width: 350px;
  flex-shrink: 0;
  min-height: auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 10px;
  display: grid;
  grid-template-rows: v-bind("status ? '200px 1fr auto' : '200px 1fr'");
  row-gap: 12px;
  padding: 12px;
  background-color: var(--white);
}

/* Imagen */
.card__img {
  overflow: hidden;
  border-radius: 8px;
  position: relative;
}
.card__img img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card__img .status {
  position: absolute;
  background-color: v-bind(
    "status ? 'var(--color-success)' : 'var(--color-warning)'"
  );
  font-size: 12px;
  line-height: 12px;
  padding: 4px 12px;
  border-radius: 6px;
  font-weight: 600;
  top: 8px;
  left: 8px;
}

/* Texto */
.card__text {
  display: grid;
  align-items: center;
}
.card__text .title {
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  padding-bottom: 8px;
}
.card__text .description {
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 8px;
}
.card__text .links {
  display: flex;
  gap: 10px;
  align-items: center;
  padding-bottom: 20px;
}
.card__text .links .main {
  font-weight: 500;
  font-size: 12px;
}
.card__text .links .tag {
  background-color: var(--color-primary-soft);
  color: var(--color-primary);
  font-size: 12px;
  padding: 0px 8px;
  border-radius: 20px;
  font-weight: 600;
  text-decoration: none;
}
.card__text .user {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px;
  align-items: center;
  padding-bottom: 4px;
}
.card__text .user span {
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card__actions {
  background-color: yellow;
}

@media (max-width: 600px) {
  .card {
    width: calc(100vw - 48px);
  }
}
</style>
