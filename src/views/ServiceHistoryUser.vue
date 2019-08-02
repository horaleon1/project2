<template>
<div class="container">
  <button>
  <eva-icon name="close" class="icons" height="40px" width="40px" @click="goBack"></eva-icon> 
  </button>
  <h1>Historial de Servicios</h1>
  <h3> {{ $store.state.userAmbulance.historial }} </h3>
  <h3></h3>
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
  background-color: #e4e4e5;
  height: 1000px;
}
.icons{
  margin-top: 5%;
  margin-left: 5%;
}

</style>

