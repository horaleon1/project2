<template>
  <div class="container">
    <div class="center">
      <router-link to="/" class="router3"><eva-icon name="arrow-back" class="arrow" height="30px" width="30px"></eva-icon></router-link>
      <div class="logo">LOGO</div>
      <div class="titulos">
        <h3>Mas cerca, en lugar correcto y a tiempo.</h3>
      </div>
       
      <div class="formulario">
        <form>
          <input type="text" name="email" placeholder="Correo Electronico"/><br>
          <input type="password" name="password" placeholder="Contraseña"/><br>
        </form>
      </div>
      
      <div class="buttons">
        <router-link to="/signin" class="router1">Iniciar sesión</router-link>
        <router-link to="/signup" class="router2">Registrarse</router-link>
      </div>
      <div class="bottonesSociales">
        <ul>
          <li><v-facebook-login app-id="966242223397117" id="facebook" ></v-facebook-login></li>
          <!-- <li class="google" id="facebook"><button><img src="../assets/google.png" alt=""><span class="buttonText">Sign in with Facebook</span></button></li> -->
          <li class="google"><button><img src="../assets/google.png" alt=""><span class="buttonText">Sign in with Google</span></button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import VFacebookLogin from "vue-facebook-login-component";

export default {
  methods:{
    regresar(){
      this.$router.go(-1);
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
  }
  .arrow{
    fill: #040acb;
    margin-left: -35%;
    margin-top: 5%;
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
    width: 86%;
    margin-top: 3%;
    margin-left: 1%;
    margin-right: 5%;
    border-radius: 14px;
  }
  
  .google button{
    width: 86%;
    margin-top: 3%;
    margin-left: 1%;
    border-radius: 14px;
    height:40px;
    color: grey;
    border: 1px solid lightgray;
    text-align: center;
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
    width: 85%;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 14px;
    background-color: white;
    color: grey;
    text-align: center;
    text-decoration: none;
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
    margin-top: 5%;
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
}
</style>
