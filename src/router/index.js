import { createRouter, createWebHistory } from 'vue-router'
import SwobHome from '../views/SwobHome.vue'
import LoginScreen from '../views/LoginScreen.vue'
import RegisterScreen from '../views/RegisterScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SwobHome
    },
    {
      path: '/login',
      name: 'login',
      component: LoginScreen
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterScreen
    }
  ]
})

export default router
