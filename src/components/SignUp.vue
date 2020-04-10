<template>
  <div class="sign-up">
    <h1>ユーザー作成</h1>
     <section class="hero is-light is-fullheight">
         <div class="hero-body">
             <div class="container has-text-centered">
                 <div class="column is-4 is-offset-4">
                     <div class="box">
                       <ValidationObserver ref="observer" tag="form" @submit.prevent="submit">
                         <div class="field">
                            <div class="control">
                              <ValidationProvider rules="email|required" v-slot="{ errors }">
                                <input class="input is-large" 
                                       type="email" 
                                       placeholder="Eメール" 
                                       v-model="user.email" 
                                       name="email">
                                <div v-show="submitClicked">
                                    <span class="md-error">{{ errors[0] }}</span>
                                </div>
                              </ValidationProvider>
                            </div>
                          </div>
                          <div class="field">
                            <div class="control">
                                <ValidationProvider rules="min:6|required" vid="password" v-slot="{ errors }">
                                  <input class="input is-large"
                                         type="password" 
                                         v-model="user.password"
                                         minlength="6"
                                         maxlength="15"
                                         placeholder="パスワード" >
                                         <div v-show="submitClicked">
                                            <span class="md-error">{{ errors[0] }}</span>
                                         </div>
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <ValidationProvider rules="confirmed:password|required" v-slot="{ errors }">
                                  <input class="input is-large"
                                         type="password" 
                                         v-model="user.confirmation"
                                         maxlength="15"
                                         placeholder="パスワード(確認)" >
                                         <div v-show="submitClicked">
                                            <span class="md-error">{{ errors[0] }}</span>
                                         </div>
                                </ValidationProvider>
                            </div>
                        </div>
                      </ValidationObserver>
                    </div>             
                    <button class="button is-block is-info is-large is-fullwidth" 
                            v-on:click="submit">ユーザー作成</button>
                </div>
            </div>
         </div>
     </section>
  </div>
</template>

<script>
import httpSignUP from '@/http/sign-up'

export default {
  name: 'SignUp',
  data() {
    return {
      user: {
        email: '',
        password: '',
        confirmation: ''
      },
      submitClicked: false
    }
  },
  props: {
  },
  methods: {
    submit : async function() {
      this.submitClicked = true;
      const isValid = await this.$refs.observer.validate();
      if (!isValid) return;
      const isSuccess = await httpSignUP.signUp(this.user);
      if (!isSuccess) {
        alert('処理に失敗しました');
        return
      }
      this.$router.push('/login');
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
