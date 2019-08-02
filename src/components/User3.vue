<template>
  <div class="container">
    <div class="paraMi">
      <div class="informacion">
        <div class="containerInput1">
          <eva-icon name="search" class="icons"></eva-icon>
          <!-- <input type="text" placeholder="   ¿En dónde es tu emergencia? " class="input1" /> -->
          <gmap-autocomplete
            @place_changed="setPlace"
            class="input1"
            placeholder="   ¿En dónde es tu emergencia? "
          ></gmap-autocomplete>

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

        <div class="inputNameContainer">
          <div class="inputName">
            <input type="text" placeholder="   Nombre del paciente" class="inputUser3" />
            <eva-icon name="person" class="icons arrow" height="25px" width="25px"></eva-icon>
          </div>
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
        <button class="pedir">Pedir</button>
      </div>
    </div>
  </div>
</template>
<script>
import DatePicker from "vue2-datepicker";
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
      setPlace: ""
    };
  }
};
</script>

<style scoped>
.inputName {
  border-bottom: 1px solid lightgray;
  width: 90%;
}
.inputName input {
  margin-left: 10%;
  padding-left: 1.5%;
}
.buttonInput3 {
  padding-top: 5%;
}
.inputUser3 {
  padding-bottom: 5%;
  font-size: 14px;
  color: grey;
  font-weight: 200;
}
.arrow{
  position: absolute;
    right: 16%;
    margin-top: 0%;
}
.pedir {
    margin-top: 4%;
    width: 90%;
    border-radius: 13px;
    padding: 9px 7px;
    border: #fb2f1b;
    background-color: #fb2f1b;
    color: white;
    letter-spacing: 1.5px;
    text-align: center;
    font-size: 18px;
  }
</style>
