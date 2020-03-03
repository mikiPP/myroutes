<template>
  <div id="index" class="main full-page">
    <h1>myroutes</h1>
    <div id="buttons">
      <b-button id="sign-up" variant="success">Sign up</b-button>
      <b-button id="login" variant="success">Login</b-button>
    </div>
  </div>
</template>
<style scoped>
.main {
  background-color: #303f9f;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: white;
}
#buttons {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  top: 25%;
}
#login {
  margin: 5% 2% 0 2%;
}
#sign-up {
  margin: 0 2%;
}
</style>
<script>
export default {
  element: "index",
  mounted: function() {
    document.getElementById("buttons").addEventListener("click", event => {
      if (event.target.id === "sign-up") {
        console.log("sign-up");
      } else if (event.target.id === "login") {
        console.log("login");
      }
    });
  }
};
</script>