<template>
    <div class="contact" >
        <h1>Contacto</h1>
        <form action="" @submit.prevent="sendForm" class="form">
            
            <div>
                <BaseSelect
                :options="categories"
                v-model="events.category"
                label="Category"    
                >
                </BaseSelect>
            </div>
            
            <fieldset>
                <legend>Name and describe your event</legend>
                <div>
                    <BaseInput
                        v-model="events.title"
                        label ="Title"
                        type="text"
                        error="This input has an error!"
                    ></BaseInput>
                </div>
                <div>
                    <BaseInput
                        v-model="events.description"
                        label ="Description"
                        type="text"
                        error="This input has an error!"
                    ></BaseInput>
                </div>
            </fieldset>
            <fieldset>
                <legend>Extras</legend>
                <div>
                    <BaseCheckbox
                        v-model="events.extras.catering"
                        label="Catering"   
                    ></BaseCheckbox>
                </div>
                <div>
                    <BaseCheckbox
                        v-model="events.extras.music"
                        label="Music"   
                    ></BaseCheckbox>
                </div>
            </fieldset>
            <fieldset>
                <legend>Pets</legend>
                <p>Are pets allowed?</p>
                <div>
                    <BaseRadioGroup
                        v-model="events.pets"
                        name="pets"
                        :options="petsOptions"
                        vertical
                    ></BaseRadioGroup>
                </div>
            </fieldset>

            <button type="submit">Enviar</button>
        </form>
    </div>
</template>
<script setup>
import { reactive } from 'vue'; // 1. Importar reactive
import axios from 'axios';
import BaseCheckbox from './BaseCheckbox.vue';
import BaseInput from './BaseInput.vue';
import BaseSelect from './BaseSelect.vue';
import BaseRadioGroup from './BaseRadioGroup.vue';

const categories = [
    'sustainability', 'nature', 'animal welfare',
    'housing', 'education', 'food', 'community'
];

// 2. Hacer que el objeto sea reactivo
const events = reactive({
    category: '',
    title: '',
    description: '',
    location: '',
    pets: 1,
    extras: {
        catering: false,
        music: false
    }
});

const petsOptions = [
    { label: 'Yes', value: 1 },
    { label: 'No', value: 0 }
];

const sendForm = () => {
    axios.post(
        'https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events', 
        events 
    )
    .then((response) => {
        console.log('Response', response);
        alert('¡Formulario enviado con éxito!');
    })
    .catch((err) => {
        console.log('Error', err);
    });
}
</script>
<style scoped>
    .contact {
        display: flex;
        flex-direction: column;
        align-items: center; /* Centrado horizontal */
        justify-content: center; /* Centrado vertical */
        min-height: 100vh; /* Ocupa el 100% de la altura de la ventana */
        width: 100%;
    }
    
    .form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 300px; /* Mantiene el ancho fijo que ya tenías */
    }

    .form div {
        display: flex;
        flex-direction: column;
    }
    fieldset{
        border: 0;
        margin: 0;
        padding: 0;
    }
    legend{
        font-size: 28px;
        font-weight: 700;
        margin-top: 20px;
    }
</style>
