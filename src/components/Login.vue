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
                                       v-model="user.email" 
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
                                       v-model="user.password" 
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
                            v-on:click="submit">ログイン</button>
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
      user: {
        email: '',
        password: ''
      }
    }
  },
  props: {
  },
  methods: {
    submit: function() {
      this.$store.dispatch('auth/create', this.user);
    }
  },
  computed: {
    token: function() {
      return this.$store.state.auth.accessToken;
    }
  },
  watch: {
    token () {
      this.$router.push('/after_login') // 一旦ここ
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
