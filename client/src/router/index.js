//Made by Gina Bain
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Onboarding from '../views/Onboarding.vue'

const routes = [
  {path: '/', name: 'Login', component: Login},
  {path: '/Home', name: 'Home', component: Home},
  {path: '/Onboarding', name: 'Onboarding', component: Onboarding},
  {path:'/', redirect: '/Login'}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router
