<template>
  <div class="container">
    <div class="sideMenuContainer" v-show="sideMenu">
      <button @click="sideMenu = !sideMenu" class="xSideMenu">
        <eva-icon name="close" class="icons" height="50px" width="50px"></eva-icon>
      </button>
      <div class="sideMenu">
        <ul>
          <li>
            <img src="../assets/logoCompany.png" height="50px" width="50px" />
          </li>
          <li>Ambulancias México</li>
          <hr />
          <li>Cuenta</li>
          <li>
            <router-link to="/historyAmbulance" class="router">Historial de Servicios</router-link>
          </li>
          <li>Tripulación</li>
          <li>Vehículos</li>
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

    <div class="mapContainer">
      <Map2 class="map2" v-show="map2Ambulance" />
      <AlertAmbulance v-if="!this.$store.state.alertAmbulance && ready" />
      <button class="buttonMenu" @click="sideMenu = !sideMenu">
        <img src alt />
        <img src="../assets/logoCompany.png" height="50px" width="50px" class="imageMenu" v-show="!sideMenu" />
      </button>

      <div class="imageNav" v-show="$store.state.nav">
        <button @click="navDesmadre">
          <Navigation />
        </button>
      </div>

      <iframe
        src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyCHB7fzFranaqMKbud-JdC_4FwwPNsrNKs=&origin=narvarte&destination=tonala10"
        width="100%"
        height="450px"
        v-show="mapDirection"
      ></iframe>
    </div>

    <div class="iniciarDiv" if="sideMenu">
      <button
        class="iniciar"
        @click="online"
        :class="[onlineStyle ? 'iniciar2' : 'iniciar1']"
      >{{ button }}</button>
    </div>

    <InfoAmbulance4Ambulance class="infoAmbulance" v-if="!ready" />
    <DataPatient class="dataPatient" v-if="ready" />

    <div class="tips"></div>
  </div>
</template>

<script>
import InfoAmbulance4Ambulance from "../components/InfoAmbulance4Ambulance";
import AlertAmbulance from "../components/AlertAmbulance";
import DataPatient from "../components/DataPatient";
import Navigation from "../components/Navigation";
import Map2 from "../components/Map2";

export default {
  components: {
    InfoAmbulance4Ambulance,
    AlertAmbulance,
    DataPatient,
    Navigation,
    Map2
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
      AAmbulance: true,
      ready: false,
      map2Ambulance: true,
      mapDirection: false
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
        this.ready = true;
      } else {
        alert("Te encuentras desconectado");
        this.button = this.button === "INICIO" ? "DESCONECTARSE" : "INICIO";
        this.onlineStyle = true;
        this.ready = false;
      }
    },
    navDesmadre() {
      this.map2Ambulance = !this.map2Ambulance;
      this.$store.state.nav = false;
      this.mapDirection = !this.mapDirection;
  
  },
  }
  // saveGeneral() {
  //   axios
  //     .put("http://localhost:3000/clients/" + this.clientId, {
  //       personalInfo: this.general.personalInfo,
  //       professionalInfo: this.general.professionalInfo,
  //       legalInfo: this.general.legalInfo,
  //       additionalInfo: this.general.additionalInfo
  //     })
  //     .then(res => {
  //       this.generalInfoEditMode = false;
  //       // this.reRender();
  //     })
  //     .catch(err => {
  //       alert(
  //         "Lo sentimos, no se pudo editar el registro, favor de intentar más tarde."
  //       );
  //     });
  // }

  // computed: {
  //   // return this.countdownSearchAmbulance();
  //   // countdownSearchAmbulance: () => {
  //   //   if(this.$store.state.segundosRestantes === 0){
  //   //     return this.AAmbulance = !this.AAmbulance
  //   //   }
  //   // }
  // }
};
</script>

<style scoped>
.map2 {
  position: absolute;
}
.map2,
.infoAmbulance {
  position: absolute;
}
.infoAmbulance {
  bottom: 3%;
}
.container {
  height: 812px;
  background-color: white;
}
.sideMenuContainer {
  position: absolute;
}
.router {
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
  position: absolute;
  z-index: 9999;
  background-color: #f3f4f6;
  width: 80%;
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
  position: absolute;
  top: 56%;
}
.containerNav {
  position: absolute;
  bottom: 42%;
  z-index: 9999;
}
.dataPatient {
  position: absolute;
  bottom: 3%;
}
.imageNav {
  position: absolute;
  z-index: 9999;
  top: 10%;
  margin-left: 5%;
}
</style>
