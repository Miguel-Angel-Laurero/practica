<template>
  <label v-if="label" :for="uuid">{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="label"
    class="field"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false" 
  />
  <p
    v-if="error && error.length > 0"
    class="errorMessage"
    :id="`${uuid}-error`"
    aria-live="assertive"
  >
    {{ error }}
  </p>
</template>

<script setup>
import UniqueID from '@/features/UniqueID'; //

defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  error: {
    type: String,
    default: ''
  }
}); //

defineEmits(['update:modelValue']); //

const uuid = UniqueID().getID(); //
</script>
<style scoped>
.errorMessage{
  padding-top: 15px;
  color:red;
  font-size: 12px;
}
</style>