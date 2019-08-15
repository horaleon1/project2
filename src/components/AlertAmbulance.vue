<template>
  <div class="containerAnimacion" v-show="alertOff">
    <button @click="changeAll">
      <div class="animacion">
        <div class="animacion2"></div>
      </div>
      <img src="../assets/siren.png" alt="Imagen sirena Ambulancia" id="siren" />
      <h3>{{ $store.state.segundosRestantes }}</h3>
      <h1>Emergencia</h1>
    </button>

    <div v-show="alertOff">
      <audio autoplay loop>
        <!-- <source src="../assets/soundAlertAmbulance.wav" type="audio/wav" /> -->
      </audio>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";

export default {
  props: {
    sound: "./assets/soundAlertAmbulance.wav"
  },
  components: {},
  data() {
    return {
      alertOff: true
    };
  },
  methods: {
    countDown() {
      if (this.$store.state.segundosRestantes > 0) {
        setTimeout(() => {
          this.$store.state.segundosRestantes -= 1;
          this.countDown();
        }, 1000);
      } else if (this.$store.state.segundosRestantes == 0) {
        this.$store.state.alertAmbulance = !this.$store.state.alertAmbulance;
      }
    },
    soundAlert() {
      var audio = new Audio("./assets/soundAlertAmbulance.wav");
      audio.play();
    },
    changeAll() {
      this.alertOff = !this.alertOff;
      this.$store.state.nav = !this.$store.state.nav;
    }
  },
  created() {
    this.countDown();
  }
  // beforeDestroy(){
  //   clearInterval()
  // }
};
</script> 

<style scoped>
.containerAnimacion {
  margin-top: 20%;
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
  margin-top: -10%;
  margin-left: 23%;
  font-size: 30px;
  opacity: 0.8;
}
.direccion {
  margin: 5%;
  background-origin: 1px solid lightgrey;
}
h3 {
  font-size: 35px;
  color: black;
  font-weight: 700;
  padding-left: 35%;
  opacity: 0.8;
  margin-top: 10%;
}
#siren {
  height: 50px;
  width: 50px;
  margin-left: 38%;
  margin-top: 15%;
  animation: pulse3 1s infinite;
  opacity: 1;
}
@keyframes pulse3 {
  0% {
    opacity: 1;
  }
  70% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.7;
  }
}
</style>

