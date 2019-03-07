<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card card-default">
              <div class="card-header">Crear usuario</div>

              <div class="card-body">
                  <div class="row justify-content-md-center">
                        <div class="col col-lg-5">
                             <div class="">
                                 <div class="card-body">
                                    <h5 class="card-title">Log in</h5>
                                    <md-field>
                                          <label>Email</label>
                                          <md-input v-model="email"></md-input>
                                     </md-field>

                                      <md-field>
                                        <label>Password</label>
                                        <md-input v-model="password" type="password"></md-input>
                                      </md-field>

                                      <md-button class="md-raised md-primary" @click="login">Ingresar</md-button>

                                      <md-button type="submit" class="md-primary" @click="redirect_create_user">Create user</md-button>
                      
                                      <!-- <a href="">Crear una cuenta</a> -->
                                  </div>


                            </div>
                        </div>
                   <!--  <div class="col-md-auto">
                      Variable width content
                    </div> -->
                    
                </div>
              </div>
          </div>
      </div>
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