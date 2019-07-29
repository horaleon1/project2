<template>
  <div class="container">
    <div class="center">
      <router-link to="/" class="router3">
        <eva-icon name="arrow-back" class="arrow" height="30px" width="30px"></eva-icon>
      </router-link>
      <div class="logo">LOGO</div>
      <div class="titulos">
        <h2>Registrate</h2>
        <h4>Ingresa tus datos para crear una cuenta.</h4>
      </div>
      <div class="formulario">
        <form>
          <input type="text" name="firstname" placeholder="Nombre"/><br>
          <input type="text" name="lastname" placeholder="Apellido"/><br>
          <input type="text" name="email" placeholder="Correo Electronico"/><br>
          <input type="password" name="password" placeholder="Contraseña"/><br>
          <input type="text" name="cellphone" placeholder="Número de teléfono"/><br>
        </form>
      </div>
      <div class="buttons">
        <router-link to="/signup" class="router2">Registrarse</router-link>
        <router-link to="/signin" class="router1">Iniciar sesión</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
    margin: 0% 0% 0% 10%;
  }
  .titulos {
    margin-top: 0%;
    margin-left: 8%;
    margin-right: 5%;
  }
  .formulario{
    margin-top: 5%;
    margin-left: 7%;
    margin-right: 5%;
  }
   input{
    width: 85%;
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
    margin-top: 5%;
  }
}

@media (max-width: 993px) {
  .container {
    background-color: #f3f4f6;
    height: 900px;
  }
  .logo {
    margin: 5% 0% 2% 15%;
  }
  .titulos {
    margin-top: 0%;
    margin-left: 8%;
    margin-right: 5%;
  }
  .formulario{
    margin-top: 8%;
    margin-left: 8%;
    margin-right: 5%;
  }
  input{
    width: 85%;
    margin-bottom: 3%;
    margin-left: 1%;
    border-radius: 10px;
    padding: 14px;
    border: 1px solid #f3f4f6;
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
}
</style>

