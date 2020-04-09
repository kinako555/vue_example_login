export default {
    namespaced: true,
    state: {
        tenant: '',
        userId: '',
        token: ''
    },
    mutations: {
        create(state, data) {
            state.tenant = ''
            state.userId = data.user_id
            state.token = data.token
        },
        destroy(state) {
            state.tenant = ''
            state.userId = ''
            state.token = ''
        }
    },
    actions: {
        // 他moduleをコールcoalする際、第3引数で{root: true}にしないとエラーになる
        create({ commit, dispatch }, data) {
            dispatch(
                'http/post',
                { url: '/auth', data, error: 'message.unauthorized' },
                { root: true }
            ).then(res => commit('create', res.data))
             .catch(err => err)
        },
        destroy({ commit, dispatch }, data) {
            dispatch(
                'http/delete',
                { url: '/auth', data },
                { root: true }
            ).then(res => commit('create', res.data))
             .catch(err => err)
             .finally(() => commit('destroy'))
        }
    }

}