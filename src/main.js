import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import validate from './validate'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  validate,
  render: h => h(App),
}).$mount('#app')
