<template>
  <div
    class="flex-col justify-center items-center w-full max-w-[480px] h-auto p-[16px] mx-auto bg-gray-700 mt-[56px] rounded-sm">

    <div class="w-[72px] h-auto min-h-[32px] mx-auto">
      <img :src="src" :alt="alt" />
    </div>
    <form class="w-full h-full flex-col justify-center items-center">
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
})
</script>
