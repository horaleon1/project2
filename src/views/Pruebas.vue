<template>
  <div>
    <div>
    <button @click="activ">Link 1    > </button><br>
    <div v-show="activate" class="caja">
    <h1>hola</h1>    
    </div>
    <a href="#">Link 2</a><br>
    <a href="#">Link 3</a><br>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activate:false,
    }
  },
  methods: {
    activ(){
      this.activate = !this.activate
    }
  }
};
</script>

<style <style scoped>
.class{
  margin-bottom: 5px solid black;
  height: 50px;
}
</style>

