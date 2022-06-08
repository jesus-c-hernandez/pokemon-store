<template>
    <v-container>
      <v-row>
        <v-col sm="3" class="pa-2" v-for="type in objTypes" :key="type.name">
          <v-card class="pa-2" color="#B4AFAE">
            <!-- <img height="250" :src="type.img"/> -->
              <v-img height="300" :src="type.img"></v-img>
            <v-card-title>
              {{ type.name }}
            </v-card-title>
            <v-card-text class="text-center">
              <v-btn v-bind:to="`/categoriesItems/${type.name}`">Go to the Categorie</v-btn>
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
      objTypes: [{
        name: "rock",
        img: "https://raw.githubusercontent.com/pollito210/pokemon-store/master/src/assets/types/rock.png",
      },
      {
        name: "water",
        img: "https://raw.githubusercontent.com/pollito210/pokemon-store/master/src/assets/types/water.png",
      },
      {
        name: "electric",
        // img: "https://raw.githubusercontent.com/pollito210/pokemon-store/master/src/assets/types/electric.png",
        img: "https://raw.githubusercontent.com/pollito210/pokemon-store/master/src/assets/types/electric.png",
      },
      {
        name: "grass",
        img: "https://raw.githubusercontent.com/pollito210/pokemon-store/master/src/assets/types/grass.png",
      },
      {
        name: "poison",
        img: "https://raw.githubusercontent.com/pollito210/pokemon-store/master/src/assets/types/poison.png",
      },
      {
        name: "psychic",
        img: "https://raw.githubusercontent.com/pollito210/pokemon-store/master/src/assets/types/psychic.png",
      },
      {
        name: "fire",
        img: "https://raw.githubusercontent.com/pollito210/pokemon-store/master/src/assets/types/fire.png",
      },
      {
        name: "ground",
        img: "https://raw.githubusercontent.com/pollito210/pokemon-store/master/src/assets/types/ground.png",
      },
      {
        name: "ice",
        img: "https://raw.githubusercontent.com/pollito210/pokemon-store/master/src/assets/types/ice.png",
      },
      {
        name: "fighting",
        img: "https://raw.githubusercontent.com/pollito210/pokemon-store/master/src/assets/types/fighting.png",
      },
      {
        name: "ghost",
        img: "https://raw.githubusercontent.com/pollito210/pokemon-store/master/src/assets/types/ghost.png",
      },
      {
        name: "dragon",
        img: "https://raw.githubusercontent.com/pollito210/pokemon-store/master/src/assets/types/dragon.png",
      },
      ],
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