<template>
<div class="container">
  <button>
  <eva-icon name="close" class="icons" height="40px" width="40px" @click="goBack"></eva-icon> 
  </button>
  <h2>Ambulancias</h2>
  <h1>Historial de Servicios</h1>

</div>

</template>

<script>
export default {
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
  
}
</script>

<style scoped>
.container{
  background-color: #e4e4e5;
  height: 1000px;
}
.icons{
  margin-top: 5%;
  margin-left: 5%;
}

</style>

