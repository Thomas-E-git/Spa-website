import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Soins',
    name: 'Soins',
    component: () => import('../views/Soins.vue')
  },
  {
    path: '/Compte',
    name: 'Compte',
    component: () => import('../views/Compte.vue')
  },
  {
    path: '/Connexion',
    name: 'Connexion',
    component: () => import('../views/Connexion.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/Inscription',
    name: 'Soins',
    component: () => import('../views/Soins.vue')
  },
  {
    path: '/Litotherapie',
    name: 'Litotherapie',
    component: () => import('../views/Litotherapie.vue')
  },
  {
    path: '/Mamans',
    name: 'Mamans',
    component: () => import('../views/Mamans.vue')
  },
  {
    path: '/Reservation',
    name: 'Reservation',
    component: () => import('../views/Reservation.vue')
  },
  {
    path: '/Spa',
    name: 'Spa',
    component: () => import('../views/Spa.vue')
  },
  {
    path: '/Galerie',
    name: 'Galerie',
    component: () => import('../components/Galerie.vue')
  },
  {
    path: '/Modelage',
    name: 'Modelage',
    component: () => import('../views/Modelage.vue')
  },
  {
    path: '/Corps',
    name: 'Corps',
    component: () => import('../views/Corps.vue')
  },
  {
    path: '/Visage',
    name: 'Visage',
    component: () => import('../views/Visage.vue')
  },
  {
    path: '/Mains',
    name: 'Mains',
    component: () => import('../views/Mains.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
