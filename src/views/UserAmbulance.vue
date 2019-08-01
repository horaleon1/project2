<template>
  <div class="container">
    <div class="sideMenuContainer" v-show="sideMenu">
      <button @click="sideMenu = !sideMenu" class="xSideMenu">
        <eva-icon name="close" class="icons" height="50px" width="50px"></eva-icon>
      </button>
      <div class="sideMenu">
        <ul>
          <li>
            <img v-bind:src="url" height="50px" width="50px" />
          </li>
          <li>{{ user.results[0].name.first }} {{ user.results[0].name.last }}</li>
          <hr />
          <li>Cuenta</li>
          <li>Historial de Servicios</li>
          <li>Tripulación</li>
          <li>Vehículos</li>
          <li><router-link to="/"  class="router" >Cerrar sesión</router-link> </li>
          <li>
            <!-- <button @click="ayuda = !ayuda">Ayuda</button> -->
          </li>
          <!-- <Ayuda v-show="ayuda" v-on:changeAyuda1="updateAyuda" /> -->
          <li class="version">Versión 1.0.0</li>
        </ul>
      </div>
    </div>

    <div class="mapContainer">
      <button class="buttonMenu" @click="sideMenu = !sideMenu">
        <img src alt />
        <img :src="url" height="50px" width="50px" class="imageMenu" v-show="!sideMenu" />
      </button>
      <SearchingAmbulance v-show="alertAmbulance"/>
      <iframe
        src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyCHB7fzFranaqMKbud-JdC_4FwwPNsrNKs&origin=romanorte&destination=hospitalangelesmexico"
        width="100%"
        height="470px"
      ></iframe>
    </div>

    <div class="iniciarDiv" if="sideMenu">
      <button
        class="iniciar"
        @click="online"
        :class="[onlineStyle ? 'iniciar2' : 'iniciar1']"
      >{{ button }}</button>
    </div>

    

    <!-- <InfoAmbulance/> -->
    <DataPatient/>

    <div class="tips"></div>
  </div>
</template>

<script>
import InfoAmbulance from '../components/InfoAmbulance'
import SearchingAmbulance from '../components/SearchingAmbulance'
import DataPatient from '../components/DataPatient'

export default {
  components:{
    InfoAmbulance,
    SearchingAmbulance,
    DataPatient
  },
  data() {
    return {
      sideMenu: false,
      user: "",
      url: "",
      onlineStyle: true,
      // iniciar:true,
      // iniciar2:false
      button: "INICIO",
      alertAmbulance:true
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
  },
  methods: {
    online() {
      if (this.onlineStyle) {
        alert("Te encuentras disponible para recibir pacientes");
        this.button = this.button === "INICIO" ? "DESCONECTARSE" : "INICIO";
        this.onlineStyle = false;
      } else {
        alert("Te encuentras desconectado");
        this.button = this.button === "INICIO" ? "DESCONECTARSE" : "INICIO";
        this.onlineStyle = true;
      }
    },
    countdownSearchAmbulance(){
      if(this.$store.state.segundosRestantes === 0){
        this.alertAmbulance = !this.alertAmbulance
      } 
    }
  },
  created(){
    this.countdownSearchAmbulance()
  }
};
</script>

<style scoped>
.container {
  height: 812px;
  background-color:white;
}
.sideMenuContainer {
  position: absolute;
}
.router{
  text-decoration: none;
  color: black;
}
.imageMenu {
  border-radius: 50%;
}
.buttonMenu {
  position: absolute;
  right: 1%;
  margin-top: 3%;
}
.xSideMenu {
  margin-top: 5%;
  margin-left: 5%;
  position: absolute;
}
.sideMenu {
  height: 712px;
}
.sideMenu ul li {
  text-align: right;
  margin-right: -12%;
}
hr {
  border-top: 1.5px solid #040acb;
}
.iniciar {
  border: 1px solid #e32b19;
  border-radius: 15px;
  padding: 12px 26px;
  background-color: #e32b19;
  color: white;
  width: 90%;
  margin: 0% 5%;
  text-align: center;
  margin-top: 2%;
}
.iniciar2 {
  border: 1px solid green;
  border-radius: 15px;
  padding: 12px 26px;
  background-color: green;
  color: white;
  width: 90%;
  margin: 0% 5%;
  text-align: center;
  margin-top: 2%;
}
.iniciarDiv {
  margin: 0 auto;
  width: 100%;
}

</style>
