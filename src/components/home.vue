<template>
  <div>
    <navbar></navbar>
    <b-form id="home" @submit="true" v-if="show">
      <b-form-group
        id="input-group-2"
        label="Tu nombre:"
        label-for="input-2"
        description="No son necesarios los apellidos"
      >
        <b-form-input
          id="input-2"
          v-model="search.type"
          required
          :state="true"
          placeholder="nombre apellido apellido"
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback"
          >El nombre {{ search.type }} es incorrecto</b-form-invalid-feedback
        >
      </b-form-group>

      <b-button type="submit" variant="primary" :disabled="true"
        >Submit</b-button
      >
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
    <footerApp class="footer"></footerApp>
  </div>
</template>

<style>

#footer {
  position: absolute;
  bottom: 0;
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
      },show:true
    };
  },
  components: { navbar, footerApp },
  methods: {
    
    },
   

  mounted: function() {

  }
};
</script>

