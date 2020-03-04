<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <!-- ADD SELECT BUTTON -->
      <select name="select" class="mb-2" id="chooseRoute">
        <option value="value1">Value 1</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
      </select>
      <div id="gallery-container"></div>
    </div>
    <footerApp class="footer"></footerApp>
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

#footer {
  position: absolute;
  bottom: 0;
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

