<template>
  <div>
    <div class="vehiculo">
      <div class="datosVehiculo">
        <div class="seccionA">
          <img src="../assets/ambu1.jpg" alt height="60px" width="60px" class="ambulanciaImg" />
        </div>

        <div class="seccionB">
          <ul>
            <li>Ambulancia: 045</li>
            <li>Ford E450 2019</li>
            <li>Placas: AEJF541</li>
          </ul>
        </div>

        <div class="seccionC">
          <ul>
            <li>Tripulación</li>
            <li>T.U.M. Arturo Lopez</li>
            <li>T.U.M. Jorge Perez</li>
            <li>T.U.M. Andrea Galicia</li>
          </ul>
        </div>

        <div class="seccionD">
          <ul>
            <li>
              <img :src="url" alt class="tripulacionImagen" />
            </li>
            <li>
              <img :src="url" alt class="tripulacionImagen" />
            </li>
            <li>
              <img :src="url" alt class="tripulacionImagen" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: ""
    };
  },
  mounted() {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        this.user = data;
        this.url = data.results[0].picture.medium;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.datosVehiculo {
  margin: 5%;
  border: 1px solid lightgrey;
  border-radius: 10px;
  background-color: #f8f8f8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.tripulacionImagen {
  border-radius: 50%;
  height: 30px;
  width: 30px;
  height: 100%;
}
ul {
  list-style: none;
}
.seccionA,
.seccionB,
.seccionC,
.seccionD {
  display: inline-block;
}
.seccionA {
  margin-left: 14%;
  margin-top: 5%;
}
.seccionB {
  margin-left: 0%;
}
.seccionB ul li {
  margin-bottom: 3px;
}
.seccionC ul li {
  margin-top: 12%;
}
.seccionC {
  margin-top: -5%;
}
.ambulanciaImg {
  border-radius: 5px;
}
</style>

