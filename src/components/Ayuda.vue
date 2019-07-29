<template>
  <div class="container">
    <button @click="changeAyuda()" class="buttonX">X</button>
    <h1>Centro de Ayuda </h1>
    <h3>Envia un correo a: <br> hola@ambulancias.com</h3>
  </div>
  
</template>

<script>
export default {
  // props:['ayuda'],
  data(){
    return{
      
    }
  },
  methods:{
    changeAyuda(){
      this.$emit("changeAyuda1",'false');
    },
    mensaje(){
      console.log("aqui estoy");
    }
  }
};
</script>

<style scoped>
.container{
  background-color: #f3f4f6;
  height: 900px;
  position:absolute;
  height: 100%;
  margin-top: 10%;
}
.container h1{
 margin-top: 25%;
 width: 80%;
}
h3{
  width: 80%;
  font-size: 20px;
}
.buttonX{
  font-size: 30px;
  float: left;
  margin-left: 5%;
  margin-top: 5%;
}
</style>



