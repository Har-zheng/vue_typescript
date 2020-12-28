import { createApp } from 'vue'
import App from './App.vue'
import router from './route/router'
import store from './store/store'
import axios from 'axios'
// http://api.vikingship.xyz/api/columns
axios.defaults.baseURL = 'http://api.vikingship.xyz/api'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
