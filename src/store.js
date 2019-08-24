import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //存储的是属性
    count: 0,
    todos: [
      { id: 1, title: "todo item 1", completed: false },
      { id: 2, title: "todo item 2", completed: true },
      { id: 3, title: "todo item 3", completed: true }
    ]

  },
  getters: {
    count: state => state.count,
    // count(state) {
    //   return ++state.count
    // }
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    getTodosById: state => id => state.todos.find(todo => todo.id == id)
  },
  mutations: {
    incrementCount: state => state.count++,
    decrementCount: (state, num) => state.count -= num.amount,
    setTodos: (state, todos) => state.todos = todos
  },
  actions: {
    //解构  const {commit} = context.commit
    // object: {
    //   name: "lishuyu",
    //   age:12
    // }
    // const (name , age) = object
    //context = this.$store
    incrementCountAsync: context => {
      setTimeout(() => {
        context.commit("incrementCount")
      }, 2000)
    },
    decrementCountAsync: (context, num) => {
      setTimeout(() => {
        context.commit("decrementCount", num)
      }, 2000)

    },
    async fetchDataAsync(context) {
      //执行完 await 才会执行下一步 否则不会走
      const response = await axios.get("http://jsonplaceholder.typicode.com/todos");
      // console.log(response);
      context.commit("setTodos", response.data)

    }
    // fetchDataAsync: context => {
    //   axios.get("http://jsonplaceholder.typicode.com/todos").then(res => {
    //     console.log(res);
    //   });

    // }
  }
})
