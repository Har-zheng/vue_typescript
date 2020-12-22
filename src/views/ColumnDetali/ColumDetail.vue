<template>
<PostList :list="list" />
<pre>{{ route }}</pre>

</template>

<script lang='ts'>
// 包裹组件
import { computed, defineComponent } from 'vue'
// 路由
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
// 导入测试数据
import { testData, testPosts } from '../testDatas'
// 导入组件
import PostList from './PostList.vue'
export default defineComponent({
  components: {
    PostList
  },
  setup () {
    const route = useRoute()
    const currentId = +route.params.id
    const store = useStore()
    const column = computed(() => store.getters.getColumnById(currentId))
    const list = computed(() => store.getters.getPostByCId(currentId))

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
