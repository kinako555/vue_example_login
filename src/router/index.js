import Vue from 'vue'
import VueRouter from 'vue-router'

import Store from '@/store/index.js'
import Login from '@/components/Login.vue'
import SignUp from '@/components/SignUp.vue'


Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: { name: 'Login' } },
    { path: '/login',
      name: 'Login',
      component: Login,
      meta: { 
        isPublic: true,
        isNotLogin : true 
      }
    },
    { path: '/sign_up',
      name: 'SignUp',
      component: SignUp,
      meta: { 
        isPublic: true,
        isNotLogin : true 
      }
    },
    { path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  // ログイン状態でログイン画面には移行できないようにする
  // 非ログイン時に非Public画面に移行しようとした場合ログイン画面移行
  router.beforeEach((to, from, next) => {
    if(Store.state.auth.token) {
      // ログイン時
      // to.matched.some(page => page.meta.isNotLogin)? next('どこか') : next() <-書き換える
      to.matched.some(page => page.meta.isNotLogin)? next() : next()
    } else {
      // 非ログイン時
      if (!to.matched.some(page => page.meta.isPublic)) next('/login')
      next()
    }
  })

  export default router