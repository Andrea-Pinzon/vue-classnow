import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/Login';
import SignUp from '../components/SignUp'
import Home from '../components/Home'
import Account from '../components/Account'


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
    path: '/user/account',
    name: 'account',
    component: Account
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router