<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <b-form id="home" v-if="show">
        <b-form-group
          id="input-group-2"
          label="Type of excursion"
          label-for="input-2"
          description="Type of excursion"
        >
          <b-form-select
            v-model="search.type"
            :options="options"
            required
            :state="validTypeZone()"
            placeholder="Select the type of excursion"
          ></b-form-select>
          <b-form-invalid-feedback id="input-live-feedback">Any type of excursion has been selected</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          id="input-group-3"
          label="Where do you want the excursion"
          label-for="input-3"
          description="Put the name of the place where do you want to do the excursion"
        >
          <b-form-input
            id="input-2"
            v-model="search.where"
            required
            :state="validZone()"
            placeholder="Name of the place"
          ></b-form-input>
          <b-form-invalid-feedback
            id="input-live-feedback"
          >Introduce the name of the city or the place where you want to do the excursion</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          id="input-group-3"
          label="When will you do the excursion"
          label-for="input-3"
          description="Introduce the date of the excursion"
        >
          <b-form-datepicker
            v-model="search.date"
            class="mb-2"
            :state="validDate()"
            today-button
            reset-button
            close-button
            placeholder="seleccione fecha de excursión"
            locale="es"
          ></b-form-datepicker>
        </b-form-group>

        <div id="submit">
          <b-button
            type="button"
            @click="openOverlay()"
            variant="primary"
            :disabled="!this.validfields()"
          >Search routes</b-button>
        </div>

        <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
      </b-form>
    </div>
    <b-overlay :show="overlayShow" rounded="sm" v-if="tarjetas">
      <h1>There are the results that have been finded</h1>
      <div id="tarjetas" v-for="ruta in rutas" :key="ruta.nombre">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="ruta.src" alt="Imagen" abajo></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-card-title>{{ ruta.nombre }}</b-card-title>
                <b-card-text>{{ ruta.descripcion }}</b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <template id="overlay" v-slot:overlay>
        <div class="text-center">
          <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
          <p id="cancel-label">Please wait...</p>
        </div>
      </template>
    </b-overlay>
    <footerApp class="footer"></footerApp>
  </div>
</template>

<style>

.footer {
  position: absolute;
  bottom: 0;
}
#submit {
  display: flex;
  justify-content: center;
}
#overlay {
  position: relative;
  top: 100px;
}
#tarjetas {
  display: flex;
  justify-content: center;
  margin: 4px;
  padding: 2px;
}
h1 {
  display: flex;
  justify-content: center;
}

label {
  font-size: 1.25em;
  font-weight: bold;
}
</style>

<script>
import navbar from "./navbar";
import footerApp from "./footer";
import { Utils } from "../assets/js/utils.js";
const utils = new Utils();
export default {
  data() {
    return {
      search: {
        type: null,
        where: null,
        date: null
      },
      options: [
        { value: null, text: "Elige una opcion", disabled: true },
        { value: true, text: "Mountain" },
        { value: true, text: "Country" },
        { value: true, text: "Beach" },
        { value: true, text: "Mixto" }
      ],
      rutas: [
        {
          nombre: "Beach",
          descripcion: "Beach of mallorca",
          src:
            "https://www.abc-mallorca.es/wp-content/uploads/2012/02/cala-mondrago-best-beaches.jpg"
        },
        {
          nombre: "Beach",
          descripcion: "Beach of mallorca2",
          src:
            "https://okdiario.com/img/2020/01/13/las-5-playas-mas-bonitas-del-mundo-en-2020.jpg"
        }
      ],
      show: true,
      overlayShow: false,
      tarjetas: false
    };
  },
  components: { navbar, footerApp },
  methods: {
    openOverlay() {
      if (this.validfields()) {
        this.tarjetas = true;
        this.overlayShow = true;
        this.show = false;
        utils.setTimer(3000).then(() => {
          this.overlayShow = false;
        });
      }
    },
    validDate() {
      if (this.search.date) {
        return true;
      }
    },
    validfields() {
      return this.validTypeZone() && this.validZone && this.validDate()
        ? true
        : false;
    },
    validTypeZone() {
      if (this.search.type) {
        return true;
      }
    },
    validZone() {
      if (this.search.where) {
        return true;
      }
    }
  },

  mounted: function() {}
};
</script>
