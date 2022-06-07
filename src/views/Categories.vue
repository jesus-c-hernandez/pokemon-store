<template>
    <v-container>
      <v-row>
        <v-col sm="3" class="pa-2" v-for="type in types" :key="type">
          <v-card class="pa-1" color="#B4AFAE">
            <v-img height="250" :src="'/tipos/ice.png'"></v-img>
            <v-card-title>
              {{ type }}
            </v-card-title>
            <v-card-text class="text-center">
              <v-btn flat v-bind:to="{ name: 'categoriesItems' }">Ir a la Categoria</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>    
</template>
<script>
import AboutView from './AboutView.vue'
export default {
  components: { AboutView },
  name: 'Home',
  data () {
    return {
      types: [
        "rock",
        "water",
        "electric",
        "grass",
        "poison",
        "psychic",
        "fire",
        "ground",
        "ice",
        "fighting",
        "ghost",
        "dragon"
    ],
    }
  }
}
</script>