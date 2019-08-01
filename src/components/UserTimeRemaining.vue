<template>
  <div class="containerTime">
    <div class="minutos">
      <ul>
        <li>
          <h1>{{ $store.state.minutos }}</h1>
        </li>
        <li>
          <h3>Minutos</h3>
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
  width: 70%;
  background-color: #0435fc;
  position: absolute;
  margin-top: -25%;
  border-radius: 10px;
  margin-left: 15%;
  opacity: 0.9;
}
.minutos {
  margin-left: -10%;
  margin-top: -10%;
}
.minutos h1,
.minutos h3 {
  color: white;
  margin-bottom: 10%;
}

button {
  border: 1px solid red;
  background-color: red;
  border-radius: 10px;
  padding: 7px;
  color: white;
  margin-left: 10%;
}
ul {
  list-style: none;
}
ul li {
  display: inline-block;
}
</style>

