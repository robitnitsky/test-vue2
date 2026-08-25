<template>
  <div id="app">
    <AppHeader />
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background: #f5f6fa;
  color: #2f3542;
}

.container {
  max-width: 640px;
  margin: 0 auto;
  padding: 24px 16px 64px;
}

a {
  color: #3867d6;
}
</style>
