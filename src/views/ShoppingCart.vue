<template>
  <div class="container m-2">
    <b-table striped hover :items="pokemons" :fields="fields"></b-table>
  <div class="m-10 mr-6 text-right">
    <h2>Total: $ {{total}} </h2>
  </div>
  <div class=" mt-5 text-right">
    <v-btn width="250px" @click="buyCart">
      Buy a Cart
    </v-btn>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import bus from '../bus';

  export default {
    data:() => ({
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: [
          {
            key: 'Pokemon',
            sortable: true,
          },
          {
            key: 'quant',
            sortable: true
          },
          {
            key: 'price',
            label: 'Price',
            sortable: true
          },
          {
            key: 'subtotal',
            label: 'SubTotal',
            sortable: true
          }
        ],
        items: [],
        pokemons: [],
        pokemonNames: [],
        total: 0.0
      }),
      mounted() {
      this.getCartbyUsser();
      // this.createTable();
    }, 
    methods: {
    async getCartbyUsser() {
      const token = window.localStorage.getItem('token');
      const email = window.localStorage.getItem('email');
      const id = window.localStorage.getItem('id');
      if (token && email && id) {
        return axios({
          method: 'get',
          url: `https://poke-store-api.onrender.com/api/cart/${window.localStorage.getItem('id')}`,
          // url: `https://poke-store-api.onrender.com/api/cart/629b2b0bf441625c07a54b9c`,
          headers: {
            "x-token": window.localStorage.getItem('token'),
          }
        }).then((res) => {
            // this.$swal('Felicidades!!', 'Está listo para iniciar!', 'success');
            // bus.$emit('refreshUser');
            // console.log(res.data.cart.pokemons);
            const arrPokemons = res.data.cart.pokemons;
            // let pokemonInfo = '';
            arrPokemons.forEach(e => {
              // bus.$emit('refreshPokemon', e.pokeId);
              this.getPokemonsbyId(e.pokeId)
              const obj = {
                Pokemon: e.pokeId + " - " + e.pokeName,
                quant: e.quant,
                price: e.price,
                subtotal: e.quant * e.price
              }
              this.total += obj.subtotal;
              this.pokemons.push(obj)
            });
            // this.pokemons = res.data.cart;
            // this.$router.push({ name: 'home' });
          })
          .catch((error) => {
            const mensaje = error.response.data.msg;
            console.log(error.response.data.msg);
            this.$swal('Error', `${mensaje}`, 'error');
            // this.$router.push({ name: 'home' });
          });
      } else {
        this.$swal('Error', 'Tiene que iniciar sesión para continuar', 'error');
        this.$router.push({ name: 'home' });
      }
    },
    async getPokemonsbyId(pokeId) {
      return axios({
        method: 'get',
        url: `https://poke-store-api.onrender.com/api/pokemon/${pokeId}`,
        headers: {
          "x-token": window.localStorage.getItem('token'),
        }
      }).then((res) => {
          // this.$swal('Felicidades!!', 'Está listo para iniciar!', 'success');
          // bus.$emit('refreshUser');
          // console.log(res.data.data.name);
          this.pokemonNames.push(res.data.data.name)
          // this.$router.push({ name: 'home' });
        })
        .catch((error) => {
          const mensaje = error;
          this.$swal('Error', `${mensaje}`, 'error');
          this.$router.push({ name: 'home' });
        });
    },
    createTable() {
      console.log(this.pokemons);
      console.log(this.pokemon);
    },
    async buyCart() {
      return axios({
          method: 'put',
          url: `https://poke-store-api.onrender.com/api/cart/buy/${window.localStorage.getItem('id')}`,
          headers: {
            "x-token": window.localStorage.getItem('token'),
          }
        }).then((result) => {
            this.$swal(
              '¡Excelente!',
              'Se ha hecho la compra correctamente',
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
    }
  }
</script>