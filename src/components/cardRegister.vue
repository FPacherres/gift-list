<script setup>
import { ref, defineProps, defineEmits } from "vue";
import Swal from "sweetalert2";

// Props
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});

// Emits
const emit = defineEmits(["closeModal","updatedItem"]);

// State
const name = ref("");
const loading = ref(false);

// Validaciones
function required(v) {
  return !!v || "Campo obligatorio";
}

// Envío
function onSubmit() {
  if (!name.value) return;

  loading.value = true;

  // Simula petición al backend
  console.log("Enviando registro...", {
    nombre: name.value,
    item: props.item,
  });

  setTimeout(() => {
    // Simula respuesta OK
    showAlert(true);
    loading.value = false;
    emit("closeModal");
    emit("updatedItem", { _id: props.item._id, name: name.value })
  }, 2000);
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
</script>

<template>
  <div class="cardRegister" :class="{ 'cardRegister--loading': loading }">
    <div class="cardRegister__img">
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

.title {
  font-size: 20px;
  font-weight: 600;
}
.description {
  font-size: 16px;
  color: var(--color-text-secondary);
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
