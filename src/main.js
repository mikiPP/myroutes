import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/styles/main.css";
import { BContainer, BRow, BCol } from "bootstrap-vue";


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('b-container', BContainer)
Vue.component('b-row', BRow)
Vue.component('b-col', BCol)


Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: "/home", name:"home", component: () => import(/*webpackChunkName: "home"*/"./components/home.vue")},
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
