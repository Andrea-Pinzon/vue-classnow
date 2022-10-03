import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import Account from '../components/Account';
import Contacto from '../components/Contacto';

import Clase from '../components/Clase';
import EditClase from '../components/EditClase';
import NewClase from '../components/NewClase';

import Historial from '../components/Historial';
import Pagos from '../components/Pagos'


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
    path: '/contacto',
    name: 'contacto',
    component: Contacto
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
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditClase
  },
  {
    path: '/clase/new',
    name: 'new',
    component: NewClase
  },

  {
    path: '/historial',
    name: 'historial',
    component: Historial
  },
  {
    path: '/pagos',
    name: 'pagos',
    component: Pagos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router