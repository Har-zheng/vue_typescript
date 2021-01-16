import { createRouter, createWebHistory } from 'vue-router'
const login = () => import('@/views/Login.vue')
const home = () => import('@/views/Home.vue')
// E:\web\vue\vue_ts\src\views\ColumnDetali\ColumDetail.vue
const column = () => import('@/views/ColumnDetali/ColumDetail.vue')
const CreatePost = () => import('@/views/CreatePost.vue')
const routerHandel = createWebHistory()
import store from '../store/store'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: { redirectAlreadyLogin: true }
  },
  {
    path: '/column/:id',
    name: 'column',
    component: column
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: CreatePost,
    meat: {
      reuiredLogin: true
    }
  }
]
const router = createRouter({
  history: routerHandel,
  routes
})
router.beforeEach((to, form, next) => {
  console.log(store.state.user.isLogin)
  const { user, token } = store.state
  console.log(to.meta.reuiredLogin && !user.isLogin)
  if (to.meta.reuiredLogin && !user.isLogin) {
    next({ name: 'login' })
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next({ name: '/' })
  } else {
    next()
  }
  console.log(to)
  console.log(form)

})
export default router
