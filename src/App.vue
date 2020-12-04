<template>
  <div class="container">
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这里是专栏一 ，一个有趣的简介",
    avatar: "https://images.dog.ceo/breeds/maltese/n02085936_10073.jpg",
  },
  {
    id: 1,
    title: "test2的专栏",
    description: "这里是专栏二 ，一个有趣的简介",
    avatar: "https://images.dog.ceo/breeds/maltese/n02085936_10073.jpg",
  },
];
export default defineComponent({
  name: "App",
  components: {
    ColumnList,
  },
  setup() {
    return {
      list: testData,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
