import axios from 'axios'

export default {
    namespaced: true,
    actions: {
        // async request ({ dispatch, rootState } => dispatch, rootStateはcontextのプロパティ
        async request ({ dispatch, rootState }, { method, url, data, error }) {
            let headers ={};
            headers['Content-Type'] = 'application/json';
            if(rootState.auth.accessToken) headers = Object.assign(headers, setTokenToHeader(rootState));
            const options = {
                method,
                url: `${process.env.VUE_APP_API_URL}${url}`,
                headers,
                data,
                timeout: 15000
            }
            console.log(dispatch); //エラー回避のため後で消す
            console.log(error); //エラー回避のため後で消す
            return axios(options)
                .then(res => res)
                .catch(err => {
                    console.log(err);
                    err;
                    /*
                    dispatch(
                        'message/create',
                        { error: error, err },
                        { root: true }
                    )
                    */
                })
        },
        // http通信する際はcomponentからpost,deleteのいずれかをdispatchする
        async post ({ dispatch }, requests) {
            requests.method = 'post'
            return dispatch('request', requests)
        },
        async delete ({ dispatch }, requests) {
            requests.method = 'delete'
            return dispatch('request', requests)
        }
    }
}

function setTokenToHeader(v_rootState) {
    let v_headers = {};
    v_headers['access-token'] = v_rootState.auth.accessToken;
    v_headers['client']       = v_rootState.auth.client;
    v_headers['expiry']       = v_rootState.auth.expiry;
    v_headers['uid']          = v_rootState.auth.uid;
    return v_headers;
}