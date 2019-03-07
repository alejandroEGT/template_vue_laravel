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
                                          <label>Nombres</label>
                                          <md-input v-model="name"></md-input>
                                     </md-field>
                                     <md-field>
                                          <label>Apellido Paterno</label>
                                          <md-input ></md-input>
                                     </md-field>
                                     <md-field>
                                          <label>Apellido Materno</label>
                                          <md-input ></md-input>
                                     </md-field>
                                    <!-- <md-field>
                                          <label for="movie">Movie</label>
                                          <md-select v-model="movie" name="movie" id="movie">
                                            <md-option value="fight-club">Fight Club</md-option>
                                            <md-option value="godfather">Godfather</md-option>
                                            <md-option value="godfather-ii">Godfather II</md-option>
                                            <md-option value="godfather-iii">Godfather III</md-option>
                                            <md-option value="godfellas">Godfellas</md-option>
                                            <md-option value="pulp-fiction">Pulp Fiction</md-option>
                                            <md-option value="scarface">Scarface</md-option>
                                          </md-select>
                                        </md-field> -->
                                    <md-field>
                                          <label>Email</label>
                                          <md-input v-model="email"></md-input>
                                     </md-field>

                                      <md-field>
                                        <label>Password</label>
                                        <md-input v-model="password" type="password"></md-input>
                                      </md-field>

                                      <md-button class="md-raised md-primary" @click="register">Crear</md-button>

                                      <md-button type="submit" class="md-primary" >Create user</md-button>
                      
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

<script> 
    export default {
        data(){
            return {
                name: '',
                email: '',
                password: '',
                error: false,
                errors: {},
                success: false
            };
        },
        methods: {
            register(){
                var app = this
                this.$auth.register({
                    data: {
                        name: app.name,
                        email: app.email,
                        password: app.password
                    }, 
                    success: function () {
                        app.success = true
                    },
                    error: function (resp) {
                        app.error = true;
                        app.errors = resp.response.data.errors;
                    },
                    redirect: null
                });                
            }
        }
    }
</script>