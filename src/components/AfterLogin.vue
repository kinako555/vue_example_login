<template>
  <div class="after-login">
    <h1>ログイン成功</h1>
    <button class="button is-block is-info is-large is-fullwidth" 
            v-on:click="logout">ログアウト</button>
  </div>
</template>

<script>
export default {
  name: 'AfterLogin',
  methods: {
    logout: async function() {
      await this.$store.dispatch('auth/destroy');
      console.log('Logout');
      this.$router.push('/login'); 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
