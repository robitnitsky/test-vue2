<template>
  <div class="todo-filter">
    <button
      v-for="option in options"
      :key="option.value"
      class="filter-btn"
      :class="{ active: currentFilter === option.value }"
      @click="setFilter(option.value)"
    >
      {{ option.label }}
    </button>
    <button class="clear-btn" @click="clearCompleted">Clear completed</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoFilter',
  data() {
    return {
      options: [
        { value: 'all', label: 'All' },
        { value: 'active', label: 'Active' },
        { value: 'done', label: 'Done' }
      ]
    }
  },
  computed: {
    ...mapGetters('todos', ['currentFilter'])
  },
  methods: {
    ...mapActions('todos', ['setFilter', 'clearCompleted'])
  }
}
</script>

<style scoped>
.todo-filter {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0;
}

.filter-btn {
  padding: 6px 12px;
  border: 1px solid #ced6e0;
  background: #fff;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.85rem;
}

.filter-btn.active {
  background: #3867d6;
  border-color: #3867d6;
  color: #fff;
}

.clear-btn {
  margin-left: auto;
  border: none;
  background: none;
  color: #eb3b5a;
  cursor: pointer;
  font-size: 0.85rem;
}
</style>
