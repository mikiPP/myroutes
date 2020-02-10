<template>
    <div>
<b-navbar fixed="top" sticky="true" toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand active="true" tag="h1" href="#">Myroutes</b-navbar-brand>
    <!--x-->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav >  
        <b-nav-text tag="">Myroutes Menu</b-nav-text>
        <b-nav-item @click="prueba" active href="#">Link</b-nav-item>
        <b-nav-item active href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav tag="b" align="right" small="true" class="ml-auto">
        <b-nav-form>
          
    <div id="search" class="input-group md-form form-sm form-2 pl-0">
      <input class="form-control my-0 py-1 lime-border" type="text" placeholder="Search" aria-label="Search">
      <div class="input-group-append">
        <span class="input-group-text lime lighten-2" id="basic-text1">
          <b-icon-search></b-icon-search>
        </span>
      </div>
    </div>
          
        </b-nav-form>

        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content >
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>  
</template>
<script>
export default {
    data() {
        return {
            meal: ''
        }
    },
  methods: {
    // getMeal() {
    //   ...
    // }
  }
}    
</script>

<script>
// if(window.innerWidth < 720 ) document.getElementById("search").hidden = true;
</script>
