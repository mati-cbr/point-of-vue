import './assets/main.css'
import 'vuetify/styles'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify';
import { router } from './router/router.ts'

const app = createApp(App)

const vuetify = createVuetify()
const pinia = createPinia()
app.use(router)

app.use(pinia)
app.use(vuetify)
app.mount('#app')
