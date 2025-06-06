import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
  {path: '/', name: 'Login', component: Login},
  {path: '/Home', name: 'Home', component: Home},
  {path:'/', redirect: '/Login'}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router
