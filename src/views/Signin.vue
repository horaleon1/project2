<template>
  <div class="container">
    <div class="center">
      <router-link to="/" class="router3"><eva-icon name="arrow-back" class="arrow" height="30px" width="30px"></eva-icon></router-link>
      <div class="logo">LOGO</div>
      <div class="titulos">
        <h3>Mas cerca, en lugar correcto y a tiempo.</h3>
      </div>
      <div class="buttons">
        <router-link to="/signup" class="router1">Iniciar sesión</router-link>
        <router-link to="/signin" class="router2">Registrarse</router-link>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    regresar(){
      this.$router.go(-1);
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
    margin-top: 10%;
    /* text-align: center; */
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
    margin-top: 20%;
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
    margin-left: -35%;
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
    margin-top: 20%;
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
}
</style>
