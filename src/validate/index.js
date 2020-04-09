import Vue from 'vue'
import { ValidationProvider, extend } from 'vee-validate';
import { required, email, confirmed, min } from 'vee-validate/dist/rules';


Vue.component('ValidationProvider', ValidationProvider);
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
    params: ['min'],
    message: (fieldName, placeholders) => { 
        return `${placeholders.min}文字以上入力してください` 
    }
});

export default{}