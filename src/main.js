import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCryptojs from 'vue-cryptojs'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueCryptojs)

app.mount('#app')
