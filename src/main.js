import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import EvaIcons from 'vue-eva-icons'
// import * as  VueGoogleMaps from 'vue2-google-maps'
import { store } from './store.js'
import axios from 'axios';

// import 'vue-googlemaps/dist/vue-googlemaps.css';
// import VueGoogleMaps from 'vue-googlemaps';

// Vue.use(VueGoogleMaps, {
//   load: {
//     // Google API key
//     apiKey: 'AIzaSyCHB7fzFranaqMKbud-JdC_4FwwPNsrNKs',
//     // Enable more Google Maps libraries here
//     libraries: ['places'],
//     // Use new renderer
//     useBetaRenderer: false,
//   },
// })

Vue.use(BootstrapVue)
Vue.use(EvaIcons)
Vue.use(Vuex)
Vue.use(axios)
Vue.config.productionTip = false

// export const loadedGoogleMapsAPI = new Promise( (resolve,reject) => {

//   window['GoogleMapsInit'] = resolve;

//   let GMap = document.createElement('script');

//   GMap.setAttribute('src',
//  `https://maps.googleapis.com/maps/api/js?key=AIzaSyCHB7fzFranaqMKbud-JdC_4FwwPNsrNKs&callback=initMap`);

//   document.body.appendChild(GMap); 
// });




// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyCHB7fzFranaqMKbud-JdC_4FwwPNsrNKs',
//     libraries: 'places', // This is required if you use the Autocomplete plugin
//     // OR: libraries: 'places,drawing'
//     // OR: libraries: 'places,drawing,visualization'
//     // (as you require)

//     //// If you want to set the version, you can do so:
//     // v: '3.26',
//   },

//   //// If you intend to programmatically custom event listener code
//   //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
//   //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
//   //// you might need to turn this on.
//   // autobindAllEvents: false,

//   //// If you want to manually install components, e.g.
//   //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
//   //// Vue.component('GmapMarker', GmapMarker)
//   //// then set installComponents to 'false'.
//   //// If you want to automatically install all the components this property must be set to 'true':
//   installComponents: true
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
