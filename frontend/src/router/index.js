import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Developers from '../views/Developers.vue'
import Projects from '../views/Projects.vue'
import Blog from '../views/Blog.vue'
import Technology from '../views/Technology.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/developers',
    name: 'developers',
    component: Developers
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/technology',
    name: 'technology',
    component: Technology
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
