<template>
  <div class="bg-green-dark">
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
        <router-link class="link border border-green-lighter my-4 rounded" to="/">Login</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.link {
  @apply px-8
    py-4
    block 
    text-green-lighter 
    no-underline 
    text-lg 
    flex
    items-center;

  &:hover {
    @apply text-green-lightest;
  }
}

.logo {
  @apply text-5xl text-green-lighter;

  font-family: "Staatliches", sans-serif;
}
</style>