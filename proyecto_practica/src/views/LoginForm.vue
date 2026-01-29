<template>
  <div class="login-page">
    <form @submit="onSubmit" class="login-card">
      <div class="login-header">
        <h2>¡Bienvenido!</h2>
        <p>Ingresa tus credenciales para acceder</p>
      </div>

      <div class="form-group">
        <BaseInput
          label="Email"
          type="email"
          placeholder="ejemplo@correo.com"
          v-model="email"
          :error="errors.email"
        />
      </div>

      <div class="form-group">
        <BaseInput
          label="Password"
          type="password"
          placeholder="Tu contraseña"
          v-model="password"
          :error="errors.password"
        />
      </div>

      <BaseButton
        type="submit"
        class="-fill-gradient"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Cargando...' : 'Iniciar Sesión' }}
      </BaseButton>
    </form>
  </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import BaseButton from '@/components/BaseButton.vue';
import BaseInput from '@/components/BaseInput.vue';

// 1. Esquema de validación con Yup
const schema = yup.object({
  email: yup
    .string()
    .required('El correo es obligatorio')
    .email('Formato de correo inválido'),
  password: yup
    .string()
    .required('La contraseña es obligatoria')
    .min(8, 'Debe tener al menos 8 caracteres'),
});

// 2. Configuración de Vee-Validate
const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
});

// 3. Definición de campos
const { value: email } = useField('email');
const { value: password } = useField('password');

// 4. Lógica de envío
const onSubmit = handleSubmit((values) => {
  console.log('Enviando datos:', values);
  // Simulación de API
  return new Promise((resolve) => setTimeout(resolve, 2000));
});
</script>

<style scoped>
/* El contenedor principal ocupa todo el espacio disponible 
   y centra el contenido mediante Flexbox.
*/
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* Restamos la altura aproximada de la navbar (80px) */
  min-height: calc(100vh - 80px);
  background-color: #f4f7f9;
  padding: 20px;
  box-sizing: border-box;
}

/* La tarjeta del formulario */
.login-card {
  background-color: #ffffff;
  width: 100%;
  max-width: 400px;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

/* Estilos de texto */
.login-header {
  text-align: center;
  margin-bottom: 1rem;
}

.login-header h2 {
  margin: 0;
  font-size: 1.8rem;
  color: #2c3e50;
  font-weight: 700;
}

.login-header p {
  margin: 0.5rem 0 0;
  color: #7f8c8d;
  font-size: 0.95rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

/* Forzar estilos al componente BaseButton */
:deep(.base-button) {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 8px;
}

/* Ajustes para móviles */
@media (max-width: 480px) {
  .login-card {
    padding: 1.5rem;
    gap: 1rem;
  }
  
  .login-header h2 {
    font-size: 1.5rem;
  }
}
</style>