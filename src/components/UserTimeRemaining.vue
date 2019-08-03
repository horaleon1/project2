<template>
  <div class="containerTime">
    <div class="minutos">
      <ul>
        <li>
           Llega en  {{ $store.state.minutos }} minutos
        </li>
        <li>
          <button>Cancelar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.containerTime {
  height: 60px;
  width: 80%;
  background-color: #0435fc;
  position: absolute;
  border-radius: 10px;
  margin-left: 10%;
  opacity: 0.9;
}

.minutos{
  color: white;
}

button {
  border: 1px solid red;
  background-color: red;
  border-radius: 10px;
  padding: 7px;
  color: white;
  margin-left: 40%;
}
ul {
  list-style: none;
}
ul li {
  display: inline-block;
}
.min{
  font-size: 30px;
}
</style>

