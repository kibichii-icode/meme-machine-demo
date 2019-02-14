<template>
  <nav id="nav" class="navbar is-dark">
    <div class="container">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
        </div>
        <div class="navbar-end">
          <form>
            <input type="search" class="input">
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.input {
  background: #333;
}
</style>
