<template>
  <div class = "container">
  
  <home-responsive/>
  </div>
</template>

<script>
import HomeResponsive from '../components/HomeResponsive.vue'
import HomeNormal from '../components/HomeNormal.vue'


export default {
  name: 'home',
  components: {
   HomeResponsive,
   HomeNormal
  }
}
</script>

<style scoped>




</style>

