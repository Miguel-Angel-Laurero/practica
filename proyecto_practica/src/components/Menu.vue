<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <img src="/src/assets/logo.svg" alt="Logo" class="logo" />
      <span class="brand-name">Mi App</span>
    </div>

    <div class="navbar-links">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/tablero" class="nav-link">Tablero</RouterLink>
      <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  /* Variables de diseño */
  --nav-bg: #ffffff;
  --nav-text: #2c3e50;
  --nav-accent: #42b983;
  --nav-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  background-color: var(--nav-bg);
  box-shadow: var(--nav-shadow);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  height: 40px;
  width: auto;
}

.brand-name {
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--nav-text);
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: var(--nav-text);
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--nav-accent);
}

/* Estilo automático para la ruta activa de Vue Router */
.router-link-active {
  color: var(--nav-accent);
  border-bottom: 2px solid var(--nav-accent);
}
</style>