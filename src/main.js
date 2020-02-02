import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial);

// Importing the Rhea PrimeVue theme styles
import "primevue/resources/themes/rhea/theme.css";

// Importing the base PrimeVue component styles
import "primevue/resources/primevue.min.css";

// Importing the base PrimeIcon styles
import "primeicons/primeicons.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
