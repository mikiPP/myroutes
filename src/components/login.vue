<template>
  <div class="container full-page">
    <div class="form-card card-container">
      <img alt class="card-img" id="profile-img" src="../assets/logo.png" />
      <p id="profile-name" class="profile-name-card"></p>
      <form id="login" class="form-class">
        <span id="reauth-email" class="reauth-email"></span>
        <input
          type="email"
          id="email"
          class="form-control"
          placeholder="Email"
          formControlName="email"
          required
          autofocus
        />
        <input
          type="password"
          id="password"
          class="form-control"
          placeholder="Contraseña"
          formControlName="password"
          required
        />
        <b-button class="btn-block btn-form" type="submit" variant="success">Login</b-button>
      </form>
      <p v-if="false" class="text-danger">El usuario y/o contraseña son incorrectos</p>
    </div>
  </div>
</template>

<script>
export default {
  element: "login",
  mounted: function() {
    document.getElementById("login").addEventListener("submit", event => {
      event.preventDefault();
      console.log("Navigate to home..");
    });
  }
};
</script>

<style scoped>
.card-container.form-card {
  max-width: 350px;
  padding: 40px 40px;
}

.form-btn {
  font-weight: 700;
  height: 36px;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

/*
 * Card component
 */
.form-card {
  background-color: #3f51b5;
  /* shadows and rounded borders */
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

/*
 * Form styles
 */
.profile-name-card {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0 0;
  min-height: 1em;
}

.reauth-email {
  display: block;
  color: #404040;
  line-height: 2;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.form-class #inputEmail,
.form-class #inputPassword {
  direction: ltr;
  height: 44px;
  font-size: 16px;
}

.form-class input[type="email"],
.form-class input[type="password"],
.form-class input[type="text"],
.form-class button {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  z-index: 1;
  position: relative;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.btn-form {
  padding: 0;
  font-weight: 700;
  font-size: 14px;
  height: 36px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  border: none;
  -o-transition: all 0.218s;
  -moz-transition: all 0.218s;
  -webkit-transition: all 0.218s;
  transition: all 0.218s;
}

.forgot-password {
  color: rgb(104, 145, 162);
}

.forgot-password:hover,
.forgot-password:active,
.forgot-password:focus {
  color: rgb(12, 97, 33);
}

.fake-link:hover,
.fake-link:focus {
  cursor: pointer;
}
</style>