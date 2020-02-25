<template>
  <div id="app">
    <nav>
      Myroutes
    </nav>
    <b-form id="form" @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Introduce tu email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Tu nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Miki mono"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Tu edad:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.edad"
          type="number"
          :state="validAge()"
          required
          placeholder="Tu edad"
          min="1"
          max="100"
        ></b-form-input>
      </b-form-group>

      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <b-form-radio-group label="Genero" v-model="form.genero" id="genero">
              <b-form-radio name="radio" value="Hombre">Hombre</b-form-radio>
              <b-form-radio name="radio" value="Mujer">Mujer</b-form-radio>
            </b-form-radio-group></b-col
          >
          <b-col> <b-form-input v-model="form.fechaNacimiento" :state="validDate()" type="date" placeholder="Enter your name">
          </b-form-input>
          <!--mensaje de error-->
           <b-form-invalid-feedback id="input-live-feedback">{{mensajeError("año",this.añoIntroducido,this.añoActual)}}</b-form-invalid-feedback>
    <div class="mt-2">Value: {{ form.fechaNacimiento }}</div></b-col>
        </b-row>
      </b-container>

      <b-form-checkbox
        id="checkbox-1"
        v-model="form.terminos"
        name="checkbox-1"
        value="true"
        unchecked-value="false">
        Acepto los terminos y condiciones
      </b-form-checkbox>

      <div>
        State: <strong>{{ form.terminos }}</strong>
      </div>

      <b-button type="submit" variant="primary">Submit</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        edad: null,
        genero: "",
        terminos: false,
        fechaNacimiento:null
      },
      show: true,
      añoIntroducido:null,
      añoActual:new Date().getFullYear()
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },mensajeError(datoReferencia,variable,datoAdicional=""){
      let mensaje = "El "+ datoReferencia + " introducido  " + variable;
      mensaje += variable < 1900 ? " es inferior " : " es superior ";
      mensaje += "al " + datoReferencia + " actual " + datoAdicional +" porfavor cambie el " + datoReferencia;
      return mensaje;
    },
    validDate(){
      let resultado = false;
      if (this.form.fechaNacimiento) {
        //localizar guion
        let indexGuion = this.form.fechaNacimiento.indexOf("-");
        this.añoIntroducido = this.form.fechaNacimiento.substring(0,indexGuion);
        //comprueba que tenga una fecha valida
        if (this.añoIntroducido > 1900  && this.añoIntroducido < this.añoActual -8){ 
          resultado = true;
        }
      return resultado
      }
    },
    validAge(){
      if (this.form.edad > 0 && this.form.edad < 110 && !this.form.edad.includes("e")) {
        this.form.edad = Math.round(this.form.edad);
        return true 
      }
      return false
    }

    // onReset(evt) {
    //   evt.preventDefault();
    //   // Reset our form values
    //   this.form.email = "";
    //   this.form.name = "";
    //   this.form.food = null;
    //   this.form.checked = [];
    //   // Trick to reset/clear native browser form validation state
    //   this.show = false;
    //   this.$nextTick(() => {
    //     this.show = true;
    //   });
    // }
  },
  mounted: function() {
    document.getElementById("genero").addEventListener("click", evento => {
      if (!evento.target.innerHTML) {
        this.form.genero = evento.target.value;
      }
    });
    document.getElementById("checkbox-1").addEventListener("click", evento => {
      this.form.terminos = !evento.target.value;
    });
  }
};
</script>

<style>
div {
  width: auto;
  padding: 1px;
  margin: 1px;
}
nav {
  margin: 0 !important;
  padding: 0 !important;

  position: relative;
  bottom: 1.5em;
  width: 100%;
  height: 100px;
  background-color: #3f51b5;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: white;
  font-size: 2.5em;
  padding: 1.5em;
}
</style>
