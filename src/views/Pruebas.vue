<template>
  <div>
    <div>
      From:
      <input type="text" v-model.lazy="origin" />
      <br />to:
      <input type="text" v-model.lazy="destination" />
      <br />
      <iframe width="100%" height="500px" :src="src()"></iframe>
    </div>

    <div></div>
  </div>
</template>

<script>
// import maps from "../maps.js";

export default {
  data() {
    return {
          activate:false,
          origin:'narvarte',
          destination:'tonala 10',
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
    // 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCHB7fzFranaqMKbud-JdC_4FwwPNsrNKs=&origin=mi ubicacion
  
  //  async mounted() {
  //   try {
  //     const google = await maps();
  //     const geocoder = new google.maps.Geocoder();
  //     const map = new google.maps.Map(this.$el);

  //     geocoder.geocode({ address: 'Austria' }, (results, status) => {
  //       if (status !== 'OK' || !results[0]) {
  //         throw new Error(status);
  //       }

  //       map.setCenter(results[0].geometry.location);
  //       map.fitBounds(results[0].geometry.viewport);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
};
</script>

<style <style scoped>
/* .class{
  margin-bottom: 5px solid black;
  height: 50px;
} */
</style>

