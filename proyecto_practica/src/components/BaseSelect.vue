<template>
  <label v-if="label" :for="uuid">{{ label }}</label>
  <select
    :value="modelValue"
    class="field"
    v-bind="$attrs"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
    >
      {{ option }}
    </option>
  </select>
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
  options: {
    type: Array,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>
<style scoped>
</style>