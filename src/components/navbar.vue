<template>
  <nav>
    <div id="navbar">
      <img src="./../assets/logo.png" alt="myroutes" />
    </div>
    <div id="hamburger">
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
    </div>
  </nav>
</template>

<style>

nav {
  width:0, auto;
}
#navbar {
  background-color: #303f9f;
}
#hamburger {
  position: relative;
  
  bottom: 10em;
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
