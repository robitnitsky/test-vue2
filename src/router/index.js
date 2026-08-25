import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Stats from '../views/Stats.vue'
import About from '../views/About.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
