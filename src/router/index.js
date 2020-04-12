import Vue from 'vue'
import VueRouter from 'vue-router'

import Store from '@/store/index.js'
import Login from '@/components/Login.vue'
import SignUp from '@/components/SignUp.vue'
import AfterLogin from '@/components/AfterLogin.vue'


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
    { path: '/after_login',
      name: 'AfterLogin',
      component: AfterLogin
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
    if(Store.state.auth.accessToken) {
      // ログイン時
      // to.matched.some(page => page.meta.isNotLogin)? next('どこか') : next() <-書き換える
      console.log(to.matched.some(page => page.meta.isNotLogin));
      to.matched.some(page => page.meta.isNotLogin)? next('/after_login') : next();
    } else {
      // 非ログイン時
      if (!to.matched.some(page => page.meta.isPublic)) next('/login')
      next()
    }
  })

  export default router