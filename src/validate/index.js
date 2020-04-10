import Vue from 'vue'
import { ValidationProvider,ValidationObserver, extend } from 'vee-validate';
import { required, email, confirmed, min } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: '必須項目です'
});
extend('email', {
    ...email,
    message: 'アドレスが正しく入力されていません'
});
extend('confirmed', {
    ...confirmed,
    message: 'パスワードと一致しません'
});
extend('min', {
    ...min,
    params: ['length'],
    message: (fieldName, placeholders) => { 
        return `${placeholders.length}文字以上入力してください` 
    }
});

export default {
    component: [
        Vue.component('ValidationProvider', ValidationProvider),
        Vue.component('ValidationObserver', ValidationObserver)
    ]
}
