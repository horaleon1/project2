<template>
  <div class="container">
    <nav class="navHolder">
      <a class="logoA">
        <h2 class="logoText">LOGO</h2>
        <!-- <img src="../assets/logo.png" alt class="logo" /> -->
      </a>
      <!-- // menu full width -->
      <div class="dropdownFullWidth">
        <ul>
          <li>Usuarios</li>
          <li>Ambulancias</li>
          <li>Hospitales</li>
        </ul>
      </div>

      <div class="menuDer">
        <ul>
          <li>
            <router-link to="/signin" class="routers">Inicia Sesión</router-link>
          </li>
          <li>
            <router-link to="/pruebas" class="routers">Regístrate</router-link>
          </li>
          <li class="menuFull">
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
            <li>
              <button class="ayuda" @click="ayuda = !ayuda">Ayuda</button>
            </li>
            <li class="version">Version 1.0.0</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- //ayuda -->
    <Ayuda v-show="ayuda" v-on:changeAyuda()="updateAyuda($event)"></Ayuda>
    <!-- //body  Intro -->
    <div class="container2">
      <div class="textContainer2">
        <h1>
          Mas cerca, en lugar
          <br class="textBr" />correcto
          y a tiempo.
        </h1>
        <h3>
          Descubre como te podemos
          <br class="textBr" />ayudar en una emergencia.
        </h3>
        <button class="buttonBody">Salva vidas con nosotros</button>
      </div>
    </div>

    <div class="imageB">
      <div class="divText">
        <h3 class="textLogo">
          LOGO
          <br />Tus nuevos
          <br />angeles de
          <br />la guarda.
        </h3>
      </div>
      <img src="../assets/Ambulance.jpg" alt="Red Ambulance" class="imageBI" />
    </div>
    <!-- //body2 Descripcion -->

    <div class="container3">
      <h2>Protocolo de Acción</h2>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul>
    </div>
    <!-- // body3 Vidas Salvadas -->

    <div class="container4">
      <h3>Numero de Vidas Salvadas</h3>
      <h1>10,341</h1>
    </div>

    <!-- //body4 Aplicaciones Soon -->

    <div class="container5">
      <h2>Proximamente Disponible en</h2>
      <div class="containerStores">
        <img
          src="https://i.ibb.co/8jbvcwR/badge-iphone.png"
          alt="Apple Store Logo"
          class="appleStore"
        />
        <img
          src="https://i.ibb.co/BZddXq9/badge-android.png"
          alt="Play Store Logo"
          class="playStore"
        />
      </div>
    </div>

    <!-- //footer -->

    <div class="containerFooter">
      <div class="containerIndices">
        <div class="indice1">
          <ul>
            <li>
              <h4>Quienes somos</h4>
            </li>
            <li>Seguridad</li>
            <li>Casos de exito</li>
            <li>Blog</li>
            <li>Ayuda</li>
          </ul>
        </div>
        <div class="indice2">
          <ul>
            <li>
              <h4>Redes Sociales</h4>
            </li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Medium</li>
          </ul>
        </div>
        <hr />
        <div class="indice3">
          <ul>
            <li>Términos y condiciones</li>
            <li>Privacidad</li>
            <br />
            <li>© 2019 miAmbulancia S.A.P.I. de C.V.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import Ayuda from "../components/Ayuda.vue";

export default {
  data() {
    return {
      dropdown: false,
      ayuda: false
    };
  },
  methods: {
    updateAyuda(){
      this.ayuda = false;
    }
  },
  components: {
    Ayuda
  }
};
</script>


