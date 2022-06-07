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
export default {
  name: 'CategoriesItems',
  data: () => ({
    pokemons: [
        {
        "number": 1,
            "name": "bulbasaur",
            "description": "Loves to eat",
            "height": 7,
            "weight": 69,
            "abilities": [
                "overgrow",
                "chlorophyll"
            ],
            "price": 8581,
            "types": [
                "grass",
                "poison"
            ],
            "moves": [
                "razor-wind",
                "swords-dance",
                "cut",
                "bind"
            ],
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            "score": 1,
            "uid": "629e3e4c657f7639515084af"
        },
        {
            "number": 2,
            "name": "ivysaur",
            "description": "Proud of its power",
            "height": 10,
            "weight": 130,
            "abilities": [
                "overgrow",
                "chlorophyll"
            ],
            "price": 6082,
            "types": [
                "grass",
                "poison"
            ],
            "moves": [
                "swords-dance",
                "cut",
                "bind",
                "vine-whip"
            ],
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            "score": 4,
            "uid": "629e3e4d657f7639515084b4"
        },
        {
            "number": 3,
            "name": "venusaur",
            "description": "Sturdy body",
            "height": 20,
            "weight": 1000,
            "abilities": [
                "overgrow",
                "chlorophyll"
            ],
            "price": 4674,
            "types": [
                "grass",
                "poison"
            ],
            "moves": [
                "swords-dance",
                "cut",
                "bind",
                "vine-whip"
            ],
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
            "score": 5,
            "uid": "629e3e4e657f7639515084b6"
        },
        {
            "number": 13,
            "name": "weedle",
            "description": "Nods off a lot",
            "height": 3,
            "weight": 32,
            "abilities": [
                "shield-dust",
                "run-away"
            ],
            "price": 3189,
            "types": [
                "bug",
                "poison"
            ],
            "moves": [
                "poison-sting",
                "string-shot",
                "bug-bite",
                "electroweb"
            ],
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
            "score": 1,
            "uid": "629e3e54657f7639515084ca"
        },
        {
            "number": 14,
            "name": "kakuna",
            "description": "A little quick tempered",
            "height": 6,
            "weight": 100,
            "abilities": [
                "shed-skin"
            ],
            "price": 3702,
            "types": [
                "bug",
                "poison"
            ],
            "moves": [
                "string-shot",
                "harden",
                "iron-defense",
                "bug-bite"
            ],
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
            "score": 2,
            "uid": "629e3e54657f7639515084cc"
        },
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