<template>
  <teleport to="body">
    <div class="h-[100px] w-full toastr fixed top-4 right-0 z-[9999] flex flex-col gap-3">
      <Transition name="toast" tag="div">
        <div class="px-[24px] py-3 rounded shadow-md text-black" :class="toastClass(type)">
          {{ message }}
        </div>
      </Transition>
    </div>
  </teleport>
</template>

<script setup>
import { useToaster } from '@/composables/useToaster'

const toastClass = (type) => {
  return {
    'bg-green-200 text-green-700': type === 'success',
    'bg-red-200 text-red-500': type === 'error',
    'bg-blue-200 text-blue-500': type === 'info'
  }
}

defineProps({
  message: {
    type: String
  },
  type: {
    type: String
  }
})
</script>

<style scoped>
.v-enter-active {
  opacity: 0;
  transform: translateY(-10px);
}
.v-leave-to {
  opacity: 1;
  transform: translateY(0);
}

.v-enter-from {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-active {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
