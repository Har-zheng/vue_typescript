import { createStore, Commit } from 'vuex'
import axios from 'axios'

interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId: number
}

// d定义图片类型
interface ImageProps {
  id?: string;
  url?: string
}
export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string
}
export interface PostProps {
  _id: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: string;
  createdAt: string;
  column: string;
}

export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps,
  loading: boolean
}
const getAndCommit = async (url: string, mutationName: string, commit: Commit) => {
  const { data } = await axios.get(url)
  commit(mutationName, data)
}
const postAndCommit = async (url: string, mutationName: string, commit: Commit, Payload: object) => {
  const { data } = await axios.post(url, Payload)
  commit(mutationName, data)
}
const store = createStore<GlobalDataProps>({
  state: {
    columns: [],
    posts: [],
    user: { isLogin: false, name: 'zhz', columnId: 1 },
    loading: false
  },
  mutations: {

    createPost(state, newPost) {
      state.posts.push(newPost)
    },
    fetchColumns(state, rowData) {
      state.columns = rowData.data.list
    },
    fetchColumn(state, rowData) {
      state.columns = [rowData.data]
    },
    fetchPosts(state, rowData) {
      state.posts = rowData.data.list
    },
    setloading(state, status) {
      state.loading = status
    },
    login(state, user) {
      state.user = user.data.user
    },
  },

  //  actions 支持异步提交数据
  actions: {
    fetchColumns({ commit }) {
      getAndCommit('/columns', 'fetchColumns', commit)
    },
    fetchColumn({ commit }, cid) {
      getAndCommit(`/columns/${cid}`, 'fetchColumn', commit)
    },
    fetchPosts({ commit }, cid) {
      getAndCommit(`/columns/${cid}/posts`, 'fetchPosts', commit)
    },
    login({ commit }, Payload) {
      postAndCommit(`/user/login`, 'login', commit, Payload)
    }
  },
  getters: {
    biggerColumnsLen(state) {
      return state.columns.filter(c => c['_id'] > '2').length
    },
    getColumnById: (state) => (id: string) => {
      return state.columns.find(c => c._id === id)
    },
    getPostByCId: (state) => (cid: string) => {
      return state.posts.filter(post => post.column === cid)
    }
  }
})
export default store