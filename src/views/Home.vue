<template>
    <v-container>
      <v-row>
        <v-col sm="4" class="pa-3" v-for="pokemon in pokemons" :key="pokemon.number">
          <v-card class="pa-1" color="#B4AFAE">
            <v-img height="250" :src="pokemon.img"></v-img>
            <v-card-title>
              {{ pokemon.name }}
            </v-card-title>
            <v-card-subtitle>
              #{{ pokemon.number }}
            </v-card-subtitle>
            <v-row class="tipos-chip">
            <v-col>
              <v-chip class="mr-3" v-for="type in pokemon.types" :key="type" color="red" text-color="white">
                {{ type }}
              </v-chip>
            </v-col>
            <v-col>
              <v-btn v-bind:to="`/details/${pokemon.number}`" >
                More...
              </v-btn>
            </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Home',
  data: () => ({
    pokemons: [],
    nRandom: 0
  }),
  mounted() {
    this.getPokemonsDash();
  },
  methods: {
    async getPokemonsDash() {
      this.nRandom = Math.floor(Math.random() * (120 - 0)) + 0;
      return axios({
        method: 'get',
        url: `https://poke-store-api.onrender.com/api/pokemons?from=${this.nRandom}`,
        headers: {
          'Content-Type': 'application/json',
          // "x-token": window.localStorage.getItem('token'),
        },
      }).then((res) => {
          // this.$swal('Felicidades!!', 'Está listo para iniciar!', 'success');
          // bus.$emit('refreshUser');
          // console.log(res.data);
          this.pokemons = res.data.data;
          // this.$router.push({ name: 'home' });
        })
        .catch((error) => {
          const mensaje = error;
          this.$swal('Error', `${mensaje}`, 'error');
          this.$router.push({ name: 'home' });
        });
    },
    isLogged() {
      const token = window.localStorage.getItem('token');
      const email = window.localStorage.getItem('email');
      const id = window.localStorage.getItem('id');
      if (token && email && id) {
        this.getPokemonsDash();
      } else {
        this.$router.push({ name: 'login' });
      }
    }
  }
}
</script>
<style scoped>
.tipos-chip{
  padding: 0px;
  margin: 0%;
  width: 100%;
}

.btnCarrito{
  padding: 10px;
  margin: 1%;
  width: 100%;
}
</style>