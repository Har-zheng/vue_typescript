<template>
  <form>
    <slot name="default"></slot>
    <div class="sunmit-area"  @click.passive="submitFrom">
      <slot name="submit">
        <button type="sunmit" class="btn btn-primary"  > 提交 </button>
      </slot>
    </div>
  </form>
</template>

<script lang='ts'>
import { defineComponent, onUnmounted } from 'vue'
// 借助mitt  进行事件监听
import mitt from 'mitt'
export const emitter = mitt()
export default defineComponent({
  emits: ['from-submit'],
  setup (props, context) {
    const submitFrom = () => {
      context.emit('from-submit', true)
    }
    // 对接收过来的函数进行处理，传进来的都是函数
    const callback = (test: any) => {
      console.log(test)
    }
    // 添加到监听器中
    const f = 'form-item-created'
    emitter.on(f, callback)
    onUnmounted(() => {
      // 关闭监听器
      emitter.off(f, callback)
    })
    return {
      submitFrom
    }
  }

})
</script>

<style>
</style>
