<template>
  <div class = "container">
  <HomeAll/>
  </div>
</template>

<script>
import HomeAll from '../components/HomeAll.vue'
import Ayuda from '../components/Ayuda.vue'


export default {
  name: 'home',
  components: {
   HomeAll,
   Ayuda
  }
}
</script>

<style scoped>




</style>

