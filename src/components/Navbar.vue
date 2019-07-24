<template>
  <div class="container">
    <div class="lista">
      <a href class="logo">Ambulant</a>
      <ul>
        <li>
          <router-link to="/signin">Iniciar Sesión</router-link>
        </li>
        <li>
          Menu
          <button>
            <eva-icon name="arrow-ios-downward" @click="dropdown = !dropdown"></eva-icon>
          </button>
          <div class="dropdown-content" v-show="dropdown">
            <a href="#">Link 1</a><br>
            <a href="#">Link 2</a><br>
            <a href="#">Link 3</a><br>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>



<script>
export default {
  data(){
    return{
      dropdown: false,
    }
  }
};
</script>



<style>
@media (max-width: 992px) {
  body {
    padding: 0;
    margin: 0 auto;
  }
  .container {
    height: 50px;
    background-color: #53dcfe;
    padding: 0;
    margin-top: -60px;
    width: 992px;
  }
  .lista ul li {
    display: inline;
  }
  .lista ul{
  position: absolute;
  top:1.2%;
  left:50%;
  }
  .logo {
    position: fixed;
    top:1.5%;
    left: 4%;
  }
  .dropdown-content{
    
  }
}

/* Normal website size */
.lista ul li {
  display: inline;
  margin-left: 25px;
}
</style>

