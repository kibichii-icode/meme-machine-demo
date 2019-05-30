<template>
  <div class="bg-green-500">
    <nav class="px-10 flex">
      <!-- logo -->
      <div class="flex">
        <router-link class="link logo text-xl" to="/">Meme Machine</router-link>
      </div>

      <!-- left side nav -->
      <div class="flex">
        <router-link class="link" to="/about">About</router-link>
      </div>

      <!-- right side nav -->
      <div class="ml-auto flex">
        <router-link class="link" to="/create">Create a Meme</router-link>
        <router-link class="link my-5" to="/login">
          Login
          <FontAwesomeIcon class="ml-3" icon="star"/>
        </router-link>
        <router-link
          class="link bg-red-400 text-red-700 hover:bg-red-500 shadow-xl my-5 rounded"
          to="/login"
        >
          Register
          <FontAwesomeIcon class="ml-3" icon="coffee"/>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.link {
  @apply px-8 py-4 block text-green-100 no-underline text-lg flex items-center;

  &:hover {
    @apply text-green-100;
  }
}

.logo {
  @apply text-5xl text-green-100;

  font-family: "Staatliches", sans-serif;
}
</style>