import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


import customerRouter from './modules/customer'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/crm',
    component: () => import('@/views/layout/customerLayout')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  customerRouter
})


export default router

export const asyncRouterMap = [
  customerRouter
]
