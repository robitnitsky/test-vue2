let nextId = 4

const state = {
  items: [
    { id: 1, text: 'Learn Vue 2 Options API', done: true },
    { id: 2, text: 'Wire up Vuex store', done: true },
    { id: 3, text: 'Build a todo list UI', done: false }
  ],
  filter: 'all' // 'all' | 'active' | 'done'
}

const getters = {
  allTodos(state) {
    return state.items
  },
  filteredTodos(state) {
    if (state.filter === 'active') {
      return state.items.filter((todo) => !todo.done)
    }
    if (state.filter === 'done') {
      return state.items.filter((todo) => todo.done)
    }
    return state.items
  },
  totalCount(state) {
    return state.items.length
  },
  doneCount(state) {
    return state.items.filter((todo) => todo.done).length
  },
  activeCount(state, getters) {
    return getters.totalCount - getters.doneCount
  },
  currentFilter(state) {
    return state.filter
  }
}

const mutations = {
  ADD_TODO(state, text) {
    state.items.push({ id: nextId++, text, done: false })
  },
  REMOVE_TODO(state, id) {
    state.items = state.items.filter((todo) => todo.id !== id)
  },
  TOGGLE_TODO(state, id) {
    const todo = state.items.find((item) => item.id === id)
    if (todo) {
      todo.done = !todo.done
    }
  },
  SET_FILTER(state, filter) {
    state.filter = filter
  },
  CLEAR_COMPLETED(state) {
    state.items = state.items.filter((todo) => !todo.done)
  }
}

const actions = {
  addTodo({ commit }, text) {
    const trimmed = text.trim()
    if (!trimmed) return
    commit('ADD_TODO', trimmed)
  },
  removeTodo({ commit }, id) {
    commit('REMOVE_TODO', id)
  },
  toggleTodo({ commit }, id) {
    commit('TOGGLE_TODO', id)
  },
  setFilter({ commit }, filter) {
    commit('SET_FILTER', filter)
  },
  clearCompleted({ commit }) {
    commit('CLEAR_COMPLETED')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
