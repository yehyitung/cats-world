import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AllProducts from '../views/AllProducts.vue'
import Product from '../views/Product.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Favorite from '../views/Favorite.vue'
import CartPage from '../views/CartPage.vue'
import CompleteCheckout from '../views/CompleteCheckout.vue'
import Shipping from '../views/Shipping.vue'
import Adminlogin from '../views/Adminlogin.vue'
import Dashboard from '../views/Dashboard.vue'
import ProductsManage from '../views/ProductsManage.vue'
import OrderManage from '../views/OrderManage.vue'




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
    path: '/all-products',
    name: 'AllProducts',
    component: AllProducts
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
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
  },
  {
    path: '/adminlogin',
    name: 'Adminlogin',
    component: Adminlogin
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/products-manage',
    name: 'ProductsManage',
    component: ProductsManage
  },
  {
    path: '/order-manage',
    name: 'OrderManage',
    component: OrderManage
  }
]

const router = new VueRouter({
  routes
})

export default router
