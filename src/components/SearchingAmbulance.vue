<template>
  <div class="containerAnimacion">
    <button>
      <div class="animacion">
        <div class="animacion2">
          <h1>Emergencia</h1>
          <h3> {{ segundosRestantes }} </h3>
        </div>
      </div>
    </button>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      segundosRestantes:10
    }
  }
};
</script> 

<style scoped>
.containerAnimacion {
  background-color: #4d4d4d;
  margin-top: 25%;
  margin-left: 16%;
  position: absolute;
}
.animacion {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  box-shadow: 0 0 0 #f91a1a;
  animation: pulse 1.5s infinite;
  position: absolute;
  opacity: 1;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 #f91a1a;
    opacity: 0.9;
  }
  70% {
    box-shadow: 0 0 0 10px #f91a1a;
    opacity: 0.6;
  }
  100% {
    box-shadow: 0 0 0 0 #f91a1a;
    opacity: 0.2;
  }
}

.animacion2 {
  width: 230px;
  height: 230px;
  border-radius: 50%;
  box-shadow: 0 0 0 #f91a1a;
  animation: pulse2 1.5s infinite;
  position: absolute;
  opacity: 1;
  margin-top: 4%;
  margin-left: 4%;
}
@keyframes pulse2 {
  0% {
    box-shadow: 0 0 0 0 #f91a1a;
    opacity: 0.9;
  }
  70% {
    box-shadow: 0 0 0 10px #f91a1a;
    opacity: 0.6;
  }
  100% {
    box-shadow: 0 0 0 0 #f91a1a;
    opacity: 0.2;
  }
}
h1 {
  margin-top: 40%;
  margin-left: 10%;
  font-size: 30px;
}
.direccion{
  margin:5%;
  background-origin: 1px solid lightgrey;
}
h3{
  font-size: 30px;
}
</style>

