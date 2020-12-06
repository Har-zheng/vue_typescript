<template>
  <li class="dropdown-option" :class="{ 'is-disabled': disabled }">
    <slot></slot>
  </li>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped>
.dropdown-option .is-disabled {
  colo: #fff;
  pointer-events: none;
  background-color: transparent;
}
</style>
