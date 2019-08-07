<template>
  <div class="containerMap">
    <iframe :src="generatedSrc" width="378px" height="450px" style="border:0" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: 0,
      longitude: 0
    };
  },
  computed: {
    generatedSrc() {
      return (
        "https://www.google.com/maps/embed/v1/place?key=" +
        this.apiKey +
        "&q=" +
        this.latitude +
        "," +
        this.longitude
      );
    }
    // generatedSrc2(){

    // }
  },
  props: {
    apiKey: {
      type: String,
      default: "AIzaSyCHB7fzFranaqMKbud-JdC_4FwwPNsrNKs"
    }
  },
  mounted() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(position => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }
  }
};
</script>


<style scoped>
</style>


