<template>
  <form class="validate-form-container">
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
// 定义一个类型
type ValidateFunc = () => boolean
export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    let funcArr: ValidateFunc[] = []
    const submitFrom = () => {
      //  提前停止循环
      // 1.将funcArr的数组中的函数使用map调用返回一个布尔值的数组
      // 2.使用every测试这个数组中所有元素是否通过(true)，全部通过则返回true，只要有一个不通过则返回false
      const result = funcArr.map(func => func()).every(result => result)
      // 返回验证结果
      context.emit('form-submit', result)
    }
    // 对接收过来的函数进行处理，传进来的都是函数
    const callback = (func?: ValidateFunc) => {
      if (func) funcArr.push(func)
    }
    // 添加到监听器中
    const f = 'form-item-created'
    emitter.on(f, callback)
    onUnmounted(() => {
      // 关闭监听器
      emitter.off(f, callback)
      funcArr = []
    })
    return {
      submitFrom
    }
  }

})
</script>

<style>
</style>
