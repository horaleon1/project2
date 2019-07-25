<template>
  <div class="container">
    <nav class="navHolder">
      <a class="logoA">
        <img src="../assets/logo.png" alt class="logo" />
      </a>

      <div class="menuDer">
        <ul>
          <li>
            <router-link to="/signin" class="routers">Inicia Sesión</router-link>
          </li>
          <li>
            <router-link to="/pruebas" class="routers">Regístrate</router-link>
          </li>
          <li>
            <button @click="dropdown = !dropdown">
              Menu
              <eva-icon name="arrow-ios-downward" class="flecha"></eva-icon>
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <!-- //dropdown menu -->
    <div class="dropdown" v-show="dropdown">
      <div class="dropdownA">
        <ul>
          <li>
            <a href>
              Usuarios
              <eva-icon name="arrow-ios-forward" class="rightArrow"></eva-icon>
            </a>
          </li>
          <li>
            <a href>
              Ambulancias
              <eva-icon name="arrow-ios-forward" class="rightArrow"></eva-icon>
            </a>
          </li>
          <li>
            <a href>
              Hospitales
              <eva-icon name="arrow-ios-forward" class="rightArrow"></eva-icon>
            </a>
          </li>
          <router-link to="/signin" class="router2">
            <span>Inicia Sesión</span>
          </router-link>
        </ul>
        <div>
         <ul>
           <li><button class="ayuda" @click="ayuda = !ayuda">Ayuda</button></li>
           <li class="version">Version 1.0.0</li>
         </ul>
        </div>
      </div>
    </div>
    <!-- //ayuda -->
    <home-normal v-show="ayuda"></home-normal>
    <!-- //body  Intro -->
    <div class="container2">
      <h1>Mas cerca, en lugar correcto y a tiempo.</h1>
      <h3>Descubre como te podemos ayduar en una emergencia.</h3>
      <button class="buttonBody">Salva vidas con nosotros</button>
    </div>
    <div class="imageB">
      <div class="divText">
       <h3 class="textLogo">LOGO <br> Tus nuevos <br>
       angeles de <br> la guarda.</h3>
      </div>
     <img src="../assets/Ambulance.jpg" alt="Red Ambulance" class="imageBI">
    </div>
    <!-- //body2 Descripcion -->
    <div class="fill"></div>
    <div class="container3">
     <h2>Nuestro protocolo de Acción</h2>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul>
    </div>

  </div>
</template>



<script>
import HomeNormal from '../components/HomeNormal.vue'

export default {
  data() {
    return {
      dropdown: false,
      ayuda: false,
    };
  },
  methods: {
    
    },
    components:{
      HomeNormal
    }
};
</script>


<style>
@media (max-width: 992px) {
  .container {
    font-family: Arial, Helvetica, sans-serif;
    
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    overflow: visible;
  }
  .navHolder {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: #1453c2;
  }
  .divLogo {
    display: block;
  }
  .logo {
    height: 50px;
    width: 50px;
    background-color: transparent;
  }
  .logoA {
    margin-top: 15px;
    margin-left: 20px;
  }
  .menuDer {
    font-size: 15px;
  }
  .menuDer ul {
    text-decoration: none;
  }
  .menuDer ul li {
    display: list-item;
    list-style: none;
    display: inline-block;
    margin-left: 3px;
    margin-top: 5px;
    color: white;
  }
  .menuDer ul li button {
    font-size: 15px;
    color: white;
  }
  .routers {
    text-decoration: none;
    color: white;
  }
  li .routers {
    margin-left: 3px;
  }
  .flecha {
    fill: white;
    position: relative;
    top: 6.5px;
    left: 1px;
  }
  .dropdown {
    background-color: #f3f4f6;
    height: 900px;
    position: relative;
  }
  .dropdown a {
    display: block;
    text-decoration: none;
    color: #282829;
    letter-spacing: 0.7px;
    font-size: 25px;
    padding-top: 30px;
  }

  .dropdownA {
    padding-top: 20px;
  }
  .dropdownA ul {
    list-style: none;
  }
  span {
    position: absolute;
    left: 33%;
    top: 260px;
  }
  .rightArrow {
    fill: grey;
    float: right;
    margin-right: 25px;
  }
  .router2 {
    margin-top: 40px;
    margin-right: 30px;
    border: 1px solid grey;
    padding: 10px;
    border-radius: 20px;
  }
  .router2 span {
    text-align: center;
  }
  .ayuda{
    font-size: 35px;
    color: grey;
    margin-top: 250px;
  }
  .version{
    margin-left: 12px;
    margin-top: 10px;
    color: grey;
    font-size: 14px;
  }

  /* //body */
  .container2 {
   
  }
  h1 {
    margin-left: 15px;
    margin-right: 15px;
  }
  h3 {
    margin-left: 15px;
    margin-right: 15px;
    color: grey;
  }
  .buttonBody {
    border: 1px solid grey;
    border-radius: 10px;
    padding: 16px 85px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 10px;
    font-size: 15px;
    color: white;
    background-color: #1453c2;
  }
  .imageB{
    margin-top: 30px;
    background-color: white;
  }
  .imageBI{
    width: 100%;
    height: 250px;
  }
  .divText{
    position: absolute;
    height: 120px;
    width: 120px;
    background-color: black;
    margin-top: 190px;
    margin-left: 30px;
  }
  .textLogo{
    color: white;
    position: absolute;
    text-align: right;
    font-size: 13px;
    margin-top: 28px;
    margin-left: 25px;
  }
  /* //body3  */
  .fill{
    height: 80px;
    background-color: #f3f4f6;
  }
  .container3{
    margin-top:-20px;
    background-color: #f3f4f6;
  }
  .container3 h2{
    margin-left: 15px;
  }
}
</style>

