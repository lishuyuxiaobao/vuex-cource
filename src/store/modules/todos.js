const state = {
    todos: [
        { id: 1, title: "todo item 1", completed: false },
        { id: 2, title: "todo item 2", completed: true },
        { id: 3, title: "todo item 3", completed: true }
    ]
};
const getters = {
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    getTodosById: state => id => state.todos.find(todo => todo.id == id)
};
const mutations = {
    setTodos: (state, todos) => state.todos = todos
};
const actions = {
    async fetchDataAsync(context) {
        //执行完 await 才会执行下一步 否则不会走
        const response = await axios.get("http://jsonplaceholder.typicode.com/todos");
        // console.log(response);
        context.commit("setTodos", response.data)

    }
};

export default {
    state, getters, mutations, actions
}