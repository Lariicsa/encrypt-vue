<script setup>
import { ref, inject } from 'vue'
import AppForm from '@/components/AppForm.vue';
import CryptoJS from 'crypto-js'

const logo = ('/planet_express_logo.svg')
const title = 'Hi there !'
const subtitle = 'Convert your text to RSA/ECB/PKCS1Padding encoding UTF-8'
const cryoptojs = inject('cryptojs')
const inputText = ref(undefined)
const encryptedText = ref(undefined)
const mySecret = 'turangaLeela'

function getEncrypted() {
  encryptedText.value = CryptoJS.AES.encrypt(inputText.value, mySecret).toString()
}
</script>

<template>

  <div class="flex w-full h-fit">
    <div class="flex w-full mt-[32px] h-full">
      <AppForm :src="logo" :title="title" :subtitle="subtitle" label="your text" name="textToEncrypt"
        @click="getEncrypted()" :inputText="inputText" alt="Logo Planet Express">
        {{ encryptedText }}
      </AppForm>
    </div>
  </div>

</template>
