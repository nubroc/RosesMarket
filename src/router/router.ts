import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../pages/Acceuil.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Panier from '../pages/Panier.vue'


const routes = [
  {
    path: '/',
    name: 'Acceuil',
    component: Acceuil,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },  
  {
    path: '/panier',
    name: 'Panier',
    component: Panier,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router