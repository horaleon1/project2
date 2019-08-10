<template>
  <div class="container">
    <div class="sideMenuContainer" v-show="sideMenu">
      <div class="sideMenu">
        <ul>
          <li>
            <img v-bind:src="url" height="50px" width="50px" />
          </li>
          <li> Jorge Perez</li>
          <hr />
          <li>
            <router-link to="/account" class="router">Cuenta</router-link>
          </li>
          <li>Historial médico</li>
          <li>Círculo Familiar</li>
          <li>
            <router-link to="/historyUser" class="router">Historial de Servicios</router-link>
          </li>
          <li>
            <router-link to="/" class="router">Cerrar sesión</router-link>
          </li>

          <li>
            <!-- <button @click="ayuda = !ayuda">Ayuda</button> -->
          </li>
          <!-- <Ayuda v-show="ayuda" v-on:changeAyuda1="updateAyuda" /> -->
          <li class="version">Versión 1.0.0</li>
        </ul>
      </div>
    </div>

    <div class="fullMenu">
      <div class="fullMenuList">
        <ul>
          <li>
            <img v-bind:src="url" height="50px" width="50px" />
          </li>
          <li>Nombre Apellido</li>
          <li> <hr> </li>
          <li>Cuenta</li>
          <li>Historial médico</li>
          <li>Círculo familiar</li>
          <li>
            <router-link to="/historyUser" class="router">Historial de Servicios</router-link>
          </li>
          <li>
            <router-link to="/" class="router">Cerrar sesión</router-link>
          </li>
          <li class="version">Versión 1.0.0</li>
        </ul>
      </div>
    </div>

     <ConfirmAddress v-show="$store.state.confirmAddress"/>


    <div class="mapContainer">
      <div id="map">
        <Map2 class="map2" />
        <Map3 class="map3" />
      </div>
      <!-- <img src="../assets/h.png" alt="Logo miAmbulancia" class="logoMap"> -->
      <button class="circleMenu" @click="sideMenu = !sideMenu">
        <img src alt />
        <eva-icon name="menu" class="icons" height="30px" width="30px"></eva-icon>
      </button>

      <!-- <iframe
        src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyCHB7fzFranaqMKbud-JdC_4FwwPNsrNKs&origin=romanorte&destination=hospitalangelesmexico"
        width="100%"
        height="430px"
      ></iframe>-->

      <!-- <gmapMap
        :center="{lat:19.4326, lng:-99.1332}"
        :zoom="13.5"
        map-type-id="terrain"
        style="width: 100%; height: 450px"
        :options="{
   zoomControl: false,
   mapTypeControl: false,
   scaleControl: false,
   scaleControlOption:true,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: false,
   disableDefaultUi: false,
   
 }"
      >
        <gmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        />
      </gmapMap>-->

      <!-- @click="center=m.position" -->

      <!-- //once pedir and accepted by the Userambulance , user gets the UserTimeRemaining -->
      <!-- <UserTimeRemaining/> -->
     
    </div>


    <AlertUser v-show="$store.state.pedir" class="alertUser"/>

    <div class="containerTipoUsuario" v-show="$store.state.seguir">
      <div class="listaTipoUsuario">
        <button @click="user1F">Para mí</button>
        <button @click="user2F">Circulo Familiar</button>
        <button @click="user3F">Otra Persona</button>

        <User1 v-show="user1" />
        <User2 v-show="user2" />
        <User3 v-show="user3" />
      </div>
    </div>

    <!-- //////////////////////   -->

    <!-- //once the ambulace accepts the service the User gets the info of the ambulace -->
    <!-- <InfoAmbulance/> -->
    

    <!-- //once the ambulace accepts the service the User gets the remaining time -->

    <!-- <UserTimeRemaining/> -->
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import Ayuda from "../components/Ayuda";
import User1 from "../components/User1";
import User2 from "../components/User2";
import User3 from "../components/User3";
import AlertAmbulance from "../components/AlertAmbulance";
import InfoAmbulance from "../components/InfoAmbulance";
import UserTimeRemaining from "../components/UserTimeRemaining";
import AlertUser from "../components/AlertUser";
import Map2 from "../components/Map2";
import Map3 from "../components/Map3";
import ConfirmAddress from "../components/ConfirmAddress"

