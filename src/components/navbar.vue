<template>
  <nav>
    <div id="navbar">
      <img src="./../assets/logo.png" alt="myroutes">
    </div>
    <Reveal right>
      <a id="home" href="#">
        <span>Home</span>
      </a>
      <a id="home" href="#">
        <span>Login</span>
      </a>
      <a id="home" href="#">
        <span>Historial</span>
      </a>
      <a id="home" href="#">
        <span>prueba</span>
      </a>
    </Reveal>
  </nav>
</template>

<style>
#navbar {
  background-color: #303F9F;
  width: auto;
}

reveal {
  display: flex;
  justify-content: right;
}
</style>

<script>
import { Reveal } from "vue-burger-menu"; // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
  components: {
    Reveal
  }
};
</script>
