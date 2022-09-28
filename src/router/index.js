import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/Login';
import SignUp from '../components/SignUp'
import Home from '../components/Home'
import Profile from '../components/Profile'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/user/login',
    name: 'login',
    component: Login
  },
  {
    path: '/user/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/user/profile',
    name: 'profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router