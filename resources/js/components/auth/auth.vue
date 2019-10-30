
   <template>
  <div  v-if="$auth.check()">
    
     <q-bar dark class="bg-black text-white">
      
      <div class="col text-center text-weight-bold">

        PEOPLE
      </div>
    </q-bar>

    
  
    <div class="container">
        <router-view :key="$route.path"></router-view>  
    </div>
    
  </div>
</template>



<script>
export default {
  name: 'Reveal',
  data: () => ({
    menuVisible: false
  }),

  methods:{

    url_perfil(){
        this.$router.push('/mi-perfil');
    },

  	 logout: function () {
         this.$auth.logout({
                  makeRequest: true,
                  redirect: '/'
              });
      },
  }
}
</script>