<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <b-form id="home" @submit="true" v-if="show">
        <b-form-group
          id="input-group-2"
          label="Tipo de excursion:"
          label-for="input-2"
          description="Tipo de excursion"
        >

          <b-form-select v-model="search.type" :options="options" required
            :state="true" placeholder="Selecciona el tipo de excursion"></b-form-select>
          <b-form-invalid-feedback id="input-live-feedback"
            >No has seleccionado ningun tipo de excursion</b-form-invalid-feedback
          >
        </b-form-group>
        <b-form-group id="input-group-3" label="Zona Excursion" label-for="input-3" 
          description="Escribe el nombre de la zona o ciudad donde quieres hacer la excursion">
            <b-form-input
              id="input-2"
              v-model="search.where"
              required
              :state="true"
              placeholder="Nombre ciudad o zona"
            ></b-form-input>
         <b-form-invalid-feedback id="input-live-feedback"
            >Introduce el nombre de la ciudad o zona donde quieres hacer la excursion</b-form-invalid-feedback
          >
      </b-form-group>
     <b-form-group id="input-group-3" label="Zona Excursion" label-for="input-3" 
   description="Introduce la fecha de la excursión">
    
    <b-form-datepicker  v-model="search.date" class="mb-2" :state="true"
      today-button
      reset-button
      close-button
      placeholder="seleccione fecha de excursión"
      locale="es"></b-form-datepicker>
     </b-form-group>

      <p>Value: '{{ search.date }}'</p>
      <div id="submit">
         <b-button type="submit"  variant="primary" :disabled="true"
          >Submit</b-button>
      </div>
       
        <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
      </b-form>
    </div>
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
</style>

<script>
import navbar from "./navbar";
import footerApp from "./footer";

export default {
  data() {
    return {
      search: {
        type: null,
        where:null,
        date: null
      },
        options: [
          { value: null, text: 'Elige una opcion', disabled: true },
          { value: true, text: 'Montaña' },
          { value: true, text: 'Bosque' },
          { value: true, text: 'Playa' },
          { value: true, text: 'Mixto'}
        ],
      show: true,
    };
  },
  components: { navbar, footerApp },
  methods: {},

  mounted: function () {},
};
</script>
