// Just woodWIbes
<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    <router-link to="/pruebas">Pruebas</router-link>-->
    <!-- </div> -->
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<style>
@media (max-width: 992px) {
  #app {
    max-width: 992px;
    margin: -8px;
    /* user agent stylesheet */
  }
}
</style>
