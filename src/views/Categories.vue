<template>
    <v-container>
      <v-row>
        <v-col sm="3" class="pa-2" v-for="type in objTypes" :key="type.name">
          <v-card class="pa-2" color="#B4AFAE">
            <!-- <img height="250" :src="type.img"/> -->
              <v-img height="250" :src="type.img"></v-img>
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
        img: "https://raw.githubusercontent.com/pollito210/pokemon-store/master/src/assets/tipos/ice.png?token=GHSAT0AAAAAABVI2NPWBRWFJ4TFJUKR2IPQYVAGUJQ",
      },
      {
        name: "water",
        img: "../assets/types/water.png",
      },
      {
        name: "electric",
        img: "../assets/types/electric.png",
      },
      {
        name: "grass",
        img: "../assets/types/grass.png",
      },
      {
        name: "poison",
        img: "../assets/types/rock.png",
      },
      {
        name: "psychic",
        img: "../assets/types/rock.png",
      },
      {
        name: "fire",
        img: "../assets/types/rock.png",
      },
      {
        name: "ground",
        img: "../assets/types/rock.png",
      },
      {
        name: "ice",
        img: "../assets/types/rock.png",
      },
      {
        name: "fighting",
        img: "../assets/types/rock.png",
      },
      {
        name: "ghost",
        img: "../assets/types/rock.png",
      },
      {
        name: "dragon",
        img: "../assets/types/rock.png",
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