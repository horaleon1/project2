<template>
<div class="containerNav">
 <button @click="$store.state.mapDirection = !$store.state.mapDirection">
  <div class="nav">
  <eva-icon name="navigation" height="40px" width="40px" class="icon"></eva-icon>
  <h4>Navegar</h4>
 </div>
 </button>
 


</div>
  
</template>

<script>
export default {
  
}
</script>

<style scoped>

.containerNav{
  height: 80px;
  width: 70px;
  background-color: lightgrey;
  border-radius: 14px;
  opacity: 0.8;
  position: absolute;
  z-index: 9999;
}
h4{
  margin-top: -5%;
}
.nav{
  margin-top: 10%;
}
</style>
