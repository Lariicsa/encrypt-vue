<template>
  <div class="flex w-full relative">
    <label :for="name" v-show="modelValue !== undefined" class="text-slate-400 uppercase text-[12px] absolute top-[-8px]">{{
      label }}</label>
    <input
      class="w-full relative bg-transparent h-[48px] border-b border-slate-400 placeholder:text-slate-500 text-slate-300 outline-none text-xl"
      :type="type" :name="name" :alt="alt" :placeholder="placeholder" :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)" />
  </div>
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
  label: {
    type: String,
    default: 'label'
  },
  placeholder: {
    type: String,
    default: 'Add your text to convert'
  },
  alt: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: String,
    default: undefined
  }
})

</script>
