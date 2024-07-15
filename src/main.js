import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import './index.css'
import 'ant-design-vue/dist/reset.css';
const app = createApp(App)
const pinia = createPinia()


app.use(router)
app.use(pinia)
app.use(Antd)



app.mount('#app')
