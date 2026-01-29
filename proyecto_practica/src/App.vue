<script setup>
import { RouterView } from 'vue-router'
import Menu from './components/Menu.vue';
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <Menu />
    </header>

    <main class="app-content">
      <RouterView />
    </main>
  </div>
</template>

<style>

</style>