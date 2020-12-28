<template>
    <ColumnList :list="list"></ColumnList>
</template>

<script lang="ts">
import { GlobalDataProps } from '@/store/store'
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import ColumnList from '../components/ColumnList.vue'

export default defineComponent({
  name: 'App',
  components: {
    ColumnList
  },
  setup () {
    // 泛型 GlobalDataProps
    const store = useStore<GlobalDataProps>()

    onMounted(() => {
      store.dispatch('fetchColumns')
    })
    const list = computed(() => store.state.columns)
    const biggerColumnsLen = computed(() => store.getters.biggerColumnsLen)
    return {
      list,
      biggerColumnsLen
    }
  }
})
</script>
