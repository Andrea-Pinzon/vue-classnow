import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import './assets/app.css'

import 'bootstrap-vue';
import './assets/app.css'

createApp(App).use(router).mount('#app')
