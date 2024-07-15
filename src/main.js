import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import vuetify from '@/plugins/vuetify';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './index.css'
const app = createApp(App)
const pinia = createPinia()
const vuetify = createVuetify({
    components,
    directives,
  })

app.use(router)
app.use(pinia)
app.use(vuetify);

app.mount('#app')
