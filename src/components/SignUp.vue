<template>
  <div class="sign-up">
    <h1>ユーザー作成</h1>
     <section class="hero is-light is-fullheight">
         <div class="hero-body">
             <div class="container has-text-centered">
                 <div class="column is-4 is-offset-4">
                     <div class="box">
                       <form novalidate=true>
                         <div class="field">
                            <div class="control">
                              <ValidationProvider rules="email|required" v-slot="{ errors }">
                                <input class="input is-large" 
                                       type="email" 
                                       placeholder="Eメール" 
                                       v-model="email" 
                                       name="email">
                                <span class="md-error">{{ errors[0] }}</span>
                              </ValidationProvider>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <ValidationProvider rules="min:6|required" vid="password" v-slot="{ errors }">
                                  <input class="input is-large"
                                         type="password" 
                                         v-model="password" 
                                         placeholder="パスワード" >
                                         <span class="md-error">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <ValidationProvider rules="confirmed:password|required" v-slot="{ errors }">
                                  <input class="input is-large"
                                         type="password" 
                                         v-model="confirmation"
                                         placeholder="パスワード(確認)" >
                                         <span class="md-error">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        </form>
                    </div>             
                    <button class="button is-block is-info is-large is-fullwidth" 
                            @click="signUp()">ユーザー作成</button>
                </div>
            </div>
         </div>
     </section>
  </div>
</template>

<script>

export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      password: '',
      confirmation: ''
    }
  },
  props: {
  },
  method: {
    signUp() {
      //this.$store.dispatch('auth/create', {'user': { email: this.email, password: this.password }})
      return true
    },
    mdFieldClass(errors) {
      // vue-materialのバリデーションエラー時のクラスを付加
      return {
        'md-invalid': errors.length > 0
      }
    }
  },
  computed: {
    token() {
      return this.$store.state.auth.token
    }
  },
  watch: {
    token () {
      this.$router.push('/') // ログイン後画面移行
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
