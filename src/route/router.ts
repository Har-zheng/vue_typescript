import { createRouter, createWebHistory } from 'vue-router'
const login = () => import('@/views/Login.vue')
const home = () => import('@/views/Home.vue')
// E:\web\vue\vue_ts\src\views\ColumnDetali\ColumDetail.vue
const column = () => import('@/views/ColumnDetali/ColumDetail.vue')
const routerHandel = createWebHistory()
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
    component: login
  },
  {
    path: '/column/:id',
    name: 'column',
    component: column
  }
]
const router = createRouter({
  history: routerHandel,
  routes
})
export default router
