<template>
  <nav>
    <div id="navbar">
      <img src="./../assets/logo.png" alt="myroutes" />
    </div>
    <div id="hamburger">
      <Reveal right  width="200">
        <a id="home" href="#">
          <span>Home</span>
        </a>
        <router-link to="/login">
        <span>Login</span>
        </router-link>
        <a id="home" href="/gallery">
          <span>Gallery</span>
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
#navbar > img {
  width: 120px;
  height: 120px;
  margin-left: 3%;
}
#hamburger {
  margin-top: 25px;
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
