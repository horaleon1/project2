<template>
  <div class="container">
    <div class="center">
      <router-link to="/" class="router3">
        <eva-icon name="arrow-back" class="arrow" height="30px" width="30px"></eva-icon>
      </router-link>
      <div class="logoS">
        <img src="../assets/h.png" alt class="logoSign" height="100px" width="100px" />
      </div>
      <div class="titulos">
        <h2>Registrate</h2>
        <h4>Ingresa tus datos para crear una cuenta.</h4>
      </div>
      <div class="formulario">
        <form>
          <input type="text" name="name" placeholder="Nombre" v-model="name" autocomplete="on"/>
          <input type="text" name="lastName" placeholder="Apellido" v-model="lastName" autocomplete="on"/>
          <input type="text" name="email" placeholder="Correo Electronico" v-model="email" autocomplete="on"/>
          <br />
          <input type="password" name="password" placeholder="Contraseña" v-model="password" autocomplete="on"/>
          <br />
          <input type="text" name="cellphone" placeholder="Número de teléfono" v-model="cellphone" @click="mandarDatos" autocomplete="on"/>
          <br />
        </form>
      </div>

      <div class="buttons">
        <button class="button1" @click="mandarDatos">Registrarse</button>
        <router-link to="/signin" class="router1">Iniciar sesión</router-link>
        <img src="../assets/ambulance2.png" alt class="ambulance2" />
      </div>
      <!-- <div class="bottonesSociales">
        <ul>
          <li><v-facebook-login app-id="966242223397117" class="facebook"></v-facebook-login></li>
          <li class="google"><button><img src="../assets/google.png" alt=""><span class="buttonText">Sign in with Google</span></button></li>
        </ul>
      </div>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";

import VFacebookLogin from "vue-facebook-login-component";
export default {
  components: {
    VFacebookLogin
  },
  data() {
    return {
      name: "",
      lastName: "",
      email: "",
      password: "",
      cellphone: ""
    };
  },
  methods: {
    mandarDatos() {
      axios
        .post("http://localhost:3041/userPublic/", {
          name: this.name,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          cellphone: this.cellphone
        })
        .then(res => {
          console.log(
            this.name,
            this.lastName,
            this.email,
            this.password,
            this.cellphone
          );
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
@media (min-width: 993px) {
  .container {
    background-color: #f3f4f6;
    width: 100%;
    height: 1000px;
    margin-top: -5%;
    overflow: hidden;
  }
  .center {
    margin: auto;
    width: 50%;
    margin-top: 2%;
    /* text-align: center; */
  }
  .logoS {
    margin: 0% 0% 0% 5%;
  }
  .titulos {
    margin-top: 0%;
    margin-left: 8%;
    margin-right: 5%;
  }
  .formulario {
    margin-top: 5%;
    margin-left: 7%;
    margin-right: 5%;
  }
  input:nth-child(1) {
    width: 40%;
  }
  input:nth-child(2) {
    width: 40%;
  }
  input {
    width: 86%;
    margin-bottom: 3%;
    margin-left: 1%;
    border-radius: 10px;
    padding: 14px;
    border: 1px solid #f3f4f6;
  }
  .buttons {
    margin-top: 0%;
  }
  .router1 {
    display: block;
    width: 82%;
    margin-top: 3%;
    margin-left: 5%;
    margin-right: 5%;
    border: 1px solid #040acb;
    padding: 10px;
    border-radius: 14px;
    background-color: #040acb;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
  }
  .router2 {
    display: block;
    width: 80%;
    margin-top: 3%;
    margin-left: 5%;
    margin-right: 5%;
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 14px;
    background-color: white;
    color: grey;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
  }
  .button1 {
    display: block;
    width: 85%;
    margin-top: 3%;
    margin-left: 5%;
    margin-right: 5%;
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 14px;
    background-color: white;
    color: grey;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
  }
  .arrow {
    fill: #040acb;
    margin-left: -35%;
    margin-top: 5%;
  }
  .facebook {
    width: 86%;
    margin-top: 3%;
    margin-left: 1%;
    margin-right: 5%;
    border-radius: 14px;
  }

  .google button {
    width: 86%;
    margin-top: 3%;
    margin-left: 1%;
    border-radius: 14px;
    height: 40px;
    color: grey;
    border: 1px solid lightgray;
    text-align: center;
  }
  .google button img {
    height: 25px;
    width: 25px;
    margin-left: -3%;
  }
  ul {
    list-style: none;
  }
  .buttonText {
    margin-left: 1.5%;
  }
  .ambulance2 {
    height: 180px;
    width: 200px;
    margin-left: 35%;
    margin-top: 8%;
  }
}

@media (max-width: 993px) {
  .container {
    background-color: #f3f4f6;
    height: 900px;
  }
  .logoS {
    margin: 0% 0% 5% 35%;
  }
  .titulos {
    margin-top: 5%;
    margin-left: 8%;
    margin-right: 5%;
  }
  .formulario {
    margin-top: 10%;
    margin-left: 8%;
    margin-right: 5%;
  }
  input {
    width: 85%;
    margin-bottom: 3%;
    margin-left: 1%;
    border-radius: 10px;
    padding: 14px;
    border: 1px solid #f3f4f6;
  }
  input:nth-child(1) {
    width: 85%;
  }
  input:nth-child(2) {
    width: 85%;
  }
  .buttons {
    margin-top: 5%;
  }
  .router1 {
    display: block;
    width: 80%;
    margin-top: 7%;
    margin-left: 7%;
    margin-right: 5%;
    border: 1px solid #040acb;
    padding: 10px;
    border-radius: 14px;
    background-color: #040acb;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
  }
  .router2 {
    display: block;
    width: 81%;
    margin-top: 7%;
    margin-left: 7%;
    margin-right: 5%;
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 14px;
    background-color: white;
    color: grey;
    text-align: center;
    text-decoration: none;
  }
  .button1 {
    display: block;
    width: 85.5%;
    margin-top: 7%;
    margin-left: 7%;
    margin-right: 5%;
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 14px;
    background-color: white;
    color: grey;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
  }
  .arrow {
    fill: #040acb;
    margin-top: 5%;
    margin-left: 5%;
  }
  .facebook {
    margin-top: 5%;
    margin-left: -6%;
    margin-right: 5%;
    border-radius: 14px;
    width: 101%;
  }
  .google button {
    width: 101%;
    margin-top: 5%;
    margin-left: -6%;
    margin-right: 5%;
    border-radius: 14px;
    height: 40px;
    color: grey;
    border: 1px solid lightgray;
    text-align: center;
    background-color: white;
  }
  .google button img {
    height: 25px;
    width: 25px;
    margin-right: 5%;
    position: relative;
  }
  ul {
    list-style: none;
  }
  .buttonText {
    display: none;
  }
  .ambulance2 {
    height: 90px;
    width: 100px;
    margin-left: 38%;
    margin-top: 10%;
  }
}
</style>

