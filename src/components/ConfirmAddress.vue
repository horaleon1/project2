<template>
  <div class="containerConfirm">
    <div>
      <button @click="goBackNewService">
        <eva-icon name="arrow-back" class="icons arrowRed" height="30px" width="30px"></eva-icon>
      </button>
    </div>

    <img src="../assets/marker.png" alt class="imgMarker" />
    <div class="texto">
      <h3>Confirma tu dirección</h3>
      <input type="text" placeholder="Tonalá 10
     Roma Norte,Ciudad de México,CDMX,México " />
    </div>
    <div>
      <button class="pedir" @click="pedirServicio">Pedir</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    pedirServicio() {
      this.$store.state.pedir = !this.$store.state.pedir;
      // this.$store.state.pedido = !this.$store.state.pedido;
      // this.$store.state.confirmAddress = !this.$store.state.confirmAddress;
    },
    goBackNewService() {
      this.$store.state.confirmAddress = !this.$store.state.confirmAddress;
      this.$store.state.seguir = !this.$store.state.seguir;
    }
  }
};
</script>

<style scoped>
@media (min-width: 993px) {
  .containerConfirm {
    position: absolute;
    top: 10%;
    margin-left: 40%;
    border: 1px solid lightgrey;
    border-radius: 10px;
    background-color: #f3f4f6;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 300px;
    height: 300px;
    background-color: #f3f4f6;
    text-align: center;
  }
  .imgMarker {
    height: 60px;
    width: 70px;
    margin-top: 10%;
  }
  input {
    width: 90%;
    border-radius: 4px;
    border: 1px solid lightgray;
  }
  .pedir {
    width: 60%;
    border-radius: 15px;
    padding: 6px 8px;
    border: #fb2f1b;
    background-color: #fb2f1b;
    color: white;
    letter-spacing: 1.5px;
    text-align: center;
    font-size: 20px;
    margin-top: 15%;
  }
  .pedir:active {
    opacity: 0.7;
  }
  .arrowRed {
    position: absolute;
    fill: #fb2f1b;
  }
}
@media (max-width: 992px) {
  .containerConfirm {
    position: absolute;
    bottom: 4%;
    margin-left: 9%;
    border: 1px solid lightgrey;
    border-radius: 10px;
    background-color: #f3f4f6;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 300px;
    height: 300px;
    background-color: #f3f4f6;
    text-align: center;
  }
  .imgMarker {
    height: 60px;
    width: 70px;
    margin-top: 10%;
  }
  input {
    width: 90%;
    border-radius: 4px;
    border: 1px solid lightgray;
  }
  .pedir {
    width: 60%;
    border-radius: 15px;
    padding: 6px 8px;
    border: #fb2f1b;
    background-color: #fb2f1b;
    color: white;
    letter-spacing: 1.5px;
    text-align: center;
    font-size: 20px;
    margin-top: 15%;
  }
  .pedir:active {
    opacity: 0.7;
  }
  .arrowRed {
    position: absolute;
    fill: #fb2f1b;
    margin-top: 1%;
    left: 7%;
  }
}
</style>

