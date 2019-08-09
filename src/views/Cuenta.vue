<template>
  <div class="containerCuenta">
    <div class="formulario">
        <form>
          <input type="text" name="age" placeholder="Edad" v-model="age" autocomplete="on"/>
          <br />
          <input type="text" name="gender" placeholder="Sexo" v-model="gender" autocomplete="on"/>
          <br />
          <input type="text" name="maritalStatus" placeholder="Estado Civil" v-model="maritalStatus" autocomplete="on"/>          
          <br/>
          <input type="text" name="occupation" placeholder="Ocupación" v-model="occupation" autocomplete="on"/>
          <br/>
          <input type="text" name="curp" placeholder="CURP" v-model="curp" autocomplete="on"/>
          <br/>

        </form>
      </div>

      <div class="buttons">
        <button class="button1" @click="mandarDatos">Guardar</button>
        <img src="../assets/ambulance2.png" alt class="ambulance2" height="100px" width="100px"/>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      age:'',
      gender:'',
      maritalStatus:'',
      occupation:'',
      curp:'',
      street:''
    }
  },
  methods: {
    mandarDatos() {
      axios
        .post("http://localhost:3041/userPublic/", {
          age: this.age,
          gender: this.gender,
          maritalStatus: this.maritalStatus,
          occupation: this.occupation,
          curp: this.curp,
        })
        .then(res => {
          console.log(
            this.age,
            this.gender,
            this.maritalStatus,
            this.occupation,
            this.curp
          );
        })
        .catch(err => console.log(err));
    }
  },
  
}
</script>

<style scoped>

</style>