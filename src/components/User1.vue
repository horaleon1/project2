<template>
  <div class="container">
    <div class="paraMi">
      <div class="informacion">
        <div class="containerInput1">
          <eva-icon name="person-delete" class="icons"></eva-icon>
          <input
            type="text"
            placeholder="   Ingresa el padecimiento... "
            class="input1"
            ref="autocomplete"
          />
          <!-- <vue-google-autocomplete
            id="map"
            class="form-control input1"
            placeholder="  ¿En dónde es tu emergencia?"
            v-on:placechanged="getAddressData"
          ></vue-google-autocomplete>-->

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
          <div class="input3Text">
            <button>Edad del paciente</button>
          </div>
          <div class="input3Arrow">
            <button>
              <eva-icon name="arrow-ios-downward" class="icons arrow1" height="30px" width="30px"></eva-icon>
            </button>
          </div>
        </div>

        <div class="containerInput3" v-show="arrowInput3">
          <div class="inputContainer3">
            <form action>
              <div class="personTypeDiv">
                Bebe 0 - 12 meses
                <input type="radio" name="personType" value="baby" />
              </div>
              <div class="personTypeDiv">
                Niño 1 - 8 años
                <input type="radio" name="personType" value="child" />
              </div>
              <div class="personTypeDiv">
                Adulto + 8 años
                <input type="radio" name="personType" value="adult" />
              </div>
            </form>
          </div>
        </div>

        <div class="containerInput3Full">
          <div class="inputContainer3Full">
            <div class="listInputContainer3Full">
              <h5>Edad del paciente</h5>
              <ul>
                <li>
                  <input type="radio" name="personType" value="baby" />
                  <br />
                  <br />Bebé
                  <br />0-12 meses
                </li>
                <li>
                  <input type="radio" name="personType" value="child" />
                  <br />
                  <br />Niño
                  <br />1 - 8 años
                </li>
                <li>
                  <input type="radio" name="personType" value="adult" />
                  <br />
                  <br />Adulto
                  <br />+ 8 años
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="buttonInput4" @click="arrowInput4 = !arrowInput4">
          <div class="input4Text">
            <button>Estado del Paciente</button>
          </div>
          <div class="input4Arrow">
            <button>
              <eva-icon name="arrow-ios-downward" class="icons arrow2" height="30px" width="30px"></eva-icon>
            </button>
          </div>
        </div>

        <div class="estadoUsuario" v-show="arrowInput4">
          <div class="inputContainer3">
            <form action>
              <div class="personTypeDiv">
                Despierto
                <input type="radio" name="personState" value="awake" />
              </div>
              <div class="personTypeDiv">
                Inconsiente
                <input type="radio" name="personState" value="unconscious" />
              </div>
              <div class="personTypeDiv">
                No sé
                <input type="radio" name="personState" value="dontKnow" />
              </div>
            </form>
          </div>
        </div>

        <div class="containerInput4Full">
          <div class="inputContainer4Full">
            <div class="listInputContainer4Full">
              <h5>Estado del paciente</h5>
              <ul>
                <li>
                <input type="radio" name="personState" value="awake" />                  
                  <br />
                  <br />
                  Despierto
                </li>
                <li>
                <input type="radio" name="personState" value="unconscious" />                  
                  <br />
                  <br />
                Inconsiente
                </li>
                <li>
                 <input type="radio" name="personState" value="dontKnow" />
                  <br />
                  <br />
                  No sé
                </li>
              </ul>
            </div>
          </div>
        </div>

        <button class="pedir" @click="pedirServicio">Seguir</button>
      </div>
    </div>
  </div>
</template>


<script>
import DatePicker from "vue2-datepicker";
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
  components: {
    DatePicker
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
      circle: false,
      other: false,
      arrowInput3: false,
      arrowInput4: false,
      key: "AIzaSyCHB7fzFranaqMKbud-JdC_4FwwPNsrNKs",
      setPlace: ""
    };
  },
  methods: {
    pedirServicio() {
      this.$store.state.pedir = !this.$store.state.pedir;
      this.$store.state.pedido = !this.$store.state.pedido;
    }
  }
};
</script>

