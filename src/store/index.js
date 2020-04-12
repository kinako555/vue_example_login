import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import auth from '@/store/modules/auth'
import http from '@/store/modules/http'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        http
    },
    plugins: [createPersistedState()]
})