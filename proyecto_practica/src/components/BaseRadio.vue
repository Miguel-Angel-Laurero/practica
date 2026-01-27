<template>
    <input
        type="radio"
        :checked="modelValue === value"
        :value='value'
        @change="$emit('update:modelValue',value)"
        v-bind='$attrs'
        />
        <label v-if="label">{{ label }}</label>
</template>
<script setup>  
    defineProps({
        label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
    value: {
        type: [String, Number],
        required: true  
    }
    })

    defineEmits(['update:modelValue'])
</script>
<style scoped>  
</style>