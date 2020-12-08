import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Favorite from '../views/Favorite.vue'
import CartPage from '../views/CartPage.vue'
import CompleteCheckout from '../views/CompleteCheckout.vue'
import Shipping from '../views/Shipping.vue'


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
    component: About
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  },
  {
    path: '/cart-page',
    name: 'CartPage',
    component: CartPage
  },
  {
    path: '/complete-checkout',
    name: 'CompleteCheckout',
    component: CompleteCheckout
  },
  {
    path: '/shipping',
    name: 'Shipping',
    component: Shipping
  }
]

const router = new VueRouter({
  routes
})

export default router
