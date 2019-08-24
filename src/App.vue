<template>
  <div id="app">
    <!-- mutations -->
    <button @click="decrementCount({amount:2})">-</button>
    <span>{{count}}</span>
    <button @click="incrementCount">+</button>

    <hr />
    <!-- <Count /> -->
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "app",
  components: { Count },
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ]),
  methods: mapMutations(["incrementCount", "decrementCount"])
  // methods: {
  //   increment() {
  //     //调用mutations 里的 incrementCount
  //     this.$store.commit("incrementCount");
  //   },
  //   decrement(num) {
  //     this.$store.commit("decrementCount", num);
  //   }
  // }
};
</script>

<style>
</style>
