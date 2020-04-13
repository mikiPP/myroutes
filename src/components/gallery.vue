<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <!-- SELECT BUTTON -->
      <div class="mb-2">
        <b-dropdown name="select" class="m-mb-2" text="Choose a route ! " id="chooseRoute">
          <b-dropdown-item v-for="element in [1,2,3,4]" :key="element">Value {{element}}</b-dropdown-item>
        </b-dropdown>
      </div>
      <!-- END SELECT BUTTON -->

      <!-- GALLERY -->
      <div id="gallery-container"></div>
    </div>
    <!-- END GALLERY -->

    <div v-if="index === 0">
      <footerApp id="footer"></footerApp>
    </div>
  </div>
</template>

<style>
#gallery-container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1em;
}

.card {
  padding: 10px;
  border: black solid 4px !important;
}

.card p {
  font-size: 1.2em;
}

.card img {
  border: black solid 2px !important;
}

.footer {
  position: absolute;
  bottom: 0;
}

.btn-secondary {
  background-color: #303f9f !important;
}
</style>



<script>
import makeHttpRequest from "../assets/js/httpRequest.js";
import { Utils } from "../assets/js/utils.js";
import navbar from "./navbar";
import footerApp from "./footer";

const utils = new Utils();

export default {
  element: "gallery",
  data() {
    return {
      index: 0,
      numberOfImagesToCharge: 30,
      images: null
    };
  },
  components: { navbar, footerApp },
  methods: {
    chargeImages() {
      const galleryContainer = document.getElementById("gallery-container");
      this.images
        .slice(this.index, this.index + this.numberOfImagesToCharge)
        .forEach(element => {
          const div = document.createElement("div");
          div.classList.add("card");

          const img = document.createElement("img");
          img.src = element.thumbnailUrl;
          img.alt = element.title;
          div.appendChild(img);

          const description = document.createElement("p");
          description.innerHTML = element.title;
          div.appendChild(description);

          galleryContainer.appendChild(div);
        });
      this.index += this.numberOfImagesToCharge;
    },
    fetchImages() {
      makeHttpRequest("https://jsonplaceholder.typicode.com/photos", "GET")
        .then(data => {
          this.images = data;
          this.chargeImages();
        })
        .catch(error => alert(error));
    }
  },
  mounted: function() {
    const chooseRoute = document.getElementById("chooseRoute");

    chooseRoute.addEventListener("click", () => {
      utils.setTimer(1000).then(() => this.fetchImages());
    });

    window.addEventListener("scroll", () => {
      if (
        document.body.getBoundingClientRect().bottom <
        document.documentElement.clientHeight + 150
      ) {
        this.chargeImages();
      }
    });
  }
};
</script>

