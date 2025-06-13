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
    <form @submit.prevent novalidate class="w-full h-full flex-col justify-center items-center mt-[48px]">
      <AppInput v-model="inputText" :label="label" :name="name" />
      <AppButton :color="inputText === undefined ? 'disabled' : 'peach'" size="md" class="mt-[24px]"
        :disabled="inputText === undefined" @click="click">
        Encript
      </AppButton>
    </form>
    <div class="flex-col w-full justify-center items-center mt-[54px] h-auto">
      <p :class="isEncrypted ? 'text-green-300' : 'text-yellow-200'" class="mb-[3px]">Text Encrypted</p>
      <div
        class="flex relative w-full bg-slate-400 text-slate-600 h-[200px] break-all rounded-sm px-[16px] pt-[42px] pb-[16px] font-mono"
        aria-label="text encrypted">
        <font-awesome-icon icon="fa-regular fa-copy" @click="copyEncrypted" v-show="isEncrypted"
          class="ml-auto w-[20px] h-[20px] text-slate-500 sm:hover:text-slate-600 absolute top-[12px] right-[12px] activate:text-slate-600 sm:hover:cursor-pointer" />
        <slot v-if="isEncrypted"></slot>
        <div v-else class="flex justify-center items-center w-full h-full">
          <font-awesome-icon icon="fa-regular fa-file" class="w-8 h-10 text-slate-500" />
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineEmits } from 'vue'
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
  },
})
const emit = defineEmits(['click', 'copyEncrypted'])

const click = () => {
  emit('click')
}
const copyEncrypted = () => {
  emit("copyEncrypted");
}
</script>
