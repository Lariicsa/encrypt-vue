<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex relative w-full justify-center items-center min-w-[374px]">
    <div class="flex relative w-full max-w-[980px]">
      <RouterView />
    </div>
  </div>

</template>
