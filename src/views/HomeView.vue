<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> PokeShopee </v-list-item-title>
          <v-list-item-subtitle class="f-yellow">
            Capturalos a todos aqui
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>PokeShopee</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon x-large>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon x-large>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
// import { mdiAccount, mdiCart, mdiStore  } from "@mdi/js";

export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Categories", icon: "mdi-view-list" },
        { title: "Shopping cart", icon: "mdi-cart" },
        { title: "Us", icon: "mdi-store" },
      ],
      right: null,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.f-yellow {
  color: #ffd700 !important;
  font-weight: 700;
}

.navbar {
  text-align: end !important;
}
</style>
