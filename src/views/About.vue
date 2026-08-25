<template>
  <div class="about">
    <h2>About this app</h2>
    <p>
      This is a small demo todo list built with
      <strong>Vue 2</strong> and <strong>Vuex</strong>, using the classic
      Options API (<code>&lt;script&gt;</code>, not <code>&lt;script setup&gt;</code>).
    </p>
    <ul>
      <li>Vue 2.7 (Options API)</li>
      <li>Vue Router 3 for pages/navigation</li>
      <li>Vuex 3 with a namespaced <code>todos</code> module</li>
      <li>Reusable components: input, item, filter</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
}

.about code {
  background: #f1f2f6;
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
