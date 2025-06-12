<template>
  <input class="w-full bg-transparent h-[40px] border-b border-gray-100 placeholder:text-blue-300"
  :type="type" :name="name" :alt="alt" :placeholder="placeholder" :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)" />
</template>
<script setup>

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: 'Ingresa tu texto'
  },
  alt: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: [String]
  }
})

</script>
