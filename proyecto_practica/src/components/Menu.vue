<template>
    <nav class ="navbar">
        <img src="/src/assets/logo.svg" alt="Logo" class="logo" />
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/tablero">Tablero</RouterLink>  
        <RouterLink to="/contact">Contact</RouterLink>  
    </nav>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
    /* Variables para fácil personalización */
    .navbar {
    --nav-bg: #ffffff;
    --nav-text: #2c3e50;
    --nav-accent: #42b983; /* Verde Vue */
    --nav-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 2rem;
    background-color: var(--nav-bg);
    box-shadow: var(--nav-shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
    }

    /* Sección Logo */
    .navbar-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--nav-text);
    }

    .logo {
    height: 40px;
    }
</style>