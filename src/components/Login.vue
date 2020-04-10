<template>
  <div class="login">
    <h1>ログイン</h1>
     <section class="hero is-light is-fullheight">
         <div class="hero-body">
             <div class="container has-text-centered">
                 <div class="column is-4 is-offset-4">
                     <div class="box">
                         <div class="field">
                            <div class="control">
                                <input class="input is-large" 
                                       type="email" 
                                       placeholder="Eメール" 
                                       v-model="email" 
                                       autofocus="" 
                                       maxlength="50"
                                       name="email">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <input class="input is-large" 
                                       type="password" 
                                       placeholder="パスワード" 
                                       v-model="password" 
                                       maxlength="20" 
                                       name="password">
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label class="checkbox">
                            <input type="checkbox">
                            ログインしたままにする
                        </label>
                    </div>
                    <button class="button is-block is-info is-large is-fullwidth" 
                            @click="login()" 
                            :disabled="!isValidated" >ログイン</button>
                </div>
                <p><router-link to="/sign_up">ユーザー登録</router-link></p>      
                <p class="has-text-grey"><a href="..">パスワードを忘れた方はこちら</a></p>
            </div>
         </div>
     </section>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  props: {
  },
  method: {
    login() {
      this.$store.dispatch('auth/create', {'user': { email: this.email, password: this.password }})
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
