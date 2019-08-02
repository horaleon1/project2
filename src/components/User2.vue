<template>
 <div class="container">
  <div class="paraMi">
      <div class="informacion">
        <div class="containerInput1">
          <eva-icon name="search" class="icons"></eva-icon>
          <!-- <input type="text" placeholder="   ¿En dónde es tu emergencia? " class="input1" /> -->
        <gmap-autocomplete @place_changed="setPlace" class="input1" placeholder="   ¿En dónde es tu emergencia? " ></gmap-autocomplete>          
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
              Círculo Familiar
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
                Mamá
                <input type="radio" name="personType" value="baby" />
              </div>
              <div class="personTypeDiv">
                Papá
                <input type="radio" name="personType" value="child" />
              </div>
              <div class="personTypeDiv">
                Laura
                <input type="radio" name="personType" value="adult" />
              </div>
            </form>
          </div>
        </div>

        <div class="buttonInput4" @click="arrowInput4 = !arrowInput4">
          <div class="input4Text">
            <button>
              Estado del Paciente
            </button>
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
      arrowInput4: false,
      setPlace:''
    }
  }
};
</script>

<style scoped>

</style>
