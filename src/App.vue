<template>
      <div id="app">
        <Button label="Primary" icon="pi pi-plus" />
        // Adding the class "p-button-success" to the 2nd PrimeVue Button labeled "Success"
        <Button label="Success" icon="pi pi-plus" class="p-button-success" />
      </div>
    </template>

    <script>
    import Button from 'primevue/button';

    export default {
      name: 'app',
      components: {
        Button
      }
    }

    </script>

    <style>
    body {
      margin: 0;
    }

    #app {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    </style>