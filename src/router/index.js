import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import Account from '../components/Account';
import Clase from '../components/Clase'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/clase',
    name: 'clase',
    component: Clase
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router