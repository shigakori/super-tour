import './assets/style/general.scss'

import { createApp } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css';
import { createPinia } from 'pinia'
import App from './App.vue'
import store from './store'
import router from './routes'
import BtnMore from './components/UI/BtnMore.vue'


const pinia = createPinia()

createApp(App).use(router).use(pinia).use(store).mount('#app').component('BtnMore', BtnMore)
