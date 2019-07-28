<template>
<div class="container">
    <div class="paraMi">
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
          <div class="input3Text">
            <button>
              <h4>Paciente</h4>
            </button>
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

        <div class="buttonInput4" @click="arrowInput4 = !arrowInput4">
          <div class="input4Text">
            <button>
              <h4>Estado del Paciente</h4>
            </button>
          </div>
          <div class="input4Arrow">
            <button>
              <eva-icon name="arrow-ios-downward" class="icons arrow2" height="30px" width="30px"></eva-icon>
            </button>
          </div>
        </div>

        <div class="estadoUsuario" v-show="arrowInput4">
          <div class="listaEstadoUsuario">
            <form action>
              <div class="personStateDiv">
                <h4>Despierto</h4>
                <input type="radio" name="personState" value="awake" />
              </div>
              <div class="personStateDiv">
                <h4>Inconsiente</h4>
                <input type="radio" name="personState" value="unconscious" />
              </div>
              <div class="personStateDiv">
                <h4>No sé</h4>
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
   data(){
    return{
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
      other:false,
      arrowInput3: false,
      arrowInput4: false
    }
  }
  
}
</script>

<style scoped>

</style>
