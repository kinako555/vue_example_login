import axios from 'axios'

export default {
        signUp({email, password}) {
            let formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            const hostUrl = 'http://localhost:4200';
            const url = `${hostUrl}/auth`;
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            const commit = async() =>{
                let isSuccess;
                // TODO: emailがすでに登録済みの場合を検討
                await axios.post(url, formData)
                    .then (() => { isSuccess = true })
                    .catch(() => { isSuccess = false });
                return isSuccess;
            };
            return commit();
        }
}