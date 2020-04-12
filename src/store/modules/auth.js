export default {
    namespaced: true,
    state: {
        accessToken: '',
        client: '',
        expiry: '',
        uid: '',
    },
    mutations: {
        create(state, payload) {
            state.accessToken  = payload["access-token"];
            state.client       = payload["client"];
            state.expiry       = payload["expiry"];
            state.uid          = payload["uid"];
            
        },
        destroy(state) {
            Object.keys(state).forEach(function(key) {
                state[key] = '';
              });
        }
    },
    actions: {
        // Login
        create({ commit, dispatch }, {email, password}) {
            const data = {
                email   : email,
                password: password
            }
            dispatch(
                'http/post',
                { url: '/auth/sign_in', data, error: 'message.unauthorized' },
                { root: true }
            ).then(res => commit('create', res.headers))
             .catch(err => err);
        },
        // Logout
        async destroy({ commit, dispatch }, data) {
            await dispatch(
                'http/delete',
                { url: '/auth/sign_out', data },
                { root: true }
            ).catch(err => err)
             .finally(() => {
                 commit('destroy');
                });
        }
    }
}