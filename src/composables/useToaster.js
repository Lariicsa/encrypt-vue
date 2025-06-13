import { ref } from "vue";

let id = 0;
const toastr = ref([]);

export function useToaster() {
  const show = true

  return {
    toastr,
    isSuccess: (msg, duration) => show(msg, "success !", duration),
    isError: (msg, duration) => show(msg, "error", duration),
    isInfo: (msg, duration) => show(msg, "info", duration),
  };
}
