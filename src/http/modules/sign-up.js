import axios from 'axios'

export default {
    namespaced: true,
    actions: {
        async signUp(context, {email, password, comfirmation}) {
            let formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('comfirmation', comfirmation);
            const hostUrl = 'http://localhost:4200';
            const url = `${hostUrl}/auth`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            const res = axios.post(url, formData)
                .then(() => { return true; })
                .catch(() => { return false });
            if (res.status != 200) return false;
        }
    }
}