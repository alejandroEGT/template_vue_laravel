<template>
  <div class="row justify-content-center">
      <q-input v-model="email" label="Standard" />

      <q-input v-model="password" label="Standard" />

      <q-btn color="primary" @click="login" icon="mail" label="On Left" />
  </div>
</template>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>
export default {
  name: 'Media',
  data(){
    return{
      email:'',
      password:'',
      error:false
    }
  },

  methods:{
     redirect_create_user(){
      this.$router.push('create') 
    },
    login(){
        var app = this
        this.$auth.login({
            params: {
              email: app.email,
              password: app.password
            }, 
            success: function () {},
            error: function () {},
            rememberMe: true,
            redirect: '/index',
            fetchUser: true,
        });       
    },
  }
}
</script>