<template>
  <div class="create-post-page">
    <ValidateFrom @from-submit="handleCreate">
      <div class="mb-3">
        <label for="exampleInputTitleVal" class="form-label">文章标题：</label>
        <ValidateInput
          :rules="titleRules"
          v-model="titleVal"
          placeholder="请输入文章标题"
        ></ValidateInput>
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情：</label>
        <ValidateInput
          rows="10"
          tag="textarea"
          placeholder="请输入文章详情"
          :rules="contentRules"
          v-model="contentVal"
        />
      </div>
      <template #submit>
        <button class="btn btn-primary btn-large">
          发表文章
        </button>
      </template>
    </ValidateFrom>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateFrom from '../components/ValidateFrom.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store/store'
import { PostProps } from '../views/testDatas'

export default defineComponent({
  components: {
    ValidateInput,
    ValidateFrom
  },
  setup (props) {
    const titleVal = ref('')
    const contentVal = ref('')
    const emailVal = ref('123@qq.com')

    // 验证规则的使用   RulesProp 在组件中已经定义集合的类型
    // 记录错误原因    没有在组件中返回查找错误的类型
    const titleRules: RulesProp = [
      { type: 'required', message: '电子邮箱不能为空' }
    ]
    const contentRules: RulesProp = [
      { type: 'required', message: '文章内容不能为空哦' }
    ]
    // const router = useRouter()
    const store = useStore<GlobalDataProps>()
    const isEditMode = ref(false)
    console.log(props)
    const handleCreate = (result: boolean) => {
      console.log(result)
      if (result) {
        const { columnId } = store.state.user
        console.log(store.state.user)

        const newPost: PostProps = {
          id: new Date().getTime(),
          columnId,
          title: titleVal.value,
          content: contentVal.value,
          createdAt: new Date().toLocaleString()
        }
        store.commit('createPost', newPost)
        console.log(newPost)
        // router.push({ name: 'column', params: { id: columnId } })
      }
    }

    return {
      isEditMode,
      titleVal,
      contentVal,
      contentRules,
      titleRules,
      handleCreate,
      emailVal
    }
  }
})
</script>

<style>
</style>
