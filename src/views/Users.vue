<template>
  <div class="container">
    <ul>
      <li>{{ perfil.user4 }} {{ perfil.password4 }}</li>
      <hr />
      <li v-for="(perfil, id) in perfiles" :key="id">{{ perfil.user }} - {{ perfil.password }}</li>
    </ul>

    <div class="containerForm">
      <form>
        User:
        <br />
        <input type="text" name="username" v-model="username" autocomplete="on" />
        <br />Password:
        <br />
        <input
          type="password"
          name="passwordV"
          v-model="passwordV"
          @click="mandarDatos"
          autocomplete="on"
        />
        <button @click="mandarDatos">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user2: null,
      password: null,
      data: "",
      perfil: {
        user4: null,
        password4: null
      },
      perfiles: [],
      
        username:'',
        passwordV:''
  
     
    };
  },
  methods: {
    traerDatos() {
      axios.get("http://localhost:3041/user/user/users").then(res => {
        // this.perfil.user4 = res.data[0].user;
        // this.perfil.password4 = res.data[0].password;
        //console.log(res);
        this.perfiles = res.data;
      });
    },
    mandarDatos(){
     console.log("En envio post------------------");
     axios.post("http://localhost:3041/user/",{
       username:this.username ,
       password:this.passwordV
     }).then(res => {
       console.log(this.username, this.password);
     })
    }
  },
  created() {
    this.traerDatos();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
input,
button {
  margin-left: 5%;
  border: 1px solid lightgray;
}
.containerForm {
  margin-left: 5%;
}
</style>

