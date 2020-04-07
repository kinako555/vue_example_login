<template>
     <section class="hero is-light is-fullheight">
         <div class="hero-body">
             <div class="container has-text-centered">
                 <div class="column is-4 is-offset-4">
                     <div class="box">
                         <div class="field">
                            <div class="control">
                                <input class="input is-large" type="email" placeholder="Eメール" v-model="email" autofocus="" v-validate="'required|email'" name="email">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <input class="input is-large" type="password" placeholder="パスワード" v-model="password" v-validate="'required|min:6|max:20'" maxlength="20" name="password">
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label class="checkbox">
                            <input type="checkbox">
                            ログインしたままにする
                        </label>
                    </div>
                    <button class="button is-block is-info is-large is-fullwidth" @click="login()" :disabled="!isValidated" >ログイン</button>
                </div>
                <p class="has-text-grey"><a href="..">パスワードを忘れた方はこちら</a></p>
            </div>
         </div>
     </section>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
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