<style >
@media (min-width: 994px) {
  .container {
    background-color: #f3f4f6;
  }
  .informacion .containerInput1 {
    width: 100%;
    background-color: transparent;
    padding-right: 0%;
  }
  .containerInput1 {
    border-bottom: 1px solid lightgrey !important;
    width: 95%;
  }
  .input1 {
    width: 70%;
    height: 35px;
    margin: 3% 4%;
    font-size: 14px;
    color: grey;
    font-weight: 200;
    border-radius: 10px;
    border: 1px solid lightgrey;
    background-color: #f3f4f6;
  }
  .icons {
    fill: #040acb;
    background-color: transparent;
    border: 0px solid transparent;
  }
  .icons:active {
    opacity: 0.5;
  }
  .pedir {
    width: 100%;
    border-radius: 15px;
    padding: 8px 10px;
    border: #fb2f1b;
    background-color: #fb2f1b;
    color: white;
    letter-spacing: 1.5px;
    text-align: center;
    font-size: 20px;
    margin-top: 10%;
  }
  .pedir:active {
    opacity: 0.7;
  }
  .traslado {
    color: #040acb;
    margin-left: 5%;
  }
  .buttonInput3 {
    margin-top: 5%;
  }
  .input3Arrow,
  .input4Arrow,
  .buttonInput3,
  .buttonInput4 {
    visibility: hidden;
  }
  .listInputContainer3Full {
    width: 350px;
  }
  .listInputContainer3Full ul {
    list-style: none;
  }
  .listInputContainer3Full ul li {
    display: inline-block;
    font-size: 14px;
    padding-right: 5%;
    padding-left: 5%;
  }
  .listInputContainer3Full ul li:not(:nth-child(3)) {
    border-right: 1px solid lightgray;
  }
  .containerInput3 {
    width: 100%;
  }
  .listInputContainer4Full {
    width: 350px;
  }
  .listInputContainer4Full ul {
    list-style: none;
  }
  .listInputContainer4Full ul li {
    display: inline-block;
    font-size: 14px;
    padding-right: 5%;
    padding-left: 5%;
  }
  .listInputContainer4Full ul li:not(:nth-child(3)) {
    border-right: 1px solid lightgray;
  }
  .buttonInput3,.buttonInput4{
    position: absolute;
  }
}

@media (max-width: 993px) {
  .containerInput3Full, .containerInput4Full{
    position: absolute;
    visibility: hidden;
  }
  .container {
    border-top: 1px solid lightgray;
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
    width: 70%;
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
  .containerInput1 {
    margin-bottom: 5%;
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
    margin-top: 10%;
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
    font-size: 14px;
  }

  .listaTipoUsuario ul {
    list-style: none;
    margin-left: -10%;
  }
  .listaTipoUsuario ul li {
    display: inline;
  }
  .listaTipoUsuario {
    margin: 0% 5%;
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
    margin-bottom: 10%;
  }
  .buttonInput3 {
    font-size: 14px;
    color: grey;
    font-weight: 200;
    letter-spacing: 0.5px;
    margin-bottom: 5%;
  }

  .buttonInput3 button,
  .buttonInput4 button {
    font-size: 14px;
    color: grey;
    font-weight: 100;
    letter-spacing: 0.5px;
    padding-bottom: 5%;
    padding-left: 5%;
  }
  .arrow1 {
    position: absolute;
    right: 16%;
    margin-top: -5%;
  }
  .arrow2 {
    position: absolute;
    right: 16%;
    margin-top: -5%;
  }
  .listaEstadoUsuario,
  .inputContainer3 {
    margin: 5% 18%;
    font-size: 15px;
    color: grey;
    font-weight: 100;
    letter-spacing: 0.5px;
  }
  .listaEstadoUsuario form input {
    margin-left: 5%;
    display: block;
    padding-bottom: 5%;
  }
  .input3Text,
  .input4Text {
    display: inline;
    margin-left: 10%;
  }
  .input3Arrow,
  .input4Arrow {
    display: inline;
  }
  .buttonInput4,
  .buttonInput3 {
    border-bottom: 1px solid lightgray;
    width: 90%;
  }
  .personTypeDiv {
    padding-bottom: 5%;
  }
}
</style>
