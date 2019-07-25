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
              Menú
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
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      dropdown: false
    };
  }
};
</script>



<style>
@media (max-width: 992px) {
  .container {
    font-family: Arial, Helvetica, sans-serif;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
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
  li .routers{
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
  .dropdownA ul{
    list-style: none;
  }
   span{
   vertical-align: middle;
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
}
</style>

