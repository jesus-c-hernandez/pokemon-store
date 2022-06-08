<template>
  <v-app id="inspire">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.8.95/css/materialdesignicons.css">
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
        <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
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
      <v-btn icon x-large v-bind:to="{ name: 'login' }">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
        <template #button-content>
          &#x1f464;
        </template>
        <b-dropdown-item>Log In</b-dropdown-item>
        <b-dropdown-item>Usser Perfil</b-dropdown-item>
        <b-dropdown-item>Log Out</b-dropdown-item>
      </b-dropdown>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer color="#FAFAFA" app>
      <span>&copy; 2022</span>
    </v-footer>
  </v-app>
</template>

<script>
// import { mdiAccount, mdiCart, mdiStore  } from "@mdi/js";

export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", link: "/" },
        { title: "Categories", icon: "mdi-view-list", link: "/categories" },
        { title: "Shopping cart", icon: "mdi-cart", link: "/cart" },
        { title: "Us", icon: "mdi-store", link: "/about" },
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
