<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column">
      <div class="col-3 text-center">
        <img :src="column.avatar && column.avatar.url" :alt="column.title" class="rounded-circle border w-100">
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang='ts'>
// 包裹组件
import { computed, defineComponent, onMounted } from 'vue'
// 路由
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
// 导入测试数据
// import { testData, testPosts } from '../testDatas'
// 导入组件
import PostList from './PostList.vue'
export default defineComponent({
  components: {
    PostList
  },
  setup () {
    const route = useRoute()
    const currentId = route.params.id
    const store = useStore()
    const column = computed(() => store.getters.getColumnById(currentId))
    const list = computed(() => store.getters.getPostByCId(currentId))
    onMounted(() => {
      store.dispatch('fetchColumn', currentId)
      store.dispatch('fetchPosts', currentId)
    })
    return {
      column,
      list,
      route
    }
  }
})
</script>

<style>

</style>
