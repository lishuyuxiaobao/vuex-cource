<template>
  <div id="app">
    <h1>{{count}}</h1>
    {{todos}}
    <hr />
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
import { mapState } from "vuex";
export default {
  name: "app",
  components: { Count },
  // 写法三
  computed: mapState(["count", "todos"])

  // 写法二
  // computed: mapState({
  //   count: state => state.count,
  //   // count: function(state) {
  //   //   return state.count;
  //   // },
  //   todos: state => state.todos
  // })

  // 写法一
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   }
  // }
};
</script>

<style>
</style>
