<template>
  <div>
    <div class="vehiculo">
      <div class="datosVehiculo">
        <div class="seccionA">
          <img src="../assets/ambu1.jpg" class="ambulanciaImg" />
        </div>

        <div class="seccionB">
          <ul>
            <li>Ambulancia: 045</li>
            <li>Ford E450 2019</li>
            <li>Placas: AEJF541</li>
            <li>Colores: Rojo y blanco</li>
          </ul>
        </div>

        <div class="seccionC">
          <ul>
            <li>Tripulación</li>
            <li>T.U.M. Arturo Ortega</li>
            <li>T.U.M. Jorge Hernandez</li>
            <li>T.U.M. Andrea Galicia</li>
            <li>Ambulancias México</li>
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

        <div class="seccionE">
          <textarea
            name="message"
            rows="7"
            cols="25"
            placeholder=" Ingresa los síntomas del paciente"
          ></textarea>
          <button class="buttonSeccionE">Enviar</button>
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
@media (min-width: 993px) {
  .vehiculo {
    width: 23%;
    position: absolute;
    bottom: 3%;
    margin-left: 1.7%;
  }
  .datosVehiculo {
    margin: 5%;
    border: 1px solid lightgrey;
    border-radius: 10px;
    background-color: #f3f4f6;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .tripulacionImagen {
    border-radius: 50%;
    height: 32px;
    width: 32px;
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
    margin-left: 10%;
    margin-top: 5%;
  }
  .seccionB {
    margin-left: 0%;
  }
  .seccionB ul li {
    margin-bottom: 3px;
  }
  .seccionC ul li {
    margin-top: 10%;
  }
  .seccionC {
    margin-top: 2%;
  }
  .seccionD{
    margin-left: 13.5%;
  }
  
  .ambulanciaImg {
    border-radius: 5px;
    height: 90px;
    width: 120px;
  }
  .seccionE {
    margin-left: 7%;
  }
  .seccionE textarea {
    border-radius: 10px;
    margin: 3%;
    background-color:#F0EFEF;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .seccionE button {
    margin-top: 10%;
    margin-left: 10%;
    margin-right: 1%;
    position: absolute;
    border-radius: 12px;
    padding: 8px 14px;
    border: #fb2f1b;
    background-color: #fb2f1b;
    color: white;
    letter-spacing: 1.5px;
    text-align: center;
    font-size: 12px;
  }
  .seccionE button:active{
    opacity: 0.6;
  }
}
@media (max-width: 992px) {
  .datosVehiculo {
    margin: 3%;
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
  .seccionD{
    margin-left: 3%;
  }
  .ambulanciaImg {
    border-radius: 5px;
    height: 60px;
    width: 60px;
  }
  .seccionE {
    margin-left: 7%;
  }
  .seccionE textarea {
    border-radius: 10px;
    margin: 3%;
    background-color:#F0EFEF;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .seccionE button {
    margin-top: 10%;
    margin-left: 5%;
    margin-right: 1%;
    position: absolute;
    border-radius: 12px;
    padding: 8px 14px;
    border: #fb2f1b;
    background-color: #fb2f1b;
    color: white;
    letter-spacing: 1.5px;
    text-align: center;
    font-size: 12px;
  }
  .seccionE button:active{
    opacity: 0.6;
  }
}
</style>

