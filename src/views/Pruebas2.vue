<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
// import GoogleMapsApiLoader from "google-maps-api-loader";
import { loadedGoogleMapsAPI } from '@/main'

export default {
  data() {
    return {

    };
  },
  mounted(){  
       loadedGoogleMapsAPI.then(()=>{
         this.initMap()
       })
  },
  methods:{
     initMap(){
        console.log(google.maps); //You can now access google maps object here
        new google.maps.Map(document.getElementById('map'), {
          // You configuration goes here
        })
     }
  }
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 400px;
}
</style>