import { mapState } from "vuex";

export default {
  components: {
    DatePicker,
    Ayuda,
    User1,
    User2,
    User3,
    AlertAmbulance,
    InfoAmbulance,
    UserTimeRemaining,
    AlertUser,
    Map2,
    Map3,
    ConfirmAddress
  },
  data() {
    return {
      sugerencias: false,
      programado: false,
      sideMenu: false,
      user: "",
      date: "",
      time: "",
      url: "",
      ayuda: false,
      user1: true,
      user2: false,
      user3: false,
      arrowInput3: false,
      arrowInput4: false,
      myMarkers: [],
      places: [],
      currentPlace: null,
      markers: "",

      lng: "",
      lat: "",
      center: {
        long: "",
        lati: ""
      }
    };
  },
  mounted() {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        this.user = data;
        this.url = data.results[0].picture.medium;
      })
      .catch(err => console.log(err));

    // ////google maps
    // this.geolocate();
    // ///google maps
  },
  // created() {
  //   this.currentLocation();
  // },
  methods: {
    user1F() {
      this.user1 = true;
      this.user2 = false;
      this.user3 = false;
    },
    user2F() {
      this.user1 = false;
      this.user2 = true;
      this.user3 = false;
    },
    user3F() {
      this.user1 = false;
      this.user2 = false;
      this.user3 = true;
    },
    changeAyuda() {
      this.$emit("changeAyuda1", "false");
    },

    // currentLocation() {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    //   }
    // },
    // displayLocationInfo(position) {
    //   this.long = position.coords.longitude;
    //   this.lati = position.coords.latitude;

    //   console.log(`longitude: ${this.long}  latitude: ${this.lati}`);
    // },

    // addMarker(){
    //   const marker = new google.maps.Marker({
    //     position = this.center,

    //   });
    // },
    // my own google maps

    //google maps

    // setPlace(place) {
    //   this.currentPlace = place;
    // },
    // addMarker() {
    //   if (this.currentPlace) {
    //     const marker = {
    //       lat: this.currentPlace.geometry.location.lat(),
    //       lng: this.currentPlace.geometry.location.lng()
    //     };
    //     this.markers.push({ position: marker });
    //     this.places.push(this.currentPlace);
    //     this.center = marker;
    //     this.currentPlace = null;
    //   }
    // },
    // geolocate: function() {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.center = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };
    //   });
    // },

    //////google maps end
  },
    filters:{
      capitalize: function(value) {
        if (!value) return "";
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    },
  
};
// mounted: function(){
//       import  from "https://maps.googleapis.com/maps/api/js?key=AIzaSyCHB7fzFranaqMKbud-JdC_4FwwPNsrNKs&callback=initMap"
//       console.log("map: ", google.maps)
//           this.map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat:61.180059, lng: -149.822075},
//           scrollwheel: false,
//           zoom: 4
//           })
// }

//javascript

// Initialize and add the map
// function initMap() {
//   // The location of Uluru
//   var uluru = {lat: -25.344, lng: 131.036};
//   // The map, centered at Uluru
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 4, center: uluru});
//   // The marker, positioned at Uluru
//   var marker = new google.maps.Marker({position: uluru, map: map});
// }
</script>

