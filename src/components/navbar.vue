<template>
  <nav>
    <div id="navbar">
      <img src="./../assets/logo.png" alt="myroutes" />
    </div>
    <div id="hamburger" v-if="width < 500">
      <Reveal id="reval" right :width="width">
        <router-link to="/home">
          <span>Home</span>
        </router-link>
        <router-link to="/gallery">
          <span>Gallery</span>
        </router-link>
        <router-link to="/login">
          <span>Login</span>
        </router-link>
      </Reveal>
    </div>
    <div v-else>
      <b-row cols="6" class="bv-row mb-4">
        <b-col
          class="text-center"
          v-for="element in [
            ['Home', 'house-door-fill', 'home'],
            ['Galeria', 'list-task', 'gallery'],
            ['construccion', 'star-fill', '#'],
            ['construccion', 'people-fill', '#'],
            ['construccion', 'download', '#'],
            ['construccion', 'camera-video-fill', '#'],
          ]"
          :key="element[0]"
          :aria-current=" '/' + element[2] === $route.path ? 'page' : false"
        >
          <span>
            <a :href="element[2]">
              <b-icon :icon="element[1]"></b-icon>
              <strong>
                {{ element[0] }}
              </strong>
            </a>
          </span>
        </b-col>
      </b-row>
    </div>
  </nav>
</template>

<style>
[aria-current] {
  font-weight: bold;
  background-color: #0B884E;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
}

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

a {
  color: white;
  font-size: 22px;
}

a:hover {
  font-size: 28px;
  color: white;
}

span {
  letter-spacing: 2px;
}

#hamburger {
  margin-top: 25px;
}

.bm-burger-bars {
  background-color: white !important;
}

.bv-row {
  background: #10B167;
  color: white;
}

.text-center {
  padding: 10px;
}

.text-center:hover {
  color: #0e4c7c;
  background: #0B884E;
  -webkit-box-shadow: 3px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 2px 5px 0px rgba(0, 0, 0, 0.75);
}
</style>

<script>
import { Reveal } from "vue-burger-menu"; // import the CSS transitions you wish to use, in this case we are using `Slide`

const width = window.innerWidth;

export default {
  components: {
    Reveal,
  },
  data() {
    return {
      width,
    };
  },
};
</script>
