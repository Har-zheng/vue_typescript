<template>
  <div class="container">
    <GlobalHeader :user="currentUser"></GlobalHeader>
   <ValidateFrom @from-submit="onFromSumit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <ValidateInput
          placeholder="hello"
          :rules="emailRules"
          v-model="emailVal"
          ref='inputRef'
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
      </div>
      <template #submit>
        <span class="btn btn-danger" >Submit</span>
      </template>
   </ValidateFrom>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
import ValidateFrom from './components/ValidateFrom.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
const currentUser: UserProps = {
  isLogin: true,
  name: 'zhz'
}
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这里是专栏一 ，一个有趣的简介',
    avatar: 'https://images.dog.ceo/breeds/maltese/n02085936_10073.jpg'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这里是专栏二 ，一个有趣的简介',
    avatar: 'https://images.dog.ceo/breeds/maltese/n02085936_10073.jpg'
  },
  {
    id: 2,
    title: 'test3的专栏',
    description: '这里是专栏二 ，一个有趣的简介'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这里是专栏二 ，一个有趣的简介',
    avatar: 'https://images.dog.ceo/breeds/maltese/n02085936_10073.jpg'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这里是专栏二 ，一个有趣的简介',
    avatar: 'https://images.dog.ceo/breeds/maltese/n02085936_10073.jpg'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateFrom
  },
  setup () {
    const inputRef = ref<any>()
    const emailVal = ref('123@qq.com')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱' }
    ]
    const passwordVal = ref(123)
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const onFromSumit = (e: boolean) => {
      console.log(inputRef.value.validateInput())

      console.log(e)
    }
    const validateEmail = () => {
      console.log('123')
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'can not empty'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = 'should be valid email'
      }
    }
    return {
      list: testData,
      currentUser,
      emailRef,
      validateEmail,
      emailRules,
      emailVal,
      onFromSumit,
      inputRef,
      passwordVal
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
