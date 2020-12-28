import { createStore } from 'vuex'
import axios from 'axios'
import { testData, testPosts, PostProps, ColumnProps } from '../views/testDatas'

interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId: number
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps
}
const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false, name: 'zhz', columnId: 1 }
  },
  mutations: {
    login(state) {
      state.user = { isLogin: true, name: 'zhz', columnId: 1 }
    },
    createPost(state, newPost) {
      state.posts.push(newPost)
    },
    feachColumns(state, rowData) {
      state.columns = rowData.data.list
    }
  },
  actions: {
    fetchColumns(context) {
      axios.get('/columns').then(res => {
        context.commit('feachColumns', res.data)
      })
    }
  },
  getters: {
    biggerColumnsLen(state) {
      return state.columns.filter(c => c.id > 2).length
    },
    getColumnById: (state) => (id: number) => {
      return state.columns.find(c => c.id === id)
    },
    getPostByCId: (state) => (cid: number) => {
      return state.posts.filter(post => post.columnId === cid)
    }
  }
})
export default store