<template>
  <div class="containerAlert" v-show="cancelarAlert">
    <div class="animacion">
      <div class="animacionB"></div>
      <div class="animacionC"></div>
    </div>

    <div class="animacion2">
      <img src="../assets/ambulance.png" alt height="70px" width="70px" />
    </div>

    <div class="conjunto">
      <div class="texto">
        <h2>Buscando la Ambulancia mas cercana</h2>
      </div>

      <div class="searchingLoader">
        <div class="moving"></div>
        <div class="moving2"></div>
      </div>

      <div class="cancelar">
        <button @click="cancelarServicio">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      cancelarAlert:true
    }
  },
  methods:{
    cancelarServicio(){
      this.cancelarAlert = !this.cancelarAlert
      this.$store.state.pedir = !this.$store.state.pedir
      this.$store.state.pedido = !this.$store.state.pedido
    }
  }
};
</script>


<style scoped>
.containerAlert {
  position: absolute;
  left: 14%;
  top: 10%;
}
.animacion {
  width: 270px;
  height: 270px;
  border-radius: 50%;
  box-shadow: 0 0 0 #0688e1;
  animation: pulse 2.5s infinite;
  position: absolute;
  opacity: 0.9;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 #0688e1;
    opacity: 0.9;
  }
  70% {
    box-shadow: 0 0 0 10px #0688e1;
    opacity: 0.6;
  }
  100% {
    box-shadow: 0 0 0 0 #0688e1;
    opacity: 0.2;
  }
}
.animacionB {
  width: 230px;
  height: 230px;
  border-radius: 50%;
  box-shadow: 0 0 0 #0688e1;
  animation: pulseB 5s infinite;
  position: absolute;
  opacity: 0.9;
  left: 7%;
  top: 7%;
}

@keyframes pulseB {
  0% {
    box-shadow: 0 0 0 0 #0688e1;
    opacity: 0.9;
  }
  70% {
    box-shadow: 0 0 0 10px #0688e1;
    opacity: 0.6;
  }
  100% {
    box-shadow: 0 0 0 0 #0688e1;
    opacity: 0.2;
  }
}

.animacion2 {
  margin-top: 30%;
  margin-left: 30%;
  animation: pulse2 2.5s infinite;
}
@keyframes pulse2 {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0.9;
  }
}
.texto {
  width: 80%;
  border-radius: 10px;
  text-align: center;
  margin-left: 9%;
}
.texto h2 {
  font-size: 18px;
  padding: 10px;
}
.cancelar {
  margin-left: 37%;
  margin-top: 20%;
  margin-bottom: 10%;
}
.cancelar button {
  border: 1px solid #fb2f1b;
  background-color: #fb2f1b;
  border-radius: 10px;
  color: white;
  padding: 5px 10px;
}
.conjunto{
  margin: 75% 5% 0% -10%;
  border: 1px solid lightgrey;
  border-radius: 10px;
  background-color: #f8f8f8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.searchingLoader{
  margin-top: 15%;
  background-color: #0688e1;
  height: 6px;
  width: 90%;
  margin-left: 5%;
  border-radius:10px;
  opacity: 0.9;
}
.moving{
  background-color: #040acb;
  height: 6px;
  width: 10%;
  animation: moving 0.6s infinite ease-in;
  position: absolute;
  left: -5%;
  border-radius: 10px;
}

@keyframes moving {
  0%{ 
    left: -5%;
  }
  100%{
    left: 80%;
  }
}

</style>
