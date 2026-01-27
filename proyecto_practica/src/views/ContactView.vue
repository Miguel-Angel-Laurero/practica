<template>
    <div class="contact">
        <ContactForm></ContactForm>
    </div>
</template>
<script setup>
    import ContactForm from '@/components/ContactForm.vue';
</script>
<style scoped>
    @media (min-width: 1024px) {
        .contact {
            min-height: 100vh;
            display: flex; 
            align-items: center;
    }
}
</style>
