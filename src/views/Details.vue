<template>
  <v-container fluid>
    <h2 class="mt-2 text-center">{{ pokemon.name }} #{{ id }}</h2>

    <v-row>
      <div class="col">
        <!-- <img height="500" src="../assets/tipos/ice.png"/> -->
        <img height="550" :src="pokemon.img"/>
      </div>
      <div class="col">
        <v-row>
          <h4>{{pokemon.description}}</h4>
        </v-row>
        <v-row class="mr-5">
          <v-card color="#58D68D">
            <v-row>
              <div class="col layout">
                <div>
                  <v-card-title class="text-h5 font-weight-bold">
                    Height
                  </v-card-title>
                  <v-card-text class="text-h6">{{ pokemon.height / 10 }} m</v-card-text>
                </div>
                <div>
                  <v-card-title class="text-h5 font-weight-bold">
                    Weight
                  </v-card-title>
                  <v-card-text class="text-h6">{{ pokemon.weight / 10 }} kg</v-card-text>
                </div>
                <div>
                  <v-card-title class="text-h5 font-weight-bold">
                    Price 
                  </v-card-title>
                  <v-card-text class="text-h6">$ {{ pokemon.price }}</v-card-text>
                </div>
              </div>
              <div class="col pa-2">
                <div class="pa-2">
                <v-card-title class="text-h5 font-weight-bold">
                  Abilities
                </v-card-title>
                  <v-card-text class="pt-2 pb-2 text-h6" v-for="ability in pokemon.abilities" :key="ability">
                    {{ability}}
                    </v-card-text>
                </div>
                <div class="pa-2">
                <v-card-title class="text-h5 font-weight-bold">
                  Moves
                </v-card-title>
                  <v-card-text class="pt-2 pb-2 text-h6" v-for="move in pokemon.moves" :key="move">
                    {{move}}
                    </v-card-text>
                </div>
              </div>
            </v-row>
          </v-card>
        </v-row>
      </div>
    </v-row>
    <v-row >
      <h3>Type(s): </h3>
      <v-col>
        <v-chip class="mr-3" v-for="type in pokemon.types" :key="type" color="red" text-color="white">
          {{ type }}
        </v-chip>
      </v-col>
      <v-col class="btnCarrito">
        <v-btn block @click="addCart">
          Add to cart
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from 'axios';

export default {
  data: () => ({
    id: '',
    pokemon: {}
  }),
  mounted() {
    this.getNumPokemon();
    this.getPokemon();
  },
  methods: {
    getNumPokemon(){
      this.id = this.$route.params.id;
    },
    async getPokemon(){
      return axios({
        method: 'get',
        url: `https://poke-store-api.onrender.com/api/pokemon/${this.$route.params.id}`,
        headers: {
          "x-token": window.localStorage.getItem('token'),
        }
      }).then((res) => {
          console.log(res.data.data);
          this.pokemon = res.data.data;
        }).catch((error) => {
          const mensaje = error;
          this.$swal('Error', `${mensaje}`, 'error');
          this.$router.push({ name: 'home' });
        });
    },
    addCart() {
      return axios({
        method: 'get',
        url: `https://poke-store-api.onrender.com/api/cart/${window.localStorage.getItem('id')}`,
        // url: `https://poke-store-api.onrender.com/api/cart/629b2b0bf441625c07a54b9c`,
        headers: {
          "x-token": window.localStorage.getItem('token'),
        }
      }).then((res) => {
          const token = window.localStorage.getItem('token');
          const email = window.localStorage.getItem('email');
          const id = window.localStorage.getItem('id');
          if (token && email && id) {
              return axios({
                  method: 'put',
                  data: {
                    pokeId: this.id,
                    pokeName: this.pokemon.name,
                    price: this.pokemon.price,
                    img: this.pokemon.img,
                  },
                  url: `https://poke-store-api.onrender.com/api/cart/${id}`,
                  headers: {
                    "x-token": window.localStorage.getItem('token'),
                  }
                }).then((result) => {
                    this.$swal(
                      '¡Excelente!',
                      'Se a agregado al carrito correctamente',
                      'success',
                    );
                    console.log(result);
                    // localStorage.setItem('token', result.data.token);
                    // this.$router.push({ name: 'login' });
                  }).catch((error) => {
                    const mensaje = error.response.data;
                    this.$swal('Error', `${mensaje}`, 'error');
                  });
          }
        })
        .catch((error) => {
          const token = window.localStorage.getItem('token');
          const email = window.localStorage.getItem('email');
          const id = window.localStorage.getItem('id');
          if (token && email && id) {
              return axios({
                  method: 'post',
                  data: {
                    userId: id,
                    pokeId: this.id,
                    pokeName: this.pokemon.name,
                    price: this.pokemon.price,
                    img: this.pokemon.img,
                  },
                  url: `https://poke-store-api.onrender.com/api/cart/`,
                  headers: {
                    "x-token": window.localStorage.getItem('token'),
                  }
                }).then((result) => {
                    this.$swal(
                      '¡Excelente!',
                      'Se a agregado al carrito correctamente',
                      'success',
                    );
                    console.log(result);
                    // localStorage.setItem('token', result.data.token);
                    // this.$router.push({ name: 'login' });
                  }).catch((error) => {
                    const mensaje = error.response.data;
                    this.$swal('Error', `${mensaje}`, 'error');
                  });
          } else {
            this.$swal('Error', 'Tiene que iniciar sesión para continuar', 'error');
          }
        });
      
    }
  }
}
</script>
<style scoped>
.texto{
  padding: -100px !important;
}
.layout{
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.tipos-chip{
  padding: 10px;
  margin: 0%;
  width: 100%;
}
.btnCarrito{
  padding: 10px;
  margin: 1%;
  width: 500px;
}
</style>