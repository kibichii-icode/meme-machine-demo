<template>
  <div>
    <!-- try it out section -->
    <Hero color="bg-green-800" class="text-xl">
      <TryItOut/>
    </Hero>

    <!-- show a users memes -->
    <div class="container mx-auto py-32">
      <MyMemes/>
    </div>

    <!-- or show no memes or user is logged out -->
    <div class="bg-green-100">
      <div class="container mx-auto py-32">
        <TrendingGifsSection/>
      </div>
    </div>

    <TourGuide
      :willLearn="[
        'Composing Vue components',
        'Site layouts',
        'Data binding',
        'Login modal',
        '3rd party components (icons, modals)',
        'API calls to get data'
      ]"
    />
  </div>
</template>

<script>
import axios from "axios";
import Hero from "@/components/Hero";
import Meme from "@/components/Meme";
import MyMemes from "./components/MyMemes";
import TryItOut from "./components/TryItOut";
import TrendingGifsSection from "./components/TrendingGifsSection";

export default {
  components: { Hero, Meme, MyMemes, TryItOut, TrendingGifsSection }
};
</script>

