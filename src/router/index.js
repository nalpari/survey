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
    path: '/nps_step_one',
    component: () => import('@/views/NpsStepOne.vue')
  },
  {
    path: '/nps_step_two',
    component: () => import('@/views/NpsStepTwo.vue')
  },
  {
    path: '/nps_step_two_not_good',
    component: () => import('@/views/NpsStepTwoNotGood.vue')
  },
  {
    path: '/nps_step_three',
    component: () => import('@/views/NpsStepThree.vue')
  },
  {
    path: '/nps_step_three_submission',
    component: () => import('@/views/NpsStepThreeSubmission.vue')
  },
  {
    path: '/nps_pc',
    component: () => import('@/views/NpsPC.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