<style scoped>
@media (min-width: 993px) {
  .map2 {
    visibility: hidden;
    position: absolute;
  }

  .alertUser{
    margin-left: 21%;
    position: absolute;
  }
  .sideMenuContainer, .circleMenu {
    visibility: hidden;
  }
  .fullMenu {
    position: absolute;
    right: 0%;
    text-align: right;
    width: 14.5%;
    height: 850px;
    border-radius: 10px;
    border: 1px solid lightgray;
    background-color: #f3f3f3;
  }
  .fullMenuList {
    padding-top: 20%;
  }
  .fullMenuList ul {
    list-style: none;
    margin-right: 10%;
  }
  .fullMenuList ul li{
    padding-bottom: 15%;
  }
  .ful{
  padding-bottom: 30%;
  }
  .fullMenuList ul li:nth-child(8){
    padding-bottom: 120%;
  }
  .fullMenuList ul li img{
    border-radius: 50%;
  }
  .router{
    text-decoration: none;
    color: black;
  }
  .containerTipoUsuario{
    position: absolute;
    top: 0%;
    width: 400px;
    margin-top: 3%;
    margin-left: 3%;
  }
  .listaTipoUsuario{
    padding: 5%; 
    background-color: #f3f4f6;
    border-radius: 18px;
    border: 1px solid lightgray;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .listaTipoUsuario button:enabled{
    margin-right: 3%;
    border: 0px;
    background-color: transparent;
    color: black;
    padding-bottom: 5%;
    color: #040acb;
  }
 .listaTipoUsuario button:focus{
   color: #fb2f1b;
  }

}

@media (max-width: 992px) {
  .map3 {
    visibility: hidden;
    position: absolute;
  }
  .fullMenu {
    visibility: hidden;
    position: absolute;
  }
  #div {
    width: 100%;
    height: 450px;
  }
  .container {
    background-color: #ffffff;
  }
  .circleLogo,
  .circleMenu {
    position: absolute;
  }

  .circleMenu {
    border-radius: 50%;
    border: 1px solid white;
    background-color: white;
    opacity: 0.9;
    padding: 10px;
    right: 5%;
    top: 2%;
    z-index: 9999;
  }
  .informacion {
    width: 100%;
    margin-left: 5%;
  }
  .informacion .containerInput1 {
    border-bottom: 1px solid lightgrey !important;
    width: 90%;
  }

  .input1 {
    width: 75%;
    height: 40px;
    margin: 2% 1%;
    font-size: 14px;
    color: grey;
    font-weight: 200;
  }
  .icons {
    fill: #040acb;
  }
  .icons:active {
    opacity: 0.5;
  }
  .containerInput2 {
    margin-top: -25px;
  }
  .containerInput2 button {
    fill: #040acb;
  }
  .input2 {
    width: 70%;
    height: 40px;
    margin: 5% 6%;
    border-radius: 15px;
    background-color: #e4e4e5;
    border: #e4e4e5;
  }
  .sugerencias {
    width: 90%;
  }
  .pedir {
    width: 90%;
    border-radius: 15px;
    padding: 12px 10px;
    border: #fb2f1b;
    background-color: #fb2f1b;
    color: white;
    letter-spacing: 1.5px;
    text-align: center;
    font-size: 20px;
    margin-top: 5%;
  }
  .pedir:active {
    opacity: 0.7;
  }

  .sideMenuContainer {
    position: absolute;
    background-color: #f3f4f6;
    height: 100%;
    width: 100%;
    right: 0%;
    z-index: 9999;
  }
  .sideMenu {
    margin-left: 10%;
    margin-top: 30%;
    text-align: right;
    margin-right: 25%;
    font-size: 25px;
    height: 100%;
  }
  .sideMenu ul li {
    list-style: none;
    margin-top: 10%;
  }
  .ayuda {
    font-size: 30px;
  }
  .sideMenu ul {
    width: 100%;
    margin-left: 10%;
    margin-top: 20%;
  }
  .sideMenu ul li img {
    border-radius: 50%;
  }
  .person {
    position: absolute;
    right: 3%;
    top: 78%;
  }
  .containerTipoUsuario {
    margin-top: 7%;
  }
  .listaTipoUsuario button:focus {
    color: #040acb;
    font-weight: 700;
  }
  .listaTipoUsuario button {
    padding-bottom: 7%;
    font-size: 15px;
  }
  .router {
    text-decoration: none;
    color: black;
  }
  .logoMap {
    position: absolute;
    height: 100px;
    width: 100px;
    margin-top: -120%;
    margin-left: 3%;
    z-index: 9999;
  }
}
</style>

