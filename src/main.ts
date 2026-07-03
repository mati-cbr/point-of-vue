import './assets/main.css'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router/router.ts'

const app = createApp(App)
app.use(router)
const pinia = createPinia()
app.use(pinia)
app.mount('#app')
