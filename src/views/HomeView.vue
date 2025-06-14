<script setup>
import { ref, inject } from 'vue'
import AppForm from '@/components/AppForm.vue';
import CryptoJS from 'crypto-js'
import AppToaster from '@/components/AppToaster.vue'
import { useToaster } from '@/composables/useToaster'
//Static Vars
const logo = ('/planet_express_logo.svg')
const title = 'Hi there !'
const subtitle = 'Convert your text to AES Encryption'
const mySecret = 'turangaLeela'

//States
const inputText = ref(undefined)
const encryptedText = ref(undefined)
const isEncrypted = ref(false)

//Composable and externs
const { show } = useToaster()

const triggerSuccess = () => {
  show('Text encrypted ! 🥷', 'success', 3000)
}

function getEncrypted() {
  if (!inputText.value) return
  encryptedText.value = CryptoJS.AES.encrypt(inputText.value, mySecret).toString()
  isEncrypted.value = true
  triggerSuccess()
}

const copyEncrypted = async (text) => {
  try {
    navigator.clipboard.writeText(text);
    show('Copied to clipboard! 📋', 'info', 2000)
  } catch (err) {
    show(`Ups, not copied! ${err}`, 'error', 2000)
  }
}
</script>

<template>
  <div class="flex w-full h-fit mt-8">
    <AppForm :src="logo" :title="title" :subtitle="subtitle" label="your text" name="textToEncrypt"
      :isEncrypted="isEncrypted" :inputText="inputText" alt="Logo Planet Express" @click="getEncrypted"
      @copyEncrypted="() => copyEncrypted(encryptedText)">
      {{ encryptedText }}
    </AppForm>
    <AppToaster />
  </div>
</template>
