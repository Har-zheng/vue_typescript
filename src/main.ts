import { createApp } from 'vue'
import App from './App.vue'
import router from './route/router'
import store from './store/store'
import axios from 'axios'
// http://api.vikingship.xyz/api/columns
axios.defaults.baseURL = 'http://localhost:3000/v1/book'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
