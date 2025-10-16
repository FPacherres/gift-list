<script setup>
import { ref, defineEmits } from "vue";
import Swal from "sweetalert2";

// Emits
const emit = defineEmits(["closeModal"]);

// Constantes
const form = ref(false);
const name = ref(null);
const amount = ref(null);
const file = ref(null);
const loading = ref(false);

// Validaciones
function required(v) {
  return !!v || "Campo obligatorio";
}

function validateFile(value) {
  if (!value) return "Campo obligatorio";
  const fileObj = Array.isArray(value) ? value[0] : value;
  if (!fileObj) return "Campo obligatorio";
  if (!fileObj.type.startsWith("image/")) {
    return "Debe ser una imagen (jpg, png, etc)";
  }
  if (fileObj.size > 10 * 1024 * 1024) {
    return "La imagen no debe superar los 10MB";
  }
  return true;
}

// Envío simulado
function onSubmit() {
  if (!form.value) return;
  loading.value = true;

  console.log({
    nombre: name.value,
    monto: amount.value,
    archivo: file.value ? file?.value?.[0]?.name : null,
  });

  // Simula llamada al backend
  setTimeout(() => {
    const ok = true; // cambia a false para probar error
    showAlert(ok);
    loading.value = false;
    emit("closeModal");
  }, 2000);
}

function allowOnlyNumbers(e) {
  const allowed = /[0-9.,]/;
  if (!allowed.test(e.key)) e.preventDefault();
}

function validateAmount(v) {
  if (!v) return "Campo obligatorio";
  if (isNaN(Number(v))) return "Debe ser un número válido";
  if (Number(v) <= 0) return "Debe ser mayor que 0";
  return true;
}

function showAlert(ok) {
  Swal.fire({
    title: ok ? "¡Registro exitoso!" : "Upps! ocurrió un error.",
    text: ok
      ? "Tu comprobante ha sido enviado correctamente, muchas gracias!"
      : "Por favor inténtalo nuevamente.",
    icon: ok ? "success" : "error",
    showConfirmButton: false,
    allowOutsideClick: false,
    timer: 2000,
  });
}
</script>

<template>
  <div class="formWrapper">
    <v-form v-model="form" @submit.prevent="onSubmit" class="form">
      <v-text-field
        v-model="name"
        :readonly="loading"
        :rules="[required]"
        label="Nombre"
        placeholder="Ingresa nombre completo"
        clearable
      />

      <v-text-field
        v-model="amount"
        :readonly="loading"
        :rules="[required, validateAmount]"
        label="Monto"
        placeholder="Ingresa el monto que depositaste"
        clearable
        type="number"
        step="any"
        @keypress="allowOnlyNumbers"
      />

      <v-file-input
        v-model="file"
        :readonly="loading"
        :rules="[validateFile]"
        accept="image/png, image/jpeg"
        label="Comprobante (imagen)"
        placeholder="Sube tu comprobante de pago"
        show-size
        counter
        clearable
        :prepend-icon="null"
        append-inner-icon="mdi-image"
      />

      <div class="actions">
        <v-btn
          :disabled="!form"
          :loading="loading"
          size="large"
          type="submit"
          variant="elevated"
          block
          class="text-white"
          style="background-color: var(--color-primary)"
        >
          Enviar
        </v-btn>

        <v-btn
          :disabled="loading"
          size="large"
          variant="outlined"
          block
          color="primary"
          class="btnCancel"
          @click="emit('closeModal')"
        >
          Cancelar
        </v-btn>
      </div>
    </v-form>

    <!-- Overlay de loading -->
    <div v-if="loading" class="overlay">
      <v-progress-circular indeterminate color="primary" size="48" />
    </div>
  </div>
</template>

<style scoped>
.formWrapper {
  position: relative;
}

.form {
  max-width: 500px;
  width: calc(100vw - 40px);
  padding: 48px 24px;
  border-radius: 10px;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 48px;
}

/* Overlay de carga */
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

/* Botón Cancelar */
.btnCancel {
  color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
  transition: 0.2s ease-in-out;
}

.btnCancel:hover {
  background-color: rgba(var(--color-primary-rgb), 0.08);
}
</style>
