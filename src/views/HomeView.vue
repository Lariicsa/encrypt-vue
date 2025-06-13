<script setup>
import AppForm from '@/components/AppForm.vue';

const logo = ('/planet_express_logo.svg')
const title = 'Hi there !'
const subtitle = 'Convert your text to RSA/ECB/PKCS1Padding encoding UTF-8'
</script>

<template>

  <div class="flex w-full h-fit">
    <div class="flex w-full mt-[32px] h-full">
        <AppForm :src="logo" :title="title" :subtitle="subtitle" label="your text" name="textToEncrypt" alt="Logo Planet Express">
        </AppForm>
    </div>
  </div>

</template>
