<template>
  <div id="app">
    <nav>Myroutes</nav>
    <b-form id="form" @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Dirección Email:"
        label-for="input-1"
        description="Cualquier email valido"
      >
        <b-alert :show="this.showAlert" variant="success"
          >Creado correctamente</b-alert
        >

        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          :state="validMail()"
          required
          placeholder="ejemplo@gmail.com"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Tu nombre:"
        label-for="input-2"
        description="No son necesarios los apellidos"
      >
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          :state="validName()"
          placeholder="nombre apellido apellido"
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback"
          >El nombre {{ form.name }} es incorrecto</b-form-invalid-feedback
        >
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Tu edad:"
        label-for="input-3"
        description="Edad maxima 100"
      >
        <b-form-input
          id="input-3"
          v-model="form.edad"
          type="number"
          :state="validAge()"
          required
          placeholder="35"
          min="1"
          max="100"
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          La edad {{ form.edad }} es
          {{ form.edad > this.edadMaxima ? "mayor" : "menor" }} que
          {{ this.edadMaxima }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group
        label="Tu password:"
        label-for="input-1"
        description="1 minuscula,1 mayuscula, 1 numero , 8 caracteres"
      >
        <b-form-input
          v-model="form.password"
          type="password"
          :state="validPass()"
          required
          placeholder="tu contraseña"
        >
        </b-form-input>
        <b-form-invalid-feedback id="input-live-feedback"
          >contraseña 1</b-form-invalid-feedback
        >
      </b-form-group>

      <b-form-group
        label="Repite password:"
        label-for="input-1"
        description="Repite tu contraseña"
      >
        <b-form-input
          v-model="form.repeatPass"
          type="password"
          :state="validRepeatPass()"
          required
          placeholder="repite tu contraseña"
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback"
          >contraseña 2</b-form-invalid-feedback
        >
      </b-form-group>

      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <b-form-radio-group
              label="Genero"
              v-model="form.genero"
              id="genero"
            >
              <b-form-radio name="radio" value="Hombre">hombre</b-form-radio>
              <b-form-radio name="radio" value="Mujer">mujer</b-form-radio>
            </b-form-radio-group>
          </b-col>
          <b-col>
            <b-form-input
              v-model="form.fechaNacimiento"
              required
              :state="validDate()"
              type="date"
              placeholder="2"
            ></b-form-input>
            <!--mensaje de error-->
            <b-form-invalid-feedback id="input-live-feedback">
              El año introducido {{ this.form.fechaNacimiento }}
              {{
                this.añoIntroducido > 1900 ? " es superior " : " es inferior "
              }}
              al año {{ añoActual }} porfavor cambie el año
            </b-form-invalid-feedback>
          </b-col>
        </b-row>
      </b-container>

      <b-form-checkbox
        id="checkbox-1"
        v-model="form.terminos"
        name="checkbox-1"
        required
        value="true"
        unchecked-value="false"
        >Acepto los terminos y condiciones</b-form-checkbox
      >

      <b-button type="submit" variant="primary" :disabled="!this.validForm()"
        >Submit</b-button
      >
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
  </div>
</template>

<script>
import { Utils } from "../assets/js/utils.js";
const utils = new Utils();

export default {
  data() {
    return {
      form: {
        email: null,
        name: null,
        edad: null,
        genero: null,
        terminos: null,
        fechaNacimiento: null,
        password: null,
        repeatPass: null,
      },
      show: true,
      añoIntroducido: null,
      edadMaxima: 100,
      edadMinima: 1,
      añoActual: new Date().getFullYear(),
      showAlert: false,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (this.validForm()) {
        this.showAlert = true;
        utils.setTimer(3000).then(() => {
          this.showAlert = false;
          utils.setItem("user", this.form.name);
          utils.setItem("email", this.form.email);
          this.$router.push({ name: 'home', query: { redirect: '/home' } });
        });
        
      }
    },
    validForm() {
      let elementosValidos = 0;
      let lengthForm = 0;
      for (const key in this.form) {
        lengthForm++;
        const element = this.form[key];
        if (element) {
          elementosValidos++;
        }
      }
      return elementosValidos === lengthForm ? true : false;
    },
    validPass() {
      let resultado = false;
      const regex = new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}");
      //1 minuscula,1 mayuscula, 1 numero , 8 caracteres
      if (this.form.password) {
        if (regex.test(this.form.password)) {
          resultado = true;
        }
        return resultado;
      }
    },
    validRepeatPass() {
      let resultado = false;
      if (this.form.repeatPass) {
        if (this.form.repeatPass === this.form.password) resultado = true;
         return resultado;
      }
     
    },
    validDate() {
      let resultado = false;
      if (this.form.fechaNacimiento) {
        //localizar guion
        let indexGuion = this.form.fechaNacimiento.indexOf("-");
        this.añoIntroducido = this.form.fechaNacimiento.substring(
          0,
          indexGuion
        );
        //comprueba que tenga una fecha valida
        if (
          this.añoIntroducido > 1900 &&
          this.añoIntroducido < this.añoActual + 1
        ) {
          resultado = true;
        }
        return resultado;
      }
    },
    validMail() {
      let resultado = false;
      //mejorar expresion
      const regex = new RegExp(
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
      );
      if (this.form.email) {
        if (regex.test(this.form.email)) {
          resultado = true;
        }
        return resultado;
      }
    },
    validAge() {
      let resultado = false;
      if (this.form.edad) {
        if (this.form.edad > 0 && this.form.edad < 110) {
          this.form.edad = Math.trunc(this.form.edad);
          resultado = true;
        }
        return resultado;
      }
    },
    validName() {
      let resultado = false;
      let expreg = new RegExp(
        `^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\\']+[\\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\\'])+[\\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\\']){0}?$`
      );
      if (this.form.name) {
        if (
          this.form.name.length > 3 &&
          expreg.test(this.form.name) &&
          this.form.name.length < 35
        ) {
          resultado = true;
        }
        return resultado;
      }
    },

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
  mounted: function () {
    document.getElementById("genero").addEventListener("click", (evento) => {
      if (!evento.target.innerHTML) {
        this.form.genero = evento.target.value;
      }
    });
    document
      .getElementById("checkbox-1")
      .addEventListener("click", (evento) => {
        this.form.terminos = !evento.target.value;
      });
  },
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
