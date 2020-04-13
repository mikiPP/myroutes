<template>
  <nav>
    <div id="navbar">
      <img src="./../assets/logo.png" alt="myroutes" />
    </div>
    <div id="hamburger" v-if="width < 500">
      <Reveal right width="200">
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
    <div v-else>
      <b-row cols="6" class="bv-row mb-4">
        <b-col
          class="text-center"
          v-for="element in [
            ['  Home', 'house-door-fill'],
            ['  Listado Anime', 'list-task'],
            ['  Tipo', 'star-fill'],
            ['  Afiliados', 'people-fill'],
            ['  ¡ Pasar limite de Mega !', 'download'],
            ['  ¿ Archivos sin formato ?', 'camera-video-fill']
          ]"
          :key="element[0]"
        >
          <span>
            <strong>
              <b-icon :icon="element[1]"></b-icon>
              {{ element[0] }}
            </strong>
          </span>
        </b-col>
      </b-row>
    </div>
  </nav>
</template>

<style>
nav {
  width: 0, auto;
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

.bm-burger-bars {
  background-color: white !important;
}

.bv-row {
  background: #0e4c7c;
  color: white;
}

.text-center {
  padding: 10px;
}

.text-center:hover {
  color: #0e4c7c;
  background: white;
}
</style>

<script>
import { Reveal } from "vue-burger-menu"; // import the CSS transitions you wish to use, in this case we are using `Slide`

const width = window.innerWidth;

export default {
  components: {
    Reveal
  },
  data() {
    return {
      width
    };
  }
};
</script>
