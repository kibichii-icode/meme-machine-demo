<template>
  <div>
    <Hero color="bg-green-800" class="text-xl">
      <div class="relative w-2/3 mx-auto">
        <TryItOut :gif="randomGif"/>
        <button @click="getRandomGif" class="get-random absolute z-20 text-4xl right-0 mr-2 mt-2">🔃</button>
      </div>
    </Hero>

    <!-- show a users memes -->
    <div class="container mx-auto py-32">
      <MyMemes/>
    </div>

    <!-- or show no memes or user is logged out -->
    <div class="container mx-auto py-32">
      <TrendingGifsSection/>
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
  components: { Hero, Meme, MyMemes, TryItOut, TrendingGifsSection },
  data() {
    return {
      randomGif: null,
      memeText: ""
    };
  },
  methods: {
    async getRandomGif() {
      const apiUrl = process.env.VUE_APP_API_URL || "http://localhost:8000/api";

      try {
        const { data } = await axios.get(`${apiUrl}/gifs/random`);
        this.randomGif = data;
      } catch (e) {
        alert("api call failed for a random gif");
      }
    },
    handleSubmit() {}
  },
  mounted() {
    this.getRandomGif();
  }
};
</script>

<style lang="scss" scoped>
.get-random {
  top: 30px;
}
</style>

