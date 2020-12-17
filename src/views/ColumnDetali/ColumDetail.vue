<template>
<pre>{{ route }}</pre>
</template>

<script lang='ts'>
// 包裹组件
import { defineComponent } from 'vue'
// 路由
import { useRoute } from 'vue-router'
export default defineComponent({
  setup () {
    const route = useRoute()
    return {
      route
    }
  }
})
</script>

<style>

</style>
