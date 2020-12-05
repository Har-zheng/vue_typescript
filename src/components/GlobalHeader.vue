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
          <a class="btn btn-outline-lig" href="#">你好</a>
        </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: 'GlobalHeader',
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
