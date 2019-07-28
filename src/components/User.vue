<template>
  <div class="container">
    <div class="sideMenuContainer" v-show="sideMenu">
      <div class="sideMenu">
        <ul>
          <li>
            <img v-bind:src="url" height="50px" width="50px" />
          </li>
          <li>{{ user.results[0].name.first }} {{ user.results[0].name.last }}</li>
          <hr />
          <li>Cuenta</li>
          <li>Historial médico</li>
          <li>Métodos de pago</li>
          <li>Cerrar sesión</li>
          <li>
            <button @click="ayuda = !ayuda">Ayuda</button>
          </li>
          <Ayuda v-show="ayuda" />
          <li class="version">Versión 1.0.0</li>
        </ul>
      </div>
    </div>

    <div class="mapContainer">
      <!-- <h3 class="circleLogo">LOGO</h3> -->
      <button class="circleMenu" @click="sideMenu = !sideMenu">
        <img src alt />
        <eva-icon name="menu" class="icons" height="30px" width="30px"></eva-icon>
      </button>

      <iframe
        src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyCHB7fzFranaqMKbud-JdC_4FwwPNsrNKs&origin=romanorte&destination=hospitalangelesmexico"
        width="100%"
        height="420px"
      ></iframe>
    </div>

    <div class="containerTipoUsuario">
      <div class="listaTipoUsuario">
        <ul>
          <li>
            <button @click="forMe = !forMe">Para mí</button>
          </li>
          <li>
            <button>Circulo Familiar</button>
          </li>
          <li>
            <button>Para otra Persona</button>
          </li>
        </ul>
      </div>
    </div>
    <!-- ////div (Para mi) -->

    <div class="paraMi" v-show="forMe">
      <div class="informacion">
        <div class="containerInput1">
          <eva-icon name="search" class="icons"></eva-icon>
          <input type="text" placeholder="   ¿En dónde es tu emergencia? " class="input1" />
          <button @click="programado = !programado">
            <eva-icon name="calendar" class="icons"></eva-icon>
          </button>
        </div>

        <div v-show="programado" class="programado">
          <h4 class="traslado">
            Traslado
            <br />programado
          </h4>
          <date-picker
            v-model="date"
            lang="en"
            type="date"
            format="dd-MM-YY"
            placeholder="Date"
            confirm
            class="date"
          ></date-picker>
          <date-picker
            v-model="time"
            lang="en"
            type="time"
            format="HH:MM p"
            :minute-step="1"
            placeholder="Time"
            confirm
            class="time"
          ></date-picker>
        </div>

        <div class="buttonInput3" @click="arrowInput3 = !arrowInput3">
          <button>
            Paciente 
            <eva-icon name="arrow-ios-downward" class="icons arrow1" height="30px" width="30px"></eva-icon>
          </button>
        </div>

        <div class="containerInput3" v-show="arrowInput3">
          <div class="inputContainer3">
            <form action>
              <div class="personTypeDiv">
                <h4>Bebe 0 - 12 meses</h4>
                <input type="radio" name="personType" value="baby" />
              </div>
              <div class="personTypeDiv">
                <h4>Niño 1 - 8 años</h4>
                <input type="radio" name="personType" value="child" />
              </div>
              <div class="personTypeDiv">
                <h4>Adulto + 8 años</h4>
                <input type="radio" name="personType" value="adult" />
              </div>
            </form>
          </div>
        </div>

        <!-- <div class="containerInput4">
        <input type="text" placeholder="    Síntomas" class="input3"> 
        <eva-icon name="list" class="icons" height="30px" width="30px"></eva-icon>
        </div>-->

        <div class="buttonInput4" @click="arrowInput4 = !arrowInput4">
          <button>
            Estado del Paciente 
            <eva-icon name="arrow-ios-downward" class="icons arrow2" height="30px" width="30px"></eva-icon>
          </button>
        </div>

        <div class="estadoUsuario" v-show="arrowInput4">
          <div class="listaEstadoUsuario">
            <form action>
              <input type="radio" name="personState" value="awake" /> Despierto
              <input type="radio" name="personState" value="unconscious" /> Inconsiente
              <input type="radio" name="personState" value="dontKnow" /> No sé
            </form>
          </div>
        </div>
        <button class="pedir">Pedir</button>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import Ayuda from "../components/Ayuda.vue";

export default {
  components: {
    DatePicker,
    Ayuda
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
      forMe: true,
      arrowInput3: false,
      arrowInput4: false
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
  created() {}
};
</script>

<style scoped>
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

.containerInput3 form input {
}

.sideMenuContainer {
  position: absolute;
  background-color: #f3f4f6;
  height: 100%;
  width: 100%;
  right: 0%;
}
.sideMenu {
  margin-left: 10%;
  margin-top: 30%;
  text-align: right;
  margin-right: 25%;
  font-size: 25px;
}
.sideMenu ul li {
  list-style: none;
  margin-top: 20%;
}

.sideMenu ul hr {
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
.input3 {
  width: 70%;
  height: 40px;
  margin: 5% 6%;
  border-radius: 15px;
  background-color: #e4e4e5;
  border: #e4e4e5;
}
.containerInput4 {
  margin-top: -5%;
}
.programado {
  margin-left: 5%;
  margin-bottom: 10%;
  width: 100%;
  margin-top: 5%;
}
.date {
  margin-bottom: 5%;
}
.traslado {
  color: #040acb;
  text-align: right;
  margin-right: 15%;
  position: absolute;
  right: -10%;
}

.listaTipoUsuario ul {
  list-style: none;
  margin-left: -10%;
}
.listaTipoUsuario ul li {
  display: inline;
}
.listaTipoUsuario {
  border-bottom: 1px solid lightgrey;
  margin: 0% 5%;
}
.listaEstadoUsuario ul {
  list-style: none;
}
.listaEstadoUsuario ul li {
  display: inline;
  margin-left: 10%;
}
.arrowInput3 {
  margin-right: 12%;
  position: absolute;
  display: inline;
}
.estadoUsuario h3 {
  font-size: 14px;
  color: grey;
  font-weight: 200;
  letter-spacing: 0.5px;
  margin-left: 13%;
  margin-top: 15%;
}
.inputContainer3 {
  margin-left: 10%;
}
.personTypeDiv h4 {
  font-size: 14px;
  color: grey;
  font-weight: 500;
  letter-spacing: 0.5px;
}
.arrowInput3 {
  border-bottom: 1px solid lightgrey;
  margin: 0% 5%;
  width: 90%;
  margin-bottom: 15%;
}
.buttonInput3, .buttonInput4{
  border-bottom: 1px solid lightgrey;
  width: 90%;
  padding-right: -5%;
}
.buttonInput3 button, .buttonInput4 button{
  margin: 5% 12%;
  font-size: 15px;
  color: grey;
  font-weight: 200;
  letter-spacing: 0.5px;
}
.arrow1{
  /* position: absolute;
  right: 9%;
  top: 68.5%; */
}
.arrow2{
}
.listaEstadoUsuario{
  margin: 5% 0%;
  font-size: 15px;
  color: grey;
  font-weight: 200;
  letter-spacing: 0.5px;
}
.listaEstadoUsuario form input{
  margin-left: 5%;
}
</style>

