<template>
  <form id="app">
    <h1>{{ msg }}hola{{ sayHello() }}</h1>
    <label for="nombre">nombre
      <input type="text" name="nombre" placeholder="nombre" v-model="nombre" />
    </label>
    <label for="apellidos">apellidos
      <input type="text" placeholder="apellidos" name="apellidos" v-model="apellidos" />
    </label>
    <label for="edad">edad
      <input type="number" name="edad" max="115" min="1" placeholder="11" v-model.number="edad"/>
    </label>

    <!--checkbox-->
    <div id="checkbox">
      <label for="genero">genero</label>
      
      <label for="hombre">
        <input type="radio" v-model="genero[0]"/>
        <span></span>
      hombre
      </label>

      <label for="mujer">
        <input type="radio" />
        <span></span>
        mujer
      </label>
    </div>

    <label for="fecha nacimiento"
      >cumpleaños
      <input type="date" name="cumpleaños" placeholder="1/10/1990" v-model="fechaNacimieto"/>
    </label>
    
    <label for="email"
      >cumpleaños
      <input type="email" name="email" placeholder="a@gmail.com" v-model="email"/>
    </label>

    <label class="container">
      <input type="checkbox"  />
      <span></span>
    politicas</label>
    <button type="submit" value="enviar">registrar</button>
  </form>
</template>

<script>

export default {
  element: "#app",
  data: function() {
    return { msg: "hola",
    fechaNacimieto:null,
    nombre:null,
    apellidos:null,
    edad:null,
    email:null,
    genero:[false,false]};
  },
  methods: {
    sayHello: function() {
      return "hello";
    }
  }
};
</script>

<style></style>
