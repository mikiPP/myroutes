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
import * as httpRequest from "../assets/js/httpRequest.js";
import navbar from "./navbar";
import footerApp from "./footer";

export default {
  element: "gallery",
  components: { navbar, footerApp },
  mounted: function() {
    // here we should add add event lisener to the option value

    const galleryContainer = document.getElementById("gallery-container");

    httpRequest("https://jsonplaceholder.typicode.com/photos", "GET").then(
      data => {
        const images = Array.from(data.slice(0, 30));
        images.forEach(element => {
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
      }
    );
  }
};
</script>

