<template>
  <div class="contact-page">
    <div class="contact-card">
      <header class="contact-header">
        <h2>Contáctanos</h2>
        <p>¿Tienes alguna duda? Estamos aquí para ayudarte.</p>
      </header>
      
      <ContactForm />
    </div>
  </div>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue';
</script>

<style scoped>
/* Contenedor principal: sigue la misma línea que el login */
.contact-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* Restamos la altura de la navbar para centrado óptimo */
  min-height: calc(100vh - 80px);
  background-color: #f4f7f9;
  padding: 2rem 1rem;
}

/* Tarjeta contenedora del formulario */
.contact-card {
  background-color: #ffffff;
  width: 100%;
  max-width: 600px; /* Un poco más ancho que el login por si hay campos largos */
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

.contact-header {
  text-align: center;
  margin-bottom: 2rem;
}

.contact-header h2 {
  margin: 0;
  font-size: 2rem;
  color: #2c3e50;
  font-weight: 700;
}

.contact-header p {
  margin-top: 0.5rem;
  color: #7f8c8d;
}

/* Responsividad */
@media (max-width: 480px) {
  .contact-card {
    padding: 1.5rem;
  }
  
  .contact-header h2 {
    font-size: 1.6rem;
  }
}
</style>