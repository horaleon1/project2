<template>
  <div class="container">
    <nav class="navHolder">
      <a class="logoA">
        <h2 class="logoText">LOGO</h2>
        <!-- <img src="../assets/logo.png" alt class="logo" /> -->
      </a>
      <div class="menuDer">
        <ul>
          <li>
            <router-link to="/" class="routers">Cerrar Sesión</router-link>
          </li>
          <li>
            <button class="buttonMenu5" @click="menu = !menu">Menu</button>
          </li>
        </ul>
      </div>
    </nav>

    <div class="dropdown" v-show="menu">
      <div class="sideMenu">
        <ul>
          <li>
            <img src="../assets/abc.png" height="100px" width="100px" class="imgHospital" />
          </li>
          <hr />
          <li>Cuenta</li>
          <li>Historial</li>
          <li>Pacientes</li>
          <li>Ayuda</li>
          <li>Ajustes</li>
          <li>
            <!-- <button @click="ayuda = !ayuda">Ayuda</button> -->
          </li>
          <!-- <Ayuda v-show="ayuda" v-on:changeAyuda1="updateAyuda" /> -->
          <li class="version">Versión 1.0.0</li>
        </ul>
      </div>
    </div>

    <div class="objetos">
      <ul>
        <li>
          <div class="paciente">
            <div class="paciente2">
              <ul>
                <li>
                  <img :src="url" alt />
                </li>
                <li>{{ user.results[0].name.first }} {{ user.results[0].name.last }}</li>
                <li>Padecimiento: {{ padecimiento }} </li>
                <li>
                  <button>Información básica</button>
                </li>
                <li>
                  <button>Seguro</button>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="timer">
            <div class="timer2">
              <eva-icon name="clock" class="icons" height="50px" width="50px"></eva-icon><h3>A <span>{{ time }}</span> minutos del hospital.</h3>
              <div class="progress">
                <div class="progressMoving"></div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="medicos"></div>
        </li>
        <li>
          <div class="listaPacientes">
            <div class="listaPacientes2">
              <h3>Pacientes en ruta</h3>
              <ul>
                <li>
                  <img :src="url" alt />
                  {{ user.results[0].name.first }} {{ user.results[0].name.last }} <span>10 min</span>
                </li>
                <li>
                  <img :src="url" alt />
                  {{ user.results[0].name.first }} {{ user.results[0].name.last }} <span>7 min</span>
                </li>
                <li>
                  <img :src="url" alt />
                  {{ user.results[0].name.first }} {{ user.results[0].name.last }} <span>2 min</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      url: "",
      user: "",
      time:5,
      padecimiento: 'infarto'
    };
  },
  mounted() {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        this.user = data;
        this.url = data.results[0].picture.medium;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.menuDer {
  margin-right: 5%;
  margin-top: 0.4%;
}
.buttonMenu5 {
  background-color: #040acb;
  border: 1px solid #040acb;
  font-size: 20px;
}
.dropdown {
  height: 1000px;
  width: 18%;
  background-color: #f8f8f8;
  float: right;
}
.sideMenu {
  margin-top: 15%;
}
.sideMenu {
  float: right;
  text-align: right;
  margin-right: 15%;
}
ul {
  list-style: none;
}
.sideMenu li:not(:last-child) {
  margin-top: 25%;
  font-size: 25px;
}
.imgHospital {
  border-radius: 50%;
  margin-bottom: 10%;
}

.paciente {
  display: flex;
  align-content: space-between;
  height: 830px;
  width: 30%;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: absolute;
}
.timer {
  display: flex;
  align-content: space-between;
  height: 830px;
  width: 26%;
  margin-left: 32%;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: absolute;
  margin-bottom: 1%;
  text-align: center;
}
.listaPacientes {
  display: flex;
  align-content: space-between;
  height: 830px;
  width: 18%;
  margin-left: 60%;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: absolute;
}
.paciente2 {
  margin-top: 5%;
  margin-left: 2%;
}
.paciente img {
  border-radius: 50%;
}
.paciente li {
  margin-bottom: 20%;
  font-size: 20px;
}
.paciente2 button {
  border-right: 1.5px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  border-radius: 5px;
  font-size: 16px;
}
.listaPacientes2 {
  margin-left: 0%;
}
.listaPacientes2 img {
  border-radius: 50%;
  height: 30px;
  width: 30px;
}
.listaPacientes2 li {
  border-bottom: 1px solid lightgray;
  width: 100%;
  font-size: 20px;
  margin-bottom: 20%;
  margin-right: 5%;
}
.listaPacientes2 h3{
  font-size: 20px;
  margin-left: 8%;
}
.icons{
  fill: #040acb;
  margin-top: 10%;
}
.timer2{
  margin-left: 5%;
  text-align: center;
  margin:0 auto;
}
.timer2 span{
  color:#040acb;
  font-size: 25px;
}
.progress{
  height: 40px;
  border: 1px solid lightblue;
  border-radius: 10px;
  width: 100%;
  margin-top: 20%;

}
.progressMoving{
  width: 20%;
  background-color:lightskyblue;
  height: 36.5px;
  border: 1px;
  margin: 1px;
  border-radius: 10px;
}
</style>

