import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(Vuetify);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// import Vuetify from 'vuetify';
// Vue.use(Vuetify);

// new Vue({
// vuetify : new Vuetify(),

new Vue({
  router,
  store,
  vuetify : new Vuetify(),
  render: h => h(App)
}).$mount('#app')
