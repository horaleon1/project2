<template>
  <div class="containerAnimacion" v-show="alertOff">
    <button @click="alertOff = !alertOff">
      <div class="animacion">
        <div class="animacion2">
        </div>
      </div>
          <h3> {{ $store.state.segundosRestantes }} </h3>
          
          <h1>Emergencia</h1>
    </button>

    
    
  </div>
</template>

<script>
import { setTimeout } from 'timers';


export default {
  components:{

  },
  data(){
    return{
      alertOff: true
    }
  },
  methods:{
    countDown(){
      if(this.$store.state.segundosRestantes > 0){
        setTimeout( () => {
          this.$store.state.segundosRestantes -= 1
          this.countDown()
        },1000)
      } else if(this.$store.state.segundosRestantes == 0) {
        this.$store.state.alertAmbulance = !this.$store.state.alertAmbulance
      }
    }
  },
  created() {
     this.countDown()
  },
  // beforeDestroy(){
  //   clearInterval()
  // }
};
</script> 

<style scoped>
.containerAnimacion {
  margin-top: 30%;
  margin-left: 16%;
  position: absolute;
}
.animacion:not(h3) {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  box-shadow: 0 0 0 #f91a1a;
  animation: pulse 2s infinite;
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

.animacion2:not(h3) {
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
  margin-top: 0%;
  margin-left: 23%;
  font-size: 30px;
  opacity: 0.8;
}
.direccion{
  margin:5%;
  background-origin: 1px solid lightgrey;
}
h3{
  font-size: 35px;
  color: black;
  font-weight: 700;
  padding-left: 40%;
  padding-top: 20%;
  opacity: 0.8;
}
</style>

