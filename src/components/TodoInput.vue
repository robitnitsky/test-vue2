<template>
  <form class="todo-input" @submit.prevent="handleSubmit">
    <input
      v-model="text"
      type="text"
      placeholder="What needs to be done?"
      class="input"
    />
    <button type="submit" class="btn" :disabled="!text.trim()">Add</button>
  </form>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    handleSubmit() {
      if (!this.text.trim()) return
      this.$store.dispatch('todos/addTodo', this.text)
      this.text = ''
    }
  }
}
</script>

<style scoped>
.todo-input {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #ced6e0;
  border-radius: 6px;
  font-size: 1rem;
}

.btn {
  padding: 10px 16px;
  background: #3867d6;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

.btn:disabled {
  background: #a4b0be;
  cursor: not-allowed;
}
</style>
