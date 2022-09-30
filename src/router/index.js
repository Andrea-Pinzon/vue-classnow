import { createRouter, createWebHashHistory } from 'vue-router'

// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import Account from '../components/Account';

import Clase from '../components/Clase';
import EditClase from '../components/EditClase';
import DeleteClase from '../components/DeleteClase';
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
    path: '/account/clase',
    name: 'clase',
    component: Clase
  },
  {
    path: '/account/clase/:claseId/edit',
    name: 'edit',
    component: EditClase
  },
  {
    path: '/account/clase/:claseId/delete',
    name: 'delete',
    component: DeleteClase
  },
  {
    path: '/account/clase/new',
    name: 'new',
    component: NewClase
  },
  {
    path: '/account/historial',
    name: 'historial',
    component: Historial
  },
  {
    path: '/account/pagos',
    name: 'pagos',
    component: Pagos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router