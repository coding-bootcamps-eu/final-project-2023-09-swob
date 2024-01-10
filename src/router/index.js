import { createRouter, createWebHistory } from 'vue-router'
import SwobHome from '../views/SwobHome.vue'
import LoginScreen from '../views/LoginScreen.vue'
import RegisterScreen from '../views/RegisterScreen.vue'
import StartCategory from '../views/StartCategory.vue'
import StartFilter from '../views/StartFilter.vue'
import SwipeScreen from '../views/SwipeScreen.vue'
import MatchScreen from '../views/MatchScreen.vue'
import UserMessenger from '../views/UserMessenger.vue'
import UserProfile from '../views/UserProfile.vue'

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
      name: 'SwipeScreen',
      component: SwipeScreen
    },
    {
      path: '/match',
      name: 'match',
      component: MatchScreen
    },
    {
      path: '/usermessenger',
      name: 'userMessenger',
      component: UserMessenger
    },
    {
      path: '/userprofile',
      name: 'userProfile',
      component: UserProfile
    }
  ]
})

export default router
