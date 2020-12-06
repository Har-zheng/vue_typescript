<template>
  <nav
    class="navbar navbar-dark bg-primary justify-content-between md-4 mb-3"
    style="background-color: #e3f2fd"
  >
    <!-- Navbar content -->
    <a href="#" class="navbar-brand">者也专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
       <li class="list-inline-item nav-item">
          <a class="btn btn-outline-success" href="#">Pricing</a>
        </li>
    </ul>
    <ul v-else class="list-inline mb-0">
       <li class="list-inline-item nav-item">
         <dropdown :title="`你好 ${ user.name }`">
           <DropdownItem><a href="#" class="dropdown-item"> 新建文章 </a></DropdownItem>
           <DropdownItem><a href="#" class="dropdown-item"> 编辑资料 </a></DropdownItem>
           <DropdownItem><a href="#" class="dropdown-item"> 退出登录 </a></DropdownItem>
         </dropdown>
        </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    dropdown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>

<style>
</style>
