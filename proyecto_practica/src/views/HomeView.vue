
<template>
  <main>
    <div class="home">
        <LoginForm></LoginForm>

    </div>
  </main>
</template>

  <script setup>


import LoginForm from './LoginForm.vue';

  </script>
  <style scoped>
    .home{
       min-height: 100vh;
            display: flex;
            align-items: center;
    }
  </style>