<template>
  <div class="datos">
    <div class="direccion">
      <ul>
        <li>
          <div class="minutos">
            <h1>{{ $store.state.minutos }}</h1>
            <h3>Minutos</h3>
          </div>
        </li>
        <li>
          <div class="direccionDatos">
           <ul>
            <li> {{ $store.state.direccion.calle }} {{ $store.state.direccion.numero }}</li>
            <li> {{ $store.state.direccion.colonia }} </li>
            <li> {{ $store.state.paciente.nombre }} {{ $store.state.paciente.apellido }}</li>
          </ul>
          </div>
        </li>
      </ul>
      <!-- <div class="minutos">
        <div class="datosDireccion">

        </div>
      </div>-->
    </div>
    <div class="paciente">
      <div class="pacienteDatos">
        <ul>
          <li>Alergias: Hipersensible Cafeina</li>
          <li>Padeciminento: Dolor intenso en el pecho</li>
          <li> <div class="live"></div> Sintomas: {{ }} </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>

.direccion {
  border: 1px solid lightgray;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: inline-block;
  height: 120px;
  margin: 1% 5% 2% 5% ;
}
.paciente{
  border: 1px solid lightgray;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: inline-block;
  height: 120px;
  margin: 0% 5% 0% 5% ;
}
.minutos h1 {
  font-size: 25px;
}
.minutos h3 {
  font-size: 20px;
}
.minutos{
  margin-left: -30%;
  text-align: center;
}
ul {
  list-style: none;
  display: flex;
}
.direccionDatos ul, .pacienteDatos ul{
  flex-direction: column;
  align-items: flex-start;
}
.direccionDatos ul li{
  margin-bottom: 10%;
}
.direccionDatos ul li:nth-child(3){
 margin-top: 5%;
 padding-top: 10%;
 border-top: 1px solid lightgrey;
 
}
ul li:not(.direccionDatos ul){
  align-content: space-around;
}
.direccionDatos{
  border-left: 1px solid lightgray;
  height: 85%;
}

.pacienteDatos ul li {
  font-size: 15px;
  margin-bottom: 5%;
}
.live{
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: red;
  display: inline-block;
  margin-right: 5px;
  animation: pulse 1.5s infinite;
  opacity: 1;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 #f91a1a;
    opacity: 0.9;
  }
  70% {
    box-shadow: 0 0 0 3px #f91a1a;
    opacity: 0.6;
  }
  100% {
    box-shadow: 0 0 0 0 #f91a1a;
    opacity: 0.2;
  }
}
</style>
