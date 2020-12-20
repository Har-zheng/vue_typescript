import { createApp } from 'vue'
import App from './App.vue'
import router from './route/router'
import { createStore } from 'vuex'
const store = createStore({
  state: {
    count:0
  },
  mutations: {
    add(state){
      state.count++
    }
  }
})
store.commit('add')
console.log('store', store.state.count)
createApp(App).use(router).mount('#app')
