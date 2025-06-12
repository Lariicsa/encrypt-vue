<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex relative w-full h-dvh sm:h-screen justify-center min-w-[368px] bg-slate-400">
    <div class="flex relative w-full max-w-[980px]">
      <RouterView />
    </div>
  </div>

</template>
