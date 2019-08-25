const state = {
    count: 0
};
const getters = {
    count: state => state.count
};
const mutations = {
    incrementCount: state => state.count++,
    decrementCount: (state, num) => state.count -= num.amount
};
const actions = {
    incrementCountAsync: context => {
        setTimeout(() => {
            context.commit("incrementCount")
        }, 2000)
    },
    decrementCountAsync: (context, num) => {
        setTimeout(() => {
            context.commit("decrementCount", num)
        }, 2000)

    }
};

export default {
    state, getters, mutations, actions
}