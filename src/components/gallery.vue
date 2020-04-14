<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <!-- SELECT BUTTON -->
      <div class="mb-2">
        <b-dropdown name="select" class="m-mb-2" text="Choose a route ! " id="chooseRoute">
          <b-dropdown-item
            v-for="element in ['Mountain', 'Beach', 'Country', 'All']"
            :key="element"
          >{{ element }}</b-dropdown-item>
        </b-dropdown>
      </div>
      <!-- END SELECT BUTTON -->

      <!-- GALLERY -->

      <b-overlay :show="overlayShow" rounded="sm" v-if="index != -1">
        <h1>This are the pictures from the route selected</h1>
        <div id="gallery-container" class="mt-4"></div>
        <template id="overlay" v-slot:overlay>
          <div class="text-center">
            <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
            <p id="cancel-label">Please wait...</p>
          </div>
        </template>
      </b-overlay>
    </div>
    <!-- END GALLERY -->

    <div v-if="index === -1">
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

/* .card {
  padding: 10px;
  border: black solid 4px !important;
}

.card p {
  font-size: 1.2em;
}

.card img {
  border: black solid 2px !important;
  width: 100%;
  height: auto;
} */

#footer {
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
      show: true,
      overlayShow: false,
      index: -1,
      numberOfImagesToCharge: 30,
      images: null
    };
  },
  components: { navbar, footerApp },
  methods: {
    openOverlay() {
      this.index = 0;
      this.overlayShow = true;
      this.show = false;
      this.fetchImages();
      utils.setTimer(3000).then(() => {
        this.overlayShow = false;
      });
    },
    chargeImages() {
      const galleryContainer = document.getElementById("gallery-container");
      this.images
        .slice(this.index, this.index + this.numberOfImagesToCharge)
        .forEach(element => {
          // const div = document.createElement("div");
          // div.classList.add("card");

          // const img = document.createElement("img");
          // img.src = element.thumbnailUrl;
          // img.alt = element.title;
          // div.appendChild(img);

          // const description = document.createElement("p");
          // description.innerHTML = element.title;
          // div.appendChild(description);

          // galleryContainer.appendChild(div);

          const cardContainer = document.createElement("div");

          cardContainer.classList = " card overflow-hidden";
          cardContainer.style.maxWidth = "540px";

          const card = document.createElement("div");
          card.classList = "row no-gutters";

          const cardImg = document.createElement("div");
          cardImg.classList = "col-md-6";

          const img = document.createElement("img");
          img.classList = "card-img";
          img.alt = element.title;
          img.src = element.thumbnailUrl;

          cardImg.appendChild(img);

          card.appendChild(cardImg);

          const cardBodyContainer = document.createElement("div");
          cardBodyContainer.classList = "col-md-6";

          const cardBody = document.createElement("div");
          cardBody.classList = "card-body";

          const title = document.createElement("p");
          title.classList = "card-title";
          title.innerHTML = "Title";
          cardBody.appendChild(title);

          const description = document.createElement("small");
          description.classList = "card-text";
          description.innerHTML = element.title;
          cardBody.appendChild(description);

          cardBodyContainer.appendChild(cardBody);

          card.appendChild(cardBodyContainer);

          cardContainer.appendChild(card);

          galleryContainer.appendChild(cardContainer);
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
      utils.setTimer(1000).then(() => this.openOverlay());
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
