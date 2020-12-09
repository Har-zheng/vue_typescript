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
import mitt from 'mitt'
export const emitter = mitt()
export default defineComponent({

  emits: ['from-submit'],
  setup (props, context) {
    const submitFrom = () => {
      context.emit('from-submit', true)
    }
    const callback = (test: string) => {
      console.log(test)
    }
    emitter.on('from-item-created', callback)
    onUnmounted(() => {
      emitter.off('from-item-created', callback)
    })
    return {
      submitFrom
    }
  }

})
</script>

<style>
</style>
