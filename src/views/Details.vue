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
          <h4>Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.</h4>
        </v-row>
        <v-row class="mr-5">
          <v-card color="#2EE0E8">
            <v-row>
              <div class="col layout">
                <div>
                  <v-card-title class="text-h5 font-weight-bold">
                    Height
                  </v-card-title>
                  <v-card-text class="text-h6">0.4 m</v-card-text>
                </div>
                <div>
                  <v-card-title class="text-h5 font-weight-bold">
                    Weight
                  </v-card-title>
                  <v-card-text class="text-h6">0.4 km</v-card-text>
                </div>
                <div>
                  <v-card-title class="text-h5 font-weight-bold">
                    Price 
                  </v-card-title>
                  <v-card-text class="text-h6">$ 4,0000</v-card-text>
                </div>
              </div>
              <div class="col pa-2">
                <div class="pa-2">
                <v-card-title class="text-h5 font-weight-bold">
                  Abilities
                </v-card-title>
                  <v-card-text class="pt-2 pb-2 text-h6">keen-eye</v-card-text>
                  <v-card-text class="pt-2 pb-2 text-h6">inner-focus</v-card-text>
                  <v-card-text class="pt-2 pb-2 text-h6">defiant</v-card-text>
                </div>
                <div class="pa-2">
                <v-card-title class="text-h5 font-weight-bold">
                  Moves
                </v-card-title>
                  <v-card-text class="pt-2 pb-2 text-h6">keen-eye</v-card-text>
                  <v-card-text class="pt-2 pb-2 text-h6">inner-focus</v-card-text>
                  <v-card-text class="pt-2 pb-2 text-h6">defiant</v-card-text>
                  <v-card-text class="pt-2 pb-2 text-h6">defiant</v-card-text>
                </div>
              </div>
            </v-row>
          </v-card>
        </v-row>
      </div>
    </v-row>
    <v-row >
      <h3>Tipo(s): </h3>
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
export default {
  data: () => ({
    id: '',
    pokemon: {
        "number": 85,
        "name": "dodrio",
        "description": "",
        "height": 18,
        "weight": 852,
        "abilities": [
            "run-away",
            "early-bird",
            "tangled-feet"
        ],
        "price": 9100,
        "types": [
            "normal",
            "flying"
        ],
        "moves": [
            "swords-dance",
            "whirlwind",
            "fly",
            "jump-kick"
        ],
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
        "score": 0,
        "uid": "629e3ec9657f76395150855a"
    },
  }),
  mounted() {
    this.getPokemon();
  },
  methods: {
    getPokemon(){
      this.id = this.$route.params.id;
    },
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