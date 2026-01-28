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
            <h3> Titulo del evento</h3>

            <div>
                <BaseInput
                    v-model="events.title"
                    label ="Title"
                    type="text"
                ></BaseInput>
            </div>
            <div>
                <BaseInput
                    v-model="events.description"
                    label ="Description"
                    type="text"
                ></BaseInput>
            </div>
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
            <h3> Are pets allowed?</h3>
            <div>
                <BaseRadioGroup
                    v-model="events.pets"
                    name="pets"
                    :options="petsOptions"
                    vertical
                ></BaseRadioGroup>
            </div>

            <button type="submit">Enviar</button>
        </form>
    </div>
</template>
<script setup>
import axios from 'axios';
import BaseCheckbox from './BaseCheckbox.vue';
import BaseInput from './BaseInput.vue';
import BaseSelect from './BaseSelect.vue';
import BaseRadioGroup from './BaseRadioGroup.vue';

    const categories =[
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
    ];

    const events={
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
    }
    const petsOptions=[
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
    ]

    const sendForm = () =>{

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
</style>
