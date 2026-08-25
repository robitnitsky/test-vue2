<template>
  <div class="home">
    <h2>My Todos</h2>
    <TodoInput />
    <TodoFilter />
    <ul v-if="filteredTodos.length" class="todo-list">
      <TodoItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
    <p v-else class="empty">Nothing here yet 🎉</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoInput from '../components/TodoInput.vue'
import TodoItem from '../components/TodoItem.vue'
import TodoFilter from '../components/TodoFilter.vue'

export default {
  name: 'Home',
  components: {
    TodoInput,
    TodoItem,
    TodoFilter
  },
  computed: {
    ...mapGetters('todos', ['filteredTodos'])
  }
}
</script>

<style scoped>
.home h2 {
  margin-top: 0;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  background: #fff;
  border-radius: 8px;
  padding: 4px 12px;
}

.empty {
  color: #a4b0be;
  text-align: center;
  padding: 24px 0;
}
</style>
