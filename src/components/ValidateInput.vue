<template>
  <div class="validate-input-container pb-3">
    <input type="text" class="form-control" :class="{ 'is-invalid': inputRef.error }"
    :value="inputRef.val"
    @input="updateValue"
    v-bind="$attrs"
    >
    <span v-if="inputRef.error" class="invalid-feedback"> {{ inputRef.message }} </span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, PropType, onMounted } from 'vue'
import { emitter } from './ValidateFrom.vue'
interface RuleProp {
  type: 'required' | 'email';
  message: string;
}
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
export type RulesProp = RuleProp[]
export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  inheritAttrs: false,
  setup (props, context) {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }
    onMounted(() => {
      emitter.emit('from-item-created', inputRef.val)
    })
    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>

<style>

</style>
