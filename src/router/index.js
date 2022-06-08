import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import CategoriesItems from '../views/CategoriesItems.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Login from '../views/Login.vue'
import UserRegister from '../views/UserRegister.vue'
import Details from '../views/Details.vue'
import Perfil from '../views/Perfil.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/cart',
    name: 'shoppingCart',
    component: ShoppingCart
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories
  },
  {
    path: '/categoriesItems/:id',
    name: 'categoriesItems',
    component: CategoriesItems
  },
  {
    path: '/register',
    name: 'userRegister',
    component: UserRegister
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/details/:id',
    name: 'details',
    component: Details
  },
  {
    path: '/perfil/',
    name: 'perfil',
    component: Perfil
  },
]

const router = new VueRouter({
  routes
})

export default router