import { ref } from 'vue'

export const toaster = ref({
  visible: false,
  message: '',
  type: 'info',
})

let timeout = null

export function useToaster() {
  function show(message, type = 'info', duration = 3000) {
    toaster.value = { visible: true, message, type }
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      toaster.value.visible = false
    }, duration)
  }

  function hide() {
    toaster.value.visible = false
    clearTimeout(timeout)
  }

  return {
    toaster,
    show,
    hide,
  }
}
