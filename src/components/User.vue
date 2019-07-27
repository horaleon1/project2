<template>
  <div class="container">
    <div class="sideMenuContainer" v-show="sideMenu">
      <div class="sideMenu">
        <ul>
          <li>
            <img src=" { user.results[0].picture.medium } " height="50px" width="50px" />
          </li>
          <li>{{ user.results[0].name.firststring }} {{ user.results[0].name.last }}</li>
          <hr />
          <li>Cuenta</li>
          <li>Historial médico</li>
          <li>Métodos de pago</li>
          <li>Cerrar sesión</li>
          <li>Ayuda</li>
          <li class="version">Versión 1.0.0</li>
        </ul>
      </div>
    </div>
    <div class="mapContainer">
      <!-- <h3 class="circleLogo">LOGO</h3> -->

      <button class="circleMenu" @click="sideMenu = !sideMenu">
        <img src alt />
        <eva-icon name="menu" class="icons" height="30px" width="30px"></eva-icon>
      </button>

      <iframe
        src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyCHB7fzFranaqMKbud-JdC_4FwwPNsrNKs&origin=romanorte&destination=hospitalangelesmexico"
        width="100%"
        height="420px"
      ></iframe>
    </div>

    <div class="informacion">
      <div class="containerInput1">
        <input type="text" placeholder="   ¿En dónde es tu emergencia? " class="input1" />
        <button @click="programado = !programado">
          <eva-icon name="calendar" class="icons"></eva-icon>
        </button>
      </div>

      <div v-show="programado" class="programado"></div>

      <div class="containerInput2">
        <input type="text" placeholder="    Ingresa un hospital" class="input2" />
        <button @click="sugerencias = !sugerencias">
          <eva-icon name="activity" height="30px" width="30px" class="icons"></eva-icon>
        </button>
      </div>

      

      <div v-show="sugerencias" class="sugerencias">
        <div class="listaHospitales">
          <ul>
            <li>
              <button>
                <eva-icon name="camera" class="icons"></eva-icon>
                <br />Hospital
                <br />fulano 1
                <br />
                <eva-icon name="car" class="icons"></eva-icon>
                <br />5 Minutos
              </button>
            </li>
            <li>
              <button>
                <eva-icon name="camera" class="icons"></eva-icon>
                <br />Hospital
                <br />fulano 2
                <br />
                <eva-icon name="car" class="icons"></eva-icon>
                <br />10 Minutos
              </button>
            </li>
            <li>
              <button>
                <eva-icon name="camera" class="icons"></eva-icon>
                <br />Hospital
                <br />fulano 3
                <br />
                <eva-icon name="car" class="icons"></eva-icon>
                <br />8 Minutos
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="containerInput3">
        <ul>
          <!-- <li id="pacienteText"><h4>Paciente</h4></li> -->
          <li>
            Bebe
            <br />
            <br />0-24
            <br />meses
          </li>
          <li>
            Niño
            <br />
            <br />2-16
            <br />años
          </li>
          <li>
            Adulto
            <br />
            <br />16-60
            <br />años
          </li>
          <li>
            Adulto
            <br />Mayor
            <br />60+
            <br />años
          </li>
          
          <!-- <eva-icon name="person-add" class="icons person" height="30px" width="30px"></eva-icon>            -->

        </ul>
      </div>

      <div class="containerInput4">
        <input type="text" placeholder="    Síntomas" class="input3"> 
        <eva-icon name="list" class="icons" height="30px" width="30px"></eva-icon>
      </div>

      <button class="pedir">Pedir</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sugerencias: false,
      programado: false,
      sideMenu: false,
      user: ""
    };
  },
  mounted() {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        this.user = data;
        console.log(this.user);
      })
      .catch(err => console.log(err));
  },
  created() {}
};
</script>

<style scoped>
.container {
  background-color: #ffffff;
}
.circleLogo,
.circleMenu {
  position: absolute;
}

.circleMenu {
  border-radius: 50%;
  border: 1px solid white;
  background-color: white;
  opacity: 0.9;
  padding: 10px;
  right: 5%;
  top: 2%;

}
.informacion {
  width: 100%;
}
.input1 {
  width: 70%;
  height: 40px;
  margin: 5% 6%;
  border-radius: 15px;
  background-color: #e4e4e5;
  border: #e4e4e5;
}
.icons {
  fill: #040acb;
}
.icons:active {
  opacity: 0.5;
}
.containerInput2 {
  margin-top: -25px;
}
.containerInput2 button {
  fill: #040acb;
}
.input2 {
  width: 70%;
  height: 40px;
  margin: 5% 6%;
  border-radius: 15px;
  background-color: #e4e4e5;
  border: #e4e4e5;
}
.sugerencias {
  width: 90%;
}
.pedir {
  width: 90%;
  border-radius: 15px;
  padding: 12px 10px;
  border: #fb2f1b;
  background-color: #fb2f1b;
  color: white;
  letter-spacing: 1.5px;
  text-align: center;
  margin: 0% 5%;
  font-size: 20px;
}
.pedir:active {
  opacity: 0.7;
}
.listaHospitales {
  width: 100%;
  margin-bottom: 10%;
}
.listaHospitales ul {
  list-style: none;
  display: inline;
}
.listaHospitales ul li {
  display: list-item;
  list-style: none;
  display: inline-block;
  margin-left: 5%;
}
.containerInput3 {
  margin-left: -5%;
  margin-right: 1%;
  margin-top: -5%;
}
.containerInput3 h4 {
  margin-left: 0%;
  border: 1px solid #e4e4e5;
  padding: 10px;
  border-radius: 15px;
  background-color: #e4e4e5;
  width: 16%;
}

.containerInput3 ul li {
  display: list-item;
  list-style: none;
  display: inline-block;
  margin-left: 2%;
  border: 1px solid #e4e4e5;
  padding: 10px;
  border-radius: 15px;
  background-color: #e4e4e5;
}
.containerInput3:hover ul:hover li:hover {
  opacity: 0.5;
}
.sideMenuContainer {
  position: absolute;
  background-color: #f3f4f6;
  height: 100%;
  width: 100%;
  right: 0%;
}
.sideMenu {
  margin-left: 10%;
  margin-top: 30%;
  text-align: right;
  margin-right: 25%;
  font-size: 25px;
}
.sideMenu ul li {
  list-style: none;
  margin-top: 20%;
}

.sideMenu ul hr{
  width: 100%;
  margin-left: 10%;
  margin-top: 20%;
}
.sideMenu ul li img{
  border-radius: 50%;
}
.person{
position: absolute;
right: 3%;
top: 78%;
}
.input3{
  width: 70%;
  height: 40px;
  margin: 5% 6%;
  border-radius: 15px;
  background-color: #e4e4e5;
  border: #e4e4e5;
}
.containerInput4{
  margin-top: -5%;
}
</style>

