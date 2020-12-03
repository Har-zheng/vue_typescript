<template>
  <teleport to="#model">
    <div class="model" v-if="isOpen">
      <div > 
      <p>测试啊啊啊啊</p>
      <button @click="clickBtnClose">Close</button>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    isOpen: Boolean,
  },
  emits: {
    "close-modle": null,
  },
  setup(props, context) {
    const clickBtnClose = () => {
      // close-model
      context.emit("close-modle");
    };
    return {
      clickBtnClose,
    };
  },
});
</script>

<style>
.model {
  width: 200px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: aquamarine;
}
</style>