<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <!-- ADD SELECT BUTTON -->

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
import navbar from "./navbar";
import footerApp from "./footer";

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
      makeHttpRequest(
        "https://jsonplaceholder.typicode.com/photos",
        "GET"
      ).then(data => {
        this.images = data;
        this.chargeImages();
      });
    }
  },
  mounted: function() {
    this.fetchImages();
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

