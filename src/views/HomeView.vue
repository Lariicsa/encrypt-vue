<script setup>
import AppForm from '@/components/AppForm.vue';

const logo = ('../../public/planet_express_logo.svg')
</script>

<template>

  <div class="flex w-full h-auto">
      <AppForm :src="logo" />
  </div>

</template>
