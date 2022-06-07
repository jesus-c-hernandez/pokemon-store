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
            <v-col v-for="type in pokemon.types" :key="type">
              <v-chip color="red" text-color="white">
                {{ type }}
              </v-chip>
            </v-col>
            <v-col class="btnCarrito">
              <v-btn @click="addCart">
                Add to cart
              </v-btn>
            </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
export default {
  name: 'Home',
  data: () => ({
    pokemons: [
        {
            "number": 21,
            "name": "spearow",
            "description": "Good endurance",
            "height": 3,
            "weight": 20,
            "abilities": [
                "keen-eye",
                "sniper"
            ],
            "price": 8848,
            "types": [
                "normal",
                "flying"
            ],
            "moves": [
                "razor-wind",
                "whirlwind",
                "fly",
                "headbutt"
            ],
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
            "score": 0,
            "uid": "629e3e59657f7639515084da"
        },
        {
            "number": 22,
            "name": "fearow",
            "description": "Often lost in thought",
            "height": 12,
            "weight": 380,
            "abilities": [
                "keen-eye",
                "sniper"
            ],
            "price": 1706,
            "types": [
                "normal",
                "flying"
            ],
            "moves": [
                "razor-wind",
                "whirlwind",
                "fly",
                "headbutt"
            ],
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
            "score": 0,
            "uid": "629e3e59657f7639515084dc"
        },
        {
            "number": 23,
            "name": "ekans",
            "description": "Hates to lose",
            "height": 20,
            "weight": 69,
            "abilities": [
                "intimidate",
                "shed-skin",
                "unnerve"
            ],
            "price": 1177,
            "types": [
                "poison"
            ],
            "moves": [
                "bind",
                "slam",
                "headbutt",
                "body-slam"
            ],
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
            "score": 0,
            "uid": "629e3e5a657f7639515084de"
        }
      ],
  }),
  methods: {
    addCart() {
      this.$swal(
        '¡Excelente!',
        'Se a agregado al carrito correctamente',
        'success',
      );
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