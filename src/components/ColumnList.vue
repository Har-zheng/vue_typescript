<template>
  <div class="row">
    <div v-for="column of columnList" :key="column._id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img width="200" :src="column.avatar &&  column.avatar.url" :alt="column.title" class="rounded-circle border border-right w-25 my-3" />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <!-- 支持两种写法  使用path 模板字符串进行变量 -->
          <router-link :to="{ name: 'column', params: {id:column._id } } " class="btn btn-outline-primary"> 进入专栏 </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ColumnProps } from '../store/store'

export default defineComponent({
  name: 'ColumnLsit',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = {
            url: require('@/assets/logo.png')
          }
        } else {
          column.avatar.url = column.avatar.url + '?x-oss-process=image/resize,m_pad,h_50,w_50'
        }
        return column
      })
    })
    return { columnList }
  }
})
</script>

<style>
</style>
