import { createRouter, createWebHistory } from 'vue-router'
import SwobHome from '../views/SwobHome.vue'
import LoginScreen from '../views/LoginScreen.vue'
import RegisterScreen from '../views/RegisterScreen.vue'
import StartCategory from '../views/StartCategory'
import StartFilter from '../views/StartFilter'
import SwipeScreen from '../views/SwipeScreen'
import MatchScreen from '../views/MatchScreen'

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
    },
    {
      path: '/category',
      name: 'category',
      component: StartCategory
    },
    {
      path: '/filterdetails',
      name: 'filterdetails',
      component: StartFilter
    },
    {
      path: '/swipe',
      name: 'swipe',
      component: SwipeScreen
    },
    {
      path: '/match',
      name: 'match',
      component: MatchScreen
    }
  ]
})

export default router
