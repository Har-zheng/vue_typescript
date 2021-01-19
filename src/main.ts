import { createApp } from 'vue'
import App from './App.vue'
import router from './route/router'
import store from './store/store'
import axios from 'axios'
// http://api.vikingship.xyz/api/columns
axios.defaults.baseURL = 'http://localhost:3000/v1/book'
axios.interceptors.request.use(config => {
  store.commit('setError', { status: false, message: '' })
  store.commit('setloading', true)
  return config
})
axios.interceptors.response.use(config => {
  setTimeout(function () {
    store.commit('setloading', false)
  }, 1000)
  return config
}, e => {
  console.log(e.response)
  const { error } = e.response.data
  store.commit('setError', { status: true, message: error })
  store.commit('setloading', false)
  return Promise.reject(error)
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
