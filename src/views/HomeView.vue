<script setup>
import { ref, inject } from 'vue'
import AppForm from '@/components/AppForm.vue';
import CryptoJS from 'crypto-js'
import AppToaster from '@/components/AppToaster.vue'
import { useToaster } from '@/composables/useToaster'

const logo = ('/planet_express_logo.svg')
const title = 'Hi there !'
const subtitle = 'Convert your text to AES Encryption'
const cryoptojs = inject('cryptojs')
const inputText = ref(undefined)
const encryptedText = ref(undefined)
const mySecret = 'turangaLeela'
const isEncrypted = ref(false)

const { show } = useToaster()

function triggerSuccess() {
  show('Text encrypted ! 🥷', 'success', 3000)
}

function getEncrypted() {
  encryptedText.value = CryptoJS.AES.encrypt(inputText.value, mySecret).toString()
  isEncrypted.value = true
  triggerSuccess()
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
  <AppToaster/>
</template>
