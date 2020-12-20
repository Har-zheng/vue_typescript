<template>
<PostList :list="list" />
<pre>{{ route }}</pre>

</template>

<script lang='ts'>
// 包裹组件
import { defineComponent } from 'vue'
// 路由
import { useRoute } from 'vue-router'
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
    const column = testData.find(c => c.id === currentId)
    const list = testPosts.filter(post => post.columnId === currentId)

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
