<template>
  <li class="todo-item">
    <label class="todo-label">
      <input
        type="checkbox"
        :checked="todo.done"
        @change="toggle"
      />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </label>
    <button class="remove-btn" title="Remove" @click="remove">✕</button>
  </li>
</template>

<script setup>
import store from '../store'

const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
})

function toggle() {
  store.dispatch('todos/toggleTodo', props.todo.id)
}

function remove() {
  store.dispatch('todos/removeTodo', props.todo.id)
}
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 4px;
  border-bottom: 1px solid #e8eaf0;
}

.todo-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.done {
  text-decoration: line-through;
  color: #a4b0be;
}

.remove-btn {
  background: none;
  border: none;
  color: #a4b0be;
  cursor: pointer;
  font-size: 1rem;
}

.remove-btn:hover {
  color: #eb3b5a;
}
</style>
