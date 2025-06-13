<script setup>
import { computed } from "vue";
const color = computed(() => {
  return {
    peach: "bg-gradient-to-r from-[#F89E7B] to-[#F58C64] text-[#373737]",
    pink: "bg-gradient-to-r from-[#E5A9B7] to-[#CDA9E5] text-[#373737]",
    blue: "bg-[#81B2F6] text-white",
    disabled: "bg-slate-600 sm:hover:bg-slate-600 cursor-none active:bg-slate-600 sm:hover:bg-slate-600"
  }[props.color];
});

const size = computed(() => {
  return {
    lg: "h-[72px] w-full px-[16px] md:px-[32px] sm:px-[48px] text-[22px] sm:text-[32px]",
    md: "h-[48px] w-full px-[14px] sm:px-[40px] text-[18px] sm:text-[24px]",
    sm: "h-[24px] w-auto px-[12px] text-[14px]",
  }[props.size];
});

const props = defineProps({
  color: {
    type: String,
    default: "peach",
  },
  size: {
    type: String,
    default: "lg",
  },
  isLink: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    default: "/",
  },
  to: {
    type: [String, Object],
    default: "home",
  },
  isRoute: {
    type: Boolean,
    default: false,
  },
  disabled:{
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['click'])

const click = () => {
  emit('click')
}
</script>
<template>
  <a v-if="isLink" :href="link" target="_blank"
    class="flex flex-col justify-center items-center border-none rounded-md text-center" role="button"
    :class="`${color} ${size}`">
    <slot></slot>
  </a>

  <button v-else role="button" @click="click()" class="flex flex-col justify-center items-center border-none rounded-md"
    :class="`${color} ${size}`" :disabled="disabled">
    <slot></slot>
  </button>
</template>
