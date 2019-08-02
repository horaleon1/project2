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
          <li>
            <router-link to="/historyHospital" class="router">Historial de pacientes</router-link>
          </li>
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
                <li>
                  <h2>{{ user.results[0].name.first | capitalize }} {{ user.results[0].name.last | capitalize }}</h2>
                </li>
                <li class="padecimiento">
                  <h4>Padecimiento: {{ $store.state.user.padecimiento }}</h4>
                </li>
                <li>
                  <ul>
                    <li>
                      <h4>Información basica</h4>
                    </li>
                    <li></li>
                    <li>Dirección</li>
                    <li>Calle:</li>
                    <li>
                      Numero:
                      Exterior:
                    </li>
                    <li>Colonia: C.P.:</li>
                    <li>Ciudad:</li>
                  </ul>
                </li>
                <li>
                  <h4>Poliza de Seguro</h4>
                </li>
                <li>Compañia:</li>
                <li>Numero:</li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="timer">
            <div class="timer2">
              <eva-icon name="clock" class="icons" height="50px" width="50px"></eva-icon>
              <h3>
                Llegada en:
                <span>{{ $store.state.minutos }}</span>  minutos.
              </h3>
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
                  {{ user.results[0].name.first | capitalize }} {{ user.results[0].name.last | capitalize }}
                 <br> <br> <span>Llegada en: 22 minutos</span>
                </li>
                <li>
                  <img :src="url" alt />
                  {{ user.results[0].name.first | capitalize }} {{ user.results[0].name.last | capitalize }}
                 <br> <br> <span>Llegada en: 2 minutos</span>
                </li>
                <li>
                  <img :src="url" alt />
                  {{ user.results[0].name.first | capitalize }} {{ user.results[0].name.last | capitalize }}
                 <br>  <br> <span>Llegada en: 10 minutos</span>
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
      time: 5,
      padecimiento: "infarto",
      formulario: {
        Direccion: {
          Calle: "Tonala",
          Numero: "10",
          Colonia: "Roma Norte",
          CodigoPostal: "00000"
        },
        Contacto: {
          Nombre: "Jose Luis",
          Apellido: "Lopez",
          Celular: "5554122343"
        }
      },
      formularioactive: false
    };
  },
  mounted() {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data1 => {
        this.user = data1;
        this.url = data1.results[0].picture.medium;
      })
      .catch(err => console.log(err));
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
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
  height: 850px;
  width: 18%;
  background-color: #f8f8f8;
  right: 0%;
  position: absolute;
}

.sideMenu {
  float: right;
  text-align: right;
  margin-right: 15%;

}
.dropdown {
  border-left: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  margin-right: 20%;
}

.paciente {
  height: 830px;
  width: 24%;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: absolute;
}
.timer {
  height: 830px;
  width: 24%;
  margin-left: 26.5%;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: absolute;
  margin-bottom: 1%;
  text-align: center;
}
.listaPacientes {
  height: 830px;
  width: 24%;
  margin-left: 53%;
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
  margin-bottom: 10%;
  font-size: 20px;
}
.paciente2 button {
  border-right: 2px solid lightgrey;
  border-bottom: 2px solid lightgrey;
  border-radius: 5px;
  font-size: 16px;
}
.listaPacientes2 {
  margin-top: 5%;
}
.listaPacientes2 ul {
  margin-top: 5%;
}
.listaPacientes2 img {
  border-radius: 50%;
  height: 30px;
  width: 30px;
}
.listaPacientes2 li {
  border-bottom: 1px solid lightgray;
  width: 80%;
  font-size: 20px;
  margin-bottom: 10%;
  margin-right: 5%;
}
.listaPacientes2 h3 {
  font-size: 25px;
  color: black;
  padding-bottom: 5%;
  margin-left: 5%;
}
.icons {
  fill: #040acb;
  margin-top: 10%;
}
.timer2 {
  margin-left: 5%;
  text-align: center;
  margin: 0 auto;
}
.timer2 span {
  color: #040acb;
  font-size: 25px;
}
.progress {
  height: 42px;
  padding: 3px 2px 0px 2px;
  border: 1px solid lightblue;
  border-radius: 10px;
  width: 80%;
  margin-top: 15%;
  margin-left: 10%;
}
.progressMoving {
  width: 70%;
  background-color: lightskyblue;
  height: 36.5px;
  border: 1px;
  margin: 1px;
  border-radius: 10px;
}
.padecimiento {
  color: #fc3904;
}
.router {
  text-decoration: none;
  color: black;
}
</style>

