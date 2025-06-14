<script setup>
import { ref } from 'vue'
import AppButton from '@/components/AppButton.vue'
import AppForm from '@/components/AppForm.vue';
import CryptoJS from 'crypto-js'
import AppToaster from '@/components/AppToaster.vue'
import { useToaster } from '@/composables/useToaster'
//Static Vars
const logo = ('/planet_express_logo.svg')
const title = 'Hi there !'
const subtitle = 'Convert your text to AES Encryption'
const mySecret = 'turangaLeela'
const linkGH = 'https://github.com/Lariicsa/encrypt-vue'

//States
const inputText = ref('')
const encryptedText = ref('')
const isEncrypted = ref(false)

//Composable and externs
const { show } = useToaster()

const triggerSuccess = () => {
  show('Text encrypted ! 🥷', 'success', 3000)
}

function getEncrypted() {
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
const resetInput = () => {
  inputText.value = ''
  encryptedText.value = ''
  isEncrypted.value = false
}
</script>

<template>
  <div class="flex w-full h-fit mt-2">
    <div class="flex-col w-full max-w-[400px] sm:max-w-[480px] h-fit mx-auto">
      <AppForm :src="logo" :title="title" :subtitle="subtitle" label="your text" name="textToEncrypt"
        :isEncrypted="isEncrypted" :inputText="inputText" alt="Logo Planet Express" @click="getEncrypted"
        @copyEncrypted="copyEncrypted(encryptedText)" @resetInput="resetInput">
        {{ encryptedText }}
      </AppForm>
      <div class="mt-4">
        <AppButton :isLink="true" size="md" color="blue" :href="linkGH">Check out code on Github <font-awesome-icon
            icon="fa-brands fa-github" class="ml-4" /></AppButton>

      </div>
    </div>
    <AppToaster />
  </div>
</template>
