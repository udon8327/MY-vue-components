import Vue from 'vue'
import VueRouter from 'vue-router'
import Agreement from '../views/Agreement.vue'
import Userinfo from '../views/Userinfo.vue'
import Failed from '../views/Failed.vue'
import Submitted from '../views/Submitted.vue'
import Success from '../views/Success.vue'

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
    component: Userinfo
  },
  {
    path: '/failed',
    name: 'Failed',
    component: Failed
  },
  {
    path: '/submitted',
    name: 'Submitted',
    component: Submitted
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
  // 路由懶加載
  // {
  //   path: '/lazyload',
  //   name: 'Lazyload',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Success.vue')
  // },
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
