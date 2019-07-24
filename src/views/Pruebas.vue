<template>
  <div>
    <div>
      From: <input type="text" v-model.lazy="origin"><br>
      to: <input type="text" v-model.lazy="destination"><br>
      <iframe  width="100%" height="500px" :src="src()"></iframe>
    </div>
    //segundo mapa

    <div>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activate:false,
      origin:'mi ubicacion',
      destination:'hospital angeles del pedregal',
      url:'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCHB7fzFranaqMKbud-JdC_4FwwPNsrNKs',
      // segundo mapa
    }
  },
  methods: {
    activ(){
      this.activate = !this.activate
    },
    src(){
      return this.url+='&origin='+this.origin+'&destination='+this.destination;
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

