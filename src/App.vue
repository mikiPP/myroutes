<template>
 <div>
    <navbar></navbar>

    <footerApp></footerApp>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import footerApp from "./components/footer";
export default {
  components: { navbar, footerApp}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
