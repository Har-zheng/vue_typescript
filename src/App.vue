<template>
  <div class="container">
    <GlobalHeader :user="currentUser"></GlobalHeader>
    <Loader v-if="isLoading"  text="正在加载中" background="rgba(0,0,0, 0.8)" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from 'vuex'
import Loader from './components/Loader.vue'

// const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Loader
  },
  setup () {
    const inputRef = ref('123')
    const store = useStore()
    const currentUser = computed(() => store.state.user)
    const isLoading = computed(() => store.state.loading)
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const onFromSumit = (e: boolean) => {
      // console.log(inputRef.value.validateInput())
    }
    return {
      currentUser,
      emailRef,
      onFromSumit,
      inputRef,
      isLoading
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
