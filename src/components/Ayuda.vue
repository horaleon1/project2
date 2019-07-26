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
      this.$emit("changeAyuda",'ayuda = !ayuda');
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
}
.container h1{
 margin-top: 50px;
 width: 80%;
}
.buttonX{
  font-size: 50px;
}
</style>



