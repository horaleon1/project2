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
          <li>Cerrar sesión</li>
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
        <img v-bind:src="url" height="50px" width="50px" class="imageMenu" v-show="!sideMenu" />
        <!-- <eva-icon name="menu" class="icons" height="30px" width="30px"></eva-icon> -->
      </button>

      

      <iframe
        src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyCHB7fzFranaqMKbud-JdC_4FwwPNsrNKs&origin=romanorte&destination=hospitalangelesmexico"
        width="100%"
        height="600px"
      ></iframe>
    </div>

    <div class="iniciarDiv" if="sideMenu">
        <button class="iniciar" @click="online">INICIAR</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideMenu: false,
      user: "",
      url: ""
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
      alert("Te encuentras disponible para recibir pacientes");
    }
  }
};
</script>

<style scoped>
.container{
  height: 812px;
}
.sideMenuContainer {
  position: absolute;
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
.sideMenu ul li {
  text-align: right;
  margin-right: -12%;
}
hr {
  border-top: 1.5px solid #040acb;
}
.iniciar {
  border: 1px solid #E32B19;
  border-radius: 15px;
  padding: 12px 26px;
  background-color: #E32B19;
  color:white;
  width: 90%;
  margin: 0%  5%;
  text-align: center;
  margin-top: 2%;
}
.iniciarDiv{
  margin: 0 auto;
  width: 100%;
 
}
</style>
