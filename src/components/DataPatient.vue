<template>
  <div class="datos">
    <div class="direccion">
      <div class="minutos">
        <h1>{{ $store.state.minutos }}</h1>
        <h3>Minutos</h3>
        <div class="datosDireccion">
         <ul>
          <li>Calle:</li>
          <li>Numero: Exterior:</li>
          <li>Colonia:</li>
          <li>C.P.:</li>
          <li>Ciudad:</li>
        </ul>
        </div>
        
     
      </div>
      
    </div>
    <div class="paciente"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.datos {

}
.direccion{
  
}
.minutos {
  border: 1px solid lightgray;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: inline-block;
  height: 120px;
  margin:5%;

}
.minutos h1 {
  font-size: 10px;
}
.minutos h3 {
  font-size: 10px;
}
.datosDireccion {
  border-left: 1px solid lightgray;
  display: inline;
}
ul {
  list-style: none;
}
ul li{
  display: inline-block;
}
</style>
