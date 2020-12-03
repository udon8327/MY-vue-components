import Vue from 'vue'
import VueRouter from 'vue-router'
import Agreement from '../views/Agreement.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Agreement',
    component: Agreement
  },
  {
    path: '/userinfo',
    name: 'Userinfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Userinfo.vue')
  },
  {
    path: '/failed',
    name: 'Failed',
    component: () => import(/* webpackChunkName: "about" */ '../views/Failed.vue')
  },
  {
    path: '/submitted',
    name: 'Submitted',
    component: () => import(/* webpackChunkName: "about" */ '../views/Submitted.vue')
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import(/* webpackChunkName: "about" */ '../views/Success.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  // 跳轉後回到頂端(History模式時)
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
