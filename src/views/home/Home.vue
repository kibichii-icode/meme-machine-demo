<template>
  <div>
    <Hero color="bg-green-darker" class="text-center text-xl text-green-lighter">
      <h1 class="mb-4">The Factory is Open</h1>
      <h2 class="mb-10">Make them jokes</h2>

      <div>
        <router-link to="/" class="button mr-8">Create a Meme</router-link>
        <router-link to="/" class="button">Sign Up</router-link>
      </div>
    </Hero>

    <!-- show a users memes -->
    <div class="container mx-auto py-32">
      <MyMemes/>
    </div>

    <!-- or show no memes or user is logged out -->
    <div class="container mx-auto py-32">
      <CreateAMemeSection/>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import MyMemes from "./components/MyMemes";
import CreateAMemeSection from "./components/CreateAMemeSection";

export default {
  components: { Hero, MyMemes, CreateAMemeSection }
};
</script>

<style lang="scss" scoped>
h1,
h2 {
  font-family: "Staatliches", sans-serif;
  @apply text-green-lighter;
}

h1 {
  font-size: 100px;
}

h2 {
  font-size: 80px;
}

.button {
  @apply rounded 
    inline-block
    border 
    border-green-lighter
    text-green-lighter
    py-4
    px-6
    no-underline;
}
</style>
