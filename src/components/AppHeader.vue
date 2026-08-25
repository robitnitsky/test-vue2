<template>
  <header class="app-header">
    <div class="container header-inner">
      <h1 class="logo">📝 Todo</h1>
      <nav class="nav">
        <router-link to="/" exact>List</router-link>
        <router-link to="/stats">Stats</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.app-header {
  background: #3867d6;
  color: #fff;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
}

.logo {
  margin: 0;
  font-size: 1.25rem;
}

.nav {
  display: flex;
  gap: 16px;
}

.nav a {
  color: #dfe6f5;
  text-decoration: none;
  font-weight: 500;
}

.nav a.router-link-active {
  color: #fff;
  text-decoration: underline;
}
</style>
