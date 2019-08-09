<template>
  <div class="container">
    <div class="center">
      <router-link to="/" class="router3"><eva-icon name="arrow-back" class="arrow" height="30px" width="30px"></eva-icon></router-link>
      <div class="logoS">
        <img src="../assets/h.png" alt class="logoSign" height="100px" width="100px" />
      </div>
      <div class="titulos">
        <h3>Mas cerca, en lugar correcto y a tiempo.</h3>
      </div>
       
      <div class="formulario">
        <form>
          <input type="text" name="email" placeholder="Correo Electronico" v-model="correoInput" autocomplete="on"/><br>
          <input type="password" name="password" placeholder="Contraseña" v-model="constrasenaInput" autocomplete="on"/><br>
        </form>
      </div>
      
      <div class="buttons">
        <button to="/signin" class="button1" @submit="hacerUnaCuenta">Iniciar sesión</button>
        <router-link to="/signup" class="router2" >Registrarse</router-link>
        <!-- <img src="../assets/ambulance2.png" alt="ambulance" class="ambulance2"> -->
      </div>
      <div class="bottonesSociales">
        <ul>
          <!-- <li><v-facebook-login app-id="966242223397117" id="facebook" ></v-facebook-login></li> -->
          <!-- <li class="google" id="facebook"><button><img src="../assets/google.png" alt=""><span class="buttonText">Sign in with Facebook</span></button></li> -->
          <!-- <li class="google"><button><img src="../assets/google.png" alt=""><span class="buttonText">Sign in with Google</span></button></li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import VFacebookLogin from "vue-facebook-login-component";

export default {
  data(){
    return{
      correoInput:'',
      contrasenaInput:''
    }
  },
  methods:{
    regresar(){
      this.$router.go(-1);
    },
    hacerUnaCuenta() {
      fetch('/signin', {email: this.correoInput, pass: this.contrasenaInput}, {

      })
    }
  },
  components: {
    VFacebookLogin
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
    margin-top: 5%;
    /* text-align: center; */
  }
  .logo {
    margin: 5% 10%;
  }
  .titulos {
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .buttons {
    margin-top: 3%;
  }
  .router1 {
    display: block;
    width: 80%;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    border: 1px solid #040acb;
    padding: 10px;
    border-radius: 14px;
    background-color: #040acb;
    color: white;
    text-align: center;
    text-decoration: none;
  }
  .router2 {
    display: block;
    width: 81%;
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
  .arrow{
    fill: #040acb;
    margin-left: -35%;
    margin-top: 5%;
  }
  .formulario{
    margin-top: 3%;
  }
   input{
    width: 80%;
    margin-bottom: 3%;
    margin-left: 5%;
    border-radius: 10px;
    padding: 14px;
    border: 1px solid #f3f4f6;
  }
  #facebook {
    width: 86%;
    margin-top: 3%;
    margin-left: 1%;
    margin-right: 5%;
    border-radius: 14px;
  }
  
  .google button{
    width: 85.5%;
    margin-top: 1%;
    margin-left: 1%;
    border-radius: 14px;
    height:40px;
    color: grey;
    border: 1px solid lightgray;
    text-align: center;
    font-size:18px;
  }
  .google button img{
    height: 25px;
    width:25px;
    margin-left:-3%;
  }
   ul{
   list-style: none;
  }
  .buttonText{
    margin-left:1.5%;
  }
  .button1{
    display: block;
    width: 83%;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    border: 1px solid #040acb;
    padding: 12px;
    border-radius: 14px;
    background-color: #040acb;
    color: white;
    text-align: center;
    font-size: 18px;
  }
  .ambulance2{
    height: 180px;
    width: 200px;
    margin-left:35%;
    margin-top: 5%;
  }
  .logoS{
    margin-left: 2%;
  }
}

@media (max-width: 993px) {
  .container {
    background-color: #f3f4f6;
    height: 900px;
  }
  .logo {
    margin: 10%;
  }
  .titulos {
    margin-top: 10%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .buttons {
    margin-top: 5%;
  }
  .router1 {
    display: block;
    width: 85%;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    border: 1px solid #040acb;
    padding: 10px;
    border-radius: 14px;
    background-color: #040acb;
    color: white;
    text-align: center;
    text-decoration: none;
  }
  .router2 {
    display: block;
    width: 80.5%;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    border: 1px solid lightgray;
    padding: 13px;
    border-radius: 14px;
    background-color: white;
    color: grey;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
  }
  .button1{
    display: block;
    width: 88%;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    border: 1px solid #040acb;
    padding: 13px;
    border-radius: 14px;
    background-color: #040acb;
    color: white;
    text-align: center;
    font-size: 16px;
  }
  .arrow{
    fill: #040acb;
    margin-top: 5%;
    margin-left: 5%;
  }
  .formulario{
    margin-top: 5%;
  }
   input{
    width: 80%;
    margin-bottom: 3%;
    margin-left: 5%;
    border-radius: 10px;
    padding: 14px;
    border: 1px solid #f3f4f6;
  }
  #facebook {
    margin-top: 5%;
    margin-left: -6%;
    margin-right: 5%;
    border-radius: 14px;
    width: 101%;
  }
  .google button{
    width: 101%;
    margin-top: 2%;
    margin-left: -6%;
    margin-right: 5%;
    border-radius: 14px;
    height:40px;
    color: grey;
    border: 1px solid lightgray;
    text-align: center;
    background-color: white;
    
  }
  .google button img{
    height: 25px;
    width:25px;
    margin-right: 5%;
    position: relative;
  }
   ul{
   list-style: none;
  }
  .buttonText{
    display: none;
  }
  .ambulance2{
    height: 90px;
    width: 100px;
    margin-left:37%;
    margin-top: 10%;
  }
  .logoS{
    margin-left: 32%;
  }
}
</style>
