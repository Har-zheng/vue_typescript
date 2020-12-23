<template>
  <div class="create-post-page">
    <ValidateFrom @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题：</label>
        <validate-input
          :rules="titleRules"
          v-model="titleVal"
          placeholder="请输入文章标题"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情：</label>
        <validate-input
          rows="10"
          tag="textarea"
          placeholder="请输入文章详情"
          :rules="contentRules"
          v-model="contentVal"
        />
      </div>
      <template #submit>
        <button @click="handleCreate" class="btn btn-primary btn-large">
          发表文章
          <!-- {{ isEditMode ? "更新文章" : "发表文章" }} -->
        </button>
      </template>
    </ValidateFrom>
  </div>
</template>

<script lang='ts'>
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateFrom from '../components/ValidateFrom.vue'
import { defineComponent, ref } from 'vue'
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
    const router = useRouter()
    const store = useStore<GlobalDataProps>()
    const isEditMode = ref(false)
    console.log(props)
    const handleCreate = (result: boolean) => {
      if (result) {
        const { columnId } = store.state.user

        const newPost: PostProps = {
          id: new Date().getTime(),
          columnId: columnId,
          title: titleVal.value,
          content: contentVal.value,
          createdAt: new Date().toLocaleString()
        }
        store.commit('createPost', newPost)
        router.push({ name: 'column', params: { id: columnId } })
      }
    }
    // 验证规则的使用   RulesProp 在组件中已经定义集合的类型
    const titleRules: RulesProp = [
      { type: 'required', message: '文章标题的内容不能为空' }
    ]
    const contentRules: RulesProp = [
      { type: 'required', message: '文章内容不能为空哦' }
    ]
    return {
      isEditMode,
      handleCreate,
      titleVal,
      contentVal,
      contentRules,
      titleRules
    }
  }
})
</script>

<style>
</style>
