<template>
  <div class="main full-page">
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
          v-model="form.email"
        />
        <input
          type="password"
          id="password"
          class="form-control"
          placeholder="Contraseña"
          formControlName="password"
          required
          v-model="form.password"
        />
        <b-button class="btn-block btn-form" type="submit" variant="success">Login</b-button>
      </form>
      <b-alert :show="this.tried" variant="danger">{{message}}</b-alert>
    </div>
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
        password: null
      },
      message: "Your credentials are not valid for this user and password",
      tried: false
    };
  },
  element: "login",
  mounted: function() {
    document.getElementById("login").addEventListener("submit", event => {
      event.preventDefault();
      if (
        utils.getItem("email") === this.form.email &&
        utils.getItem("password") === this.form.password
      ) {
        console.log("Navigate");
      } else {
        this.tried = true;
      }
    });
  }
};
</script>

<style scoped>
.card-img {
  width: auto;
}

.card-container {
  background-color: #303f9f;
  padding: 40px 40px;
  height: 100%;
  text-align: center;
}

.form-btn {
  font-weight: 2em;
  height: 36px;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

/*
 * Card component
 */

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