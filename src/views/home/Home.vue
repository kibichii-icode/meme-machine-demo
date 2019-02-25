<template>
  <div>
    <Hero title="Hello" subtitle="Whatup">
      <a href="#" class="button is-danger is-large">Login</a>
      <a href="#" class="button is-danger is-large is-outlined">Sign Up</a>
    </Hero>

    <!-- show a users memes -->
    <MyMemes/>

    <!-- or show no memes or user is logged out -->
    user has no memes or is logged out
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
</style>