<style>
@media (min-width: 993px) {
  .container {
    font-family: Arial, Helvetica, sans-serif;
    z-index: 100;
    overflow: visible;
    background-color: #f3f4f6;
  }
  .navHolder {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: #040acb;
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
    margin-top: 5px;
    margin-left: 50px;
    color: white;
  }
  .menuDer {
    font-size: 20px;
  }
  .menuDer ul {
    text-decoration: none;
  }
  .menuDer ul li {
    display: list-item;
    list-style: none;
    display: inline-block;
    margin-left: 15px;
    margin-top: 1px;
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
  .dropdownFullWidth ul {
    list-style: none;
    font-size: 20px;
    color: white;
    margin-top: 30px;
  }
  .dropdownFullWidth ul li {
    display: inline-block;
    margin-left: 30px;
  }
  .container2 {
    background: url("../assets/Ambulance.jpg");
    background-size: cover;
    width: 100%;
    height: 500px;
  }
  /* .divText {
    height: 450px;
    width: 450px;
    background-color: white;
    color: black;
    margin-top: -400px;
    float: right;
    margin-right: 70px;
    opacity: 0.7;
  } */
  .textContainer2 {
    color: white;
    border: 1px solid white;
    width: 50%;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    right: 6%;
    top: 15%;
    padding: 19% 0%;
  }
  .textContainer2 h1 {
    font-size: 33px;
    color: black;
    text-align: right;
    position: absolute;
    right: 10%;
    top: 5%;
  }
  .textContainer2 h3 {
    font-size: 23px;
    color: black;
    text-align: right;
    position: absolute;
    right: 10%;
    top: 35%;
  }
  .textContainer2 button {
    font-size: 20px;
    text-align: right;
    position: absolute;
    right: 10%;
    top: 70%;
    border: 1px solid;
    padding: 12px;
    border-radius: 10px;
    background-color: #040acb;
    color: white;
  }
  .container3 {
    margin-top: 120px;
  }
  .container3 h2 {
    padding-left: 30px;
    font-size: 45px;
  }
  .container3 ul {
    list-style: none;
    display: flex;
  }
  .container3 ul li {
    justify-content: space-between;
    padding-left: 100px;
  }
  .container4 {
    margin-top: 120px;
    text-align: right;
    margin-right: 30px;
  }
  .container4 h3 {
    font-size: 45px;
  }
  .container4 h1 {
    font-size: 45px;
    color: #040acb;
  }
  .container5 h2 {
    margin-top: 120px;
    font-size: 45px;
    margin-left: 30px;
  }
  .containerStores {
    margin-top: 100px;
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
  }
  .appleStore {
    height: 90px;
    width: 300px;
    margin-right: 5%;
  }
  .playStore {
    height: 90px;
    width: 300px;
    margin-left: 5%;
  }
  .containerFooter {
    margin-top: 100px;
    height: 300px;
    width: 100%;
    background-color: #040acb;
    color: white;
  }
  .containerIndices{
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    margin-right: 20%;
  }
  
  .indice1 ul, .indice2 ul, .indice3 ul {
    list-style: none;
    line-height: 30px;
    letter-spacing: 1px;
  }
  .indice3{
    margin-top: 40px;
  }
}

/* //////////////// */
@media (min-width: 992px) {
  /* //elements dont show full width */
  .menuFull {
    visibility: hidden;
  }
  .imageBI,
  .textLogo {
    display: none;
  }
}
/* //////////////// */

@media (max-width: 992px) {
  /* //elements hidden on this query (MOBILE)*/
  .dropdownFullWidth,
  .textBr {
    display: none;
  }

  .container {
    font-family: Arial, Helvetica, sans-serif;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    overflow: visible;
    background-color: #f3f4f6;
  }
  .navHolder {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: #040acb;
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
  .ayuda {
    font-size: 35px;
    color: grey;
    margin-top: 250px;
  }
  .version {
    margin-left: 12px;
    margin-top: 10px;
    color: grey;
    font-size: 14px;
  }

  /* //body */
  .container2 {
    padding-top: 20px;
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
    margin-top: 20px;
    font-size: 15px;
    color: white;
    background-color: #040acb;
  }
  .logoText {
    color: white;
    font-size: 20px;
  }
  .imageB {
    margin-top: 40px;
    background-color: white;
  }
  .imageBI {
    width: 100%;
    height: 250px;
  }
  .divText {
    position: absolute;
    height: 120px;
    width: 120px;
    background-color: black;
    margin-top: 190px;
    margin-left: 30px;
  }
  .textLogo {
    color: white;
    position: absolute;
    text-align: right;
    font-size: 13px;
    margin-top: 28px;
    margin-left: 25px;
  }
  /* //body3  */

  .container3 {
    margin-top: 90px;
    background-color: #f3f4f6;
  }
  .container3 h2 {
    margin-right: 25px;
    text-align: right;
  }
  .container3 ul li {
    list-style: none;
    margin-bottom: 20px;
  }
  /* //container 4 */
  .container4 {
    padding-top: 20px;
  }
  .container4 h3 {
    text-align: right;
    color: black;
  }
  .container4 h1 {
    text-align: right;
    color: #040acb;
  }
  /* //container  5  */
  .container5 {
    padding-bottom: 40px;
  }
  .container5 h2 {
    padding-top: 40px;
    text-align: center;
  }
  .containerStores {
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
    margin-bottom: 30px;
  }

  .appleStore {
    width: 130px;
    height: 45px;
    margin-right: 5%;
  }
  .playStore {
    width: 130px;
    height: 45px;
    margin-left: 5%;
  }
  .containerFooter {
    background-color: #040acb;
    height: 600px;
    width: 100%;
  }
  .indice1 ul,
  .indice2 ul,
  .indice3 ul {
    list-style: none;
  }
  .indice1,
  .indice2,
  .indice3 {
    display: inline;
  }
  .containerIndices h4 {
    font-weight: 700;
  }
  .containerIndices {
    padding-top: 20px;
    color: white;
    line-height: 30px;
    font-weight: 500;
  }
  .containerIndices hr {
    width: 90%;
    color: lightslategray;
  }
  .indice3{
    
  }
}
</style>

