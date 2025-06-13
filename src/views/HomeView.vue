<script setup>
import { ref, inject, computed } from 'vue'
import AppForm from '@/components/AppForm.vue';
import CryptoJS from 'crypto-js'

const logo = ('/planet_express_logo.svg')
const title = 'Hi there !'
const subtitle = 'Convert your text to AES Encryption'
const cryoptojs = inject('cryptojs')
const inputText = ref(undefined)
const encryptedText = ref(undefined)
const mySecret = 'turangaLeela'
const isEncrypted = ref(false)
const textValue = computed(() => {
  return inputText.value
})

function getEncrypted() {
  encryptedText.value = CryptoJS.AES.encrypt(inputText.value, mySecret).toString()
  isEncrypted.value = true
}

function copyEncrypted(text) {
  navigator.clipboard.writeText(text);
}
</script>

<template>

  <div class="flex w-full h-fit">
    <div class="flex w-full mt-[32px] h-full">
      <AppForm :src="logo" :title="title" :subtitle="subtitle" label="your text" name="textToEncrypt"
        :isEncrypted="isEncrypted" @click="getEncrypted()" :inputText="inputText" alt="Logo Planet Express"
        @copyEncrypted="copyEncrypted(encryptedText)">
        {{ encryptedText }}
      </AppForm>
    </div>
  </div>

</template>
