<template>
  <div>
    <Hero class="has-text-centered" size="is-medium">
      <h1 class="title is-1 is-spaced">The Factory is Open</h1>
      <h2 class="subtitle is-2">Meme Machine Here We Go!</h2>

      <a class="button is-danger is-large">Create a Meme</a>
      <a class="button is-danger is-large is-outlined">Sign Up</a>
    </Hero>

    <!-- show a users memes -->
    <div class="section">
      <div class="container">
        <MyMemes/>
      </div>
    </div>

    <!-- or show no memes or user is logged out -->
    <div class="section">
      <div class="container">
        <CreateAMemeSection/>
      </div>
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
.button {
  margin-top: 30px;
  margin-right: 15px;
}
</style>
