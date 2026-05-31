import { createApp, onMounted } from 'vue'
import App from './App.vue'
import Aos from 'aos'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'
Aos.init()

createApp(App).mount('#app')
