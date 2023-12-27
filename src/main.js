import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadFonts } from './plugins/webfontloader'
import Antd from 'ant-design-vue';
import Vuex from 'vuex'

loadFonts()

createApp(App)
  .use(router)
  .use(Antd)
  .use(Vuex)
  .mount('#app')
