<template>
  <div id="count">
    {{count}}
    {{todos}}
  </div>
</template>

<script>
export default {
  name: "Count",
  components: {},
  computed: {
    count() {
      return this.$store.state.count;
    },
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>

<style scoped>
</style>