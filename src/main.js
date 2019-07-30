import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import EvaIcons from 'vue-eva-icons'
import GSignInButton from 'vue-google-signin-button'

Vue.use(BootstrapVue)
Vue.use(EvaIcons)
Vue.use(GSignInButton)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
