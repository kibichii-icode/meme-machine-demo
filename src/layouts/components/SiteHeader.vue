<template>
  <div class="site-header">
    <nav class="navbar is-dark is-transparent">
      <div class="container">
        <div class="navbar-menu">
          <!-- logo -->
          <div class="navbar-brand">
            <router-link class="navbar-item" to="https://bulma.io">Meme Machine
              <!-- <img src="@/assets/img/bulma-logo.png" width="112" height="28"> -->
            </router-link>

            <a role="button" class="navbar-burger burger">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <!-- left side nav -->
          <div class="navbar-start">
            <router-link to="/about" class="navbar-item">About</router-link>
          </div>

          <!-- right side nav -->
          <div class="navbar-end">
            <router-link to="/" class="navbar-item">Login</router-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <SiteSearchBar/>
    </div>
  </div>
</template>

<script>
import SiteSearchBar from "./SiteSearchBar";

export default {
  components: { SiteSearchBar }
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: transparent !important;
}

.navbar-item {
}
</style>