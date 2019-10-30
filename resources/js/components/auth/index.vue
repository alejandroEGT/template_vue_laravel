<template>
  <div class="q-pa-md">

    <div class="q-pa-md">
      <div class="q-gutter-sm">
      
      <q-btn round>
      <q-avatar size="42px">
        <img src="https://scontent.fccp1-1.fna.fbcdn.net/v/t1.0-1/c2.0.40.40a/p40x40/69244077_2495071723872301_9078154412278415360_n.jpg?_nc_cat=102&_nc_oc=AQlmjeCvAF6D92WEjAkYQ9Q2Fi2WHuvafEZRLgxQwP7G-O46o6wd8hJ_63jCXa92bIA&_nc_ht=scontent.fccp1-1.fna&oh=44bb370b2f92430bd85a7ea32fd616ee&oe=5E62CCE1">
      </q-avatar>
  
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Opciones</div>
                
                <a @click="url_perfil" style="" >Mi perfil</a>


              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://scontent.fccp1-1.fna.fbcdn.net/v/t1.0-1/c2.0.40.40a/p40x40/69244077_2495071723872301_9078154412278415360_n.jpg?_nc_cat=102&_nc_oc=AQlmjeCvAF6D92WEjAkYQ9Q2Fi2WHuvafEZRLgxQwP7G-O46o6wd8hJ_63jCXa92bIA&_nc_ht=scontent.fccp1-1.fna&oh=44bb370b2f92430bd85a7ea32fd616ee&oe=5E62CCE1">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">Alejandro godoy</div>

                <q-btn
                  @click='logout'
                  color="black"
                  label="Salir"
                  push
                  size="sm"
                  v-close-popup
                />
              </div>
            </div>
          </q-menu>
        </q-btn>

        <q-btn color="black" label="contenido">
        <q-menu
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Noticias</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Debates</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Anime</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>el kkck</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    </div>
    
    <div class="row justify-center">
      <div class="col-12 col-md-6">
        <q-card class="my-card">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://scontent.fccp1-1.fna.fbcdn.net/v/t1.0-1/p160x160/69370955_3135947683112296_3794748084420870144_n.jpg?_nc_cat=100&_nc_oc=AQlOpTIUyinfMRDjtwkCc9sCB3B-8xqzAbELcB0Gj43q3AWJB0gin0dQKhsxFD03LfU&_nc_ht=scontent.fccp1-1.fna&oh=ee046f87adca0cc45bf03a909312a68d&oe=5E20FC91">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Title</q-item-label>
              <q-item-label caption>hace 2 minutos</q-item-label>
            </q-item-section>
          </q-item>

          <img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </q-card-section>
          <hr>
          <div class="q-pa-md" style="max-width: 100%">

            <q-expansion-item
              v-model="expanded"
              icon="chat"
              label="Foro abierto"
              caption="0 coemntarios"
            >
              <q-card>
                <q-card-section>
                  
                    <div class="row">
                      <div class="col-3 col-md-2">
                        <q-avatar>
                              <img src="https://scontent.fccp1-1.fna.fbcdn.net/v/t1.0-1/c2.0.40.40a/p40x40/69244077_2495071723872301_9078154412278415360_n.jpg?_nc_cat=102&_nc_oc=AQlmjeCvAF6D92WEjAkYQ9Q2Fi2WHuvafEZRLgxQwP7G-O46o6wd8hJ_63jCXa92bIA&_nc_ht=scontent.fccp1-1.fna&oh=44bb370b2f92430bd85a7ea32fd616ee&oe=5E62CCE1">
                            </q-avatar>
                      </div>
                      <div class="col-9 col-md-10">
                      Pienso que eres una mierda, chau!!
                      mejora mas tu ano weta qlo Pienso que eres una mierda, chau!!
                      mejora mas tu ano weta qlo Pienso que eres una mierda, chau!!
                      mejora mas tu ano weta qlo
                       
                      </div>

                      <q-separator inset /><br>
                    </div>
                    <div class="row">
                      <div class="col-3 col-md-2">
                        <q-avatar>
                              <img src="https://cdn.quasar.dev/img/avatar.png">
                            </q-avatar>
                      </div>
                      <div class="col-9 col-md-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                       
                      </div>
                      <q-separator inset /><br>
                    </div>
                    <div class="row">
                      <div class="col-3 col-md-2">
                        <q-avatar>
                              <img src="https://cdn.quasar.dev/img/avatar.png">
                            </q-avatar>
                      </div>
                      <div class="col-9 col-md-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                       
                      </div>
                      <q-separator inset /><br>
                    </div>

                    <q-input
                      v-model="text"
                      filled
                      type="textarea"
                      label="Escribe tu comentario..."
                    />
                      

                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
        </q-card>
      </div>
    </div>
   
  


  </div>


</template>


<script>


export default {
  data () {
    return {
      tab: 'mails',
      splitterModel: 20,
       panel: 'mails',
       body:'list-group-item',
       date: '2019/02/01',
       date2:'2019-02-01 12:44',
       myLocale: {
        /* starting with Sunday */
        days: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
        daysShort: 'Dom_Lun_Mar_Mié_Jue_Vie_Sáb'.split('_'),
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_'),
        firstDayOfWeek: 1,
        expanded: false
      }
    }
  },
  methods:{
    logout: function () {
         this.$auth.logout({
                  makeRequest: true,
                  redirect: '/'
              });
      },
        url_perfil(){
        this.$router.push('/mi-perfil');
    },

  }
}
</script>

<style type="text/css">
a:link
{
text-decoration:none;
}
</style>