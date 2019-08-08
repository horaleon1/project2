import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import EvaIcons from 'vue-eva-icons'
import { store } from './store.js'
import axios from 'axios';

Vue.use(EvaIcons)
Vue.use(Vuex)
Vue.use(axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
