<template>
   <ValidateFrom @from-submit="onFromSumit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <ValidateInput
          placeholder="hello"
          :rules="emailRules"
          v-model="emailVal"
        ></ValidateInput>
        {{ emailVal }}
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <ValidateInput
          type="password"
          class="form-control"
          placeholder="请输入密码"
          :rules="passwordRules"
          v-model="passwordVal"
          id="exampleInputPassword1"
        />
        {{ passwordVal }}
      </div>
      <template #submit>
        <span class="btn btn-danger" >Submit</span>
      </template>
   </ValidateFrom>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateFrom from '../components/ValidateFrom.vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    ValidateInput,
    ValidateFrom
  },
  setup () {
    const emailVal = ref('123@qq.com')
    const passwordVal = ref(123)
    // 正则表达式邮箱验证失败时触发的提醒
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱' }
    ]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' },
      { type: 'password', message: '密码不能小于6位数' }
    ]
    const router = useRouter()
    const onFromSumit = (result: boolean) => {
      if (result) {
        router.push({ name: 'column', params: { id: 1 } })
      }
    }
    return {
      emailVal,
      passwordVal,
      emailRules,
      passwordRules,
      onFromSumit
    }
  }

})
</script>

<style>

</style>
