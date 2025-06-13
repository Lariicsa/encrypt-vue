<template>
  <div
    class="flex-col relative justify-center items-center w-full max-w-[400px] sm:max-w-[480px] h-full p-[24px] mx-auto bg-gray-700 mt-[56px] rounded-sm">
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
      <AppInput v-model="inputText" :label="label" :name="name" />
      <AppButton :color="inputText === undefined ? 'disabled' : 'peach'" size="md" class="mt-[24px]">
        Encript
      </AppButton>
    </form>
    <div class="flex-col w-full justify-center items-center mt-[56px] h-auto">
      <p :class="isEncrypted ? 'text-green-300' : 'text-yellow-200'">Text Encrypted</p>
      <div class="flex w-full bg-slate-400 text-slate-600 h-[200px] rounded-sm p-[16px] font-mono">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import AppButton from "@/components/AppButton.vue";
import AppInput from '@/components/AppInput.vue';

const inputText = ref(undefined)

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
  label: {
    type: String,
    default: 'Your label'
  },
  name: {
    type: String
  },
  isEncrypted: {
    type: Boolean,
    default: false
  }
})
</script>
