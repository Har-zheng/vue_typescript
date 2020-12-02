<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  <h1>{{ count }}</h1>
  <h1>{{ double }}</h1>
  <ul>
    <li v-for="number of numbers" :key="number">
      <h1>{{ number }}</h1>
    </li>
  </ul>
  <h1>X: {{ x }} Y: {{ y }}</h1>
  <h1>{{ person.name }}</h1>
  <h1 v-if="loading">Loading!.....</h1>
  <img v-else :src="result[0].url" />
  <button @click="increase">测试TS</button>
  <h1>{{ greetings }}</h1>
  <button @click="updateGreeting">测试TS</button>
  <model></model>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
import model from "./components/model.vue";

// export default defineComponent({
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// });
//   ref,
import {
  ref,
  computed,
  reactive,
  toRefs,
  onMounted,
  onUpdated,
  onRenderTriggered,
  watch,
} from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useURLLoader from "./hooks/useURLLoader";
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: { name?: string };
}
// interface DogResult {
//   message: string;
//   status: string;
// }
interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}
export default {
  name: "APP",
  components: {
    model,
  },
  setup() {
    // const count = ref(0)
    // const double = computed(()=> {
    //   return count.value *2
    // })
    // const increase = () => {
    //   count.value++
    // }

    onMounted(() => {
      console.log("onMounted");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    // 新增api onRenderTriggered  记录哪些值重新render之后发生了变化
    onRenderTriggered((event) => {
      console.log(event);
    });
    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => data.count * 2),
      numbers: [1, 2, 3],
      person: {},
    });
    data.numbers[0] = 5;
    data.person.name = "zhz";
    const greetings = ref("");
    const updateGreeting = () => {
      greetings.value += "Hello";
    };
    const { x, y } = useMousePosition();
    //  api_key=3993eab7-83e1-49ff-b965-ccfe97caca10
    // const { result, loading, loaded, error } = useURLLoader<DogResult>(
    //   "https://dog.ceo/api/breeds/image/random"
    // );
    const { result, loading, loaded, error } = useURLLoader<CatResult[]>(
      "https://api.thecatapi.com/v1/images/search"
    );
    watch(result, () => {
      if (result.value) {
        console.log(result.value[0].url);
        console.log(result.value[0].url);
      }
    });
    watch([greetings, () => data.count], (newValue, oldVaue) => {
      console.log(newValue, oldVaue);
      document.title = "update" + greetings.value;
    });

    const refData = toRefs(data);
    return {
      ...refData,
      greetings,
      updateGreeting,
      x,
      y,
      result,
      loading,
      loaded,
      error,
    };
  },
};
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
