<template>
  <teleport to="body">
    <Transition name="fade">
      <div v-if="toaster.visible" class="fixed top-6 right-3 px-4 py-3 rounded shadow-lg z-50"
        :class="toastColor">
        {{ toaster.message }}
      </div>
    </Transition>
  </teleport>
</template>

<script setup>
import { computed } from 'vue'
import { toaster } from '@/composables/useToaster'

const toastColor = computed(() => {
  switch (toaster.value.type) {
    case 'success':
      return 'bg-green-200 text-green-700'
    case 'error':
      return 'bg-red-200 text-red-500'
    default:
      return 'bg-blue-200 text-blue-500'
  }
})
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
