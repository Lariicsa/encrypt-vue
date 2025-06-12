<template>
  <div
    class="flex-col justify-center items-center w-full max-w-[400px] sm:max-w-[480px] h-auto p-[24px] mx-auto bg-gray-700 mt-[56px] rounded-sm">
    <div class="w-[80px] h-auto min-h-[32px] mx-auto mt-[24px]">
      <img :src="src" :alt="alt" />
    </div>
    <h1 class="text-3xl text-[#80f6ed]">
      {{ title }}
    </h1>

    <h2 class="text-lg text-[#bcede8] mt-4">
      {{ subtitle }}
    </h2>
    <form class="w-full h-full flex-col justify-center items-center mt-[48px]">
      <AppInput v-model="inputText" />
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import AppInput from '@/components/AppInput.vue';

const inputText = ref()

defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
  title: {
    type: String,
    default: 'Your Title'
  },
  subtitle: {
    type: String,
    default: 'Your Title'
  },
})
</script>
