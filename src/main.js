import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";
// import login from "./components/login.vue"; 

//src/main.js
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/styles/main.css";
//import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: "/index", name:"index", component: () => import(/*webpackChunkName: "index"*/"./components/index.vue")},
    { path: "/singup", name:"singup", component: () => import(/*webpackChunkName: "singup"*/"./components/singUp.vue")},
    { path: "/login", name:"login", component: () => import(/*webpackChunkName: "login"*/"./components/login.vue")},
    { path: "/gallery", name:"gallery", component: () => import(/*webpackChunkName: "gallery"*/"./components/gallery.vue")},
    { path: "/**", name:"index", component: () => import(/*webpackChunkName: "index"*/"./components/index.vue")},
    // { path: "/login", component: login }
  ]
  // { path: '/', component: Home }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
