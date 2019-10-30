<template>
	<div class="q-pa-md">
		<div class="row justify-center">
			<div class="col-md-8">
				<div class="row q-col-gutter-md justify-center">
			<div class="col-12 col-md-3">
				<q-card class="my-card">
			     <img style="height: 20%; max-width: 100%" src="https://scontent.fccp1-1.fna.fbcdn.net/v/t1.0-9/69244077_2495071723872301_9078154412278415360_n.jpg?_nc_cat=102&_nc_oc=AQlmjeCvAF6D92WEjAkYQ9Q2Fi2WHuvafEZRLgxQwP7G-O46o6wd8hJ_63jCXa92bIA&_nc_ht=scontent.fccp1-1.fna&oh=e7e88b51c8710d7b7f9f7cb309848636&oe=5E609992">
				

			      <q-list>
			        <q-item clickable>
			          <!-- <q-item-section avatar>
			            <q-icon color="primary" name="local_bar" />
			          </q-item-section> -->

			          <q-item-section>
			            <q-item-label>Alejandro Godoy</q-item-label>
			            <q-item-label caption>1.534 Seguidores</q-item-label>
			          </q-item-section>
			        </q-item>

			        <q-item clickable>
			         <!--  <q-item-section avatar>
			            <q-icon color="red" name="local_gas_station" />
			          </q-item-section> -->

			          <q-item-section>
			            <q-item-label>De los Angeles, BioBio</q-item-label>
			            <q-item-label caption>Chile</q-item-label>
			          </q-item-section>
			        </q-item>

			        <q-item clickable>
			          <q-item-section avatar>
			            <q-icon color="amber" name="local_movies" />
			          </q-item-section>

			          <q-item-section>
			            <q-item-label>Cinema XYZ</q-item-label>
			            <q-item-label caption>Watch a movie.</q-item-label>
			          </q-item-section>
			        </q-item>
			      </q-list>
			    </q-card>
			</div>

			<div class="col-12 col-md-9">
				 <div class="q-gutter-y-md" style="max-width: 600px">
				      <q-card>
				        <q-tabs
				          v-model="tab"
				          dense
				          class="text-black"
				          active-color="black"
				          indicator-color="black"
				          align="justify"
				          narrow-indicator
				        >
				          <q-tab name="mails" label="Mis fotos" />
				          <q-tab name="guardados" label="Guardados" />
				          <q-tab name="movies" label="Movies" />
				        </q-tabs>

				        <q-separator />

				        <q-tab-panels v-model="tab" animated>
				          <q-tab-panel name="mails">
				            <!-- <div class="text-h6">Mis fotos</div> -->
				            
							 <div class="q-gutter-md row justify-center">
								  

								 <q-img
							        src="https://scontent.fccp1-1.fna.fbcdn.net/v/t1.0-9/14595813_1210391925673627_6292061864872568606_n.jpg?_nc_cat=103&_nc_oc=AQn0A5Hd721yKUPkzdEFDNqbu5nuF3kSXpQUZQPKf-6nxcBHSmgyW0mFqHLuIZx5STA&_nc_ht=scontent.fccp1-1.fna&oh=8e0da8f90071e1148784e195502b5eb2&oe=5E217849"
							        
							        style="width: 30%;height: auto;"
							      >
							        <div class="absolute-bottom text-center">
							          <q-btn size="10px" round color="black" icon="remove_red_eye" />
							        </div>
							      </q-img>

							      <q-img
							        src="https://scontent.fccp1-1.fna.fbcdn.net/v/t1.0-9/13315240_1152186671498077_1908036713821968176_n.jpg?_nc_cat=103&_nc_oc=AQkeAbsKSz5Q5C2FI6MuAnM_QUMnTaIuIF37lHUw-qBp1yRE_2j2kz2Pm02HPKy7fmA&_nc_ht=scontent.fccp1-1.fna&oh=ceece81c7d4a095110603da13abdbcb9&oe=5E199F1E"
							        
							        style="width: 30%;height: auto;"
							      >
							        <div class="absolute-bottom text-center">
							          <q-btn size="10px" round color="black" icon="remove_red_eye" />
							        </div>
							      </q-img>


							      <!-- notice "basic" prop (which disables default animation) -->
							      <q-img
							        src="https://scontent.fccp1-1.fna.fbcdn.net/v/t1.0-9/14595813_1210391925673627_6292061864872568606_n.jpg?_nc_cat=103&_nc_oc=AQn0A5Hd721yKUPkzdEFDNqbu5nuF3kSXpQUZQPKf-6nxcBHSmgyW0mFqHLuIZx5STA&_nc_ht=scontent.fccp1-1.fna&oh=8e0da8f90071e1148784e195502b5eb2&oe=5E217849"
							        
							        style="width: 30%;height: auto;"
							      >
							        <div class="absolute-bottom text-center">
							          <q-btn size="10px" round color="black" icon="remove_red_eye" />
							        </div>
							      </q-img>

							      <q-img
							        src="https://scontent.fccp1-1.fna.fbcdn.net/v/t1.0-9/13315240_1152186671498077_1908036713821968176_n.jpg?_nc_cat=103&_nc_oc=AQkeAbsKSz5Q5C2FI6MuAnM_QUMnTaIuIF37lHUw-qBp1yRE_2j2kz2Pm02HPKy7fmA&_nc_ht=scontent.fccp1-1.fna&oh=ceece81c7d4a095110603da13abdbcb9&oe=5E199F1E"
							        
							        style="width: 30%;height: auto;"
							      >
							        <div class="absolute-bottom text-center">
							          <q-btn size="10px" round color="black" icon="remove_red_eye" />
							        </div>
							      </q-img>

							       <q-img
							        src="https://scontent.fccp1-1.fna.fbcdn.net/v/t1.0-9/14595813_1210391925673627_6292061864872568606_n.jpg?_nc_cat=103&_nc_oc=AQn0A5Hd721yKUPkzdEFDNqbu5nuF3kSXpQUZQPKf-6nxcBHSmgyW0mFqHLuIZx5STA&_nc_ht=scontent.fccp1-1.fna&oh=8e0da8f90071e1148784e195502b5eb2&oe=5E217849"
							        
							        style="width: 30%;height: auto;"
							      >
							        <div class="absolute-bottom text-center">
							          <q-btn size="10px" round color="black" icon="remove_red_eye" />
							        </div>
							      </q-img>

							      <q-img
							        src="https://scontent.fccp1-1.fna.fbcdn.net/v/t1.0-9/13315240_1152186671498077_1908036713821968176_n.jpg?_nc_cat=103&_nc_oc=AQkeAbsKSz5Q5C2FI6MuAnM_QUMnTaIuIF37lHUw-qBp1yRE_2j2kz2Pm02HPKy7fmA&_nc_ht=scontent.fccp1-1.fna&oh=ceece81c7d4a095110603da13abdbcb9&oe=5E199F1E"
							        
							        style="width: 30%;height: auto;"
							      >
							        <div class="absolute-bottom text-center">
							          <q-btn size="10px" round color="black" icon="remove_red_eye" />
							        </div>
							      </q-img>

							      
								</div>


				          </q-tab-panel>

				          <q-tab-panel name="alarms">
				            <div class="text-h6">Alarms</div>
				            Lorem ipsum dolor sit amet consectetur adipisicing elit.
				          </q-tab-panel>

				          <q-tab-panel name="movies">
				            <div class="text-h6">Movies</div>
				            Lorem ipsum dolor sit amet consectetur adipisicing elit.
				          </q-tab-panel>
				        </q-tab-panels>
				      </q-card>
			</div>
		</div>
		</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				 tab: 'mails'
			}
		}
	}
</script>