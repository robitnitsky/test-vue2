const { defineConfig } = require('vite')
const vue2 = require('@vitejs/plugin-vue2')

module.exports = defineConfig({
  plugins: [vue2.default ? vue2.default() : vue2()]
})
