<template>
<div class="container">
  <router-link to="/hospital">
  <eva-icon name="arrow-back" class="icons" height="40px" width="40px" @click="goBack"></eva-icon> 
  </router-link>
   <h3>Hospitales</h3>
  <h1>Historial de Servicios</h1>
  <h3> {{ $store.state.userAmbulance.historial }} </h3>
</div>

</template>

<script>
export default {
  data(){
    return{
      historial: ''
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
  
}
</script>

<style scoped>
.container{
  background-color: #f8f8f8;
  height: 1000px;
}
.icons{
  fill: #040acb;
}
.button{
  margin-top: 5%;
  margin-left: 5%;
}

</style>