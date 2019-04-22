<template>
  <div>
    <Hero color="bg-green-dark" class="text-xl">
      <div v-if="randomGif" class="relative w-2/3 mx-auto">
        <div class="caption-this absolute text-4xl text-green-lightest">
          <p>Try it out! Caption this 👇</p>
        </div>

        <form class="flex" @submit.prevent="handleSubmit">
          <input
            type="text"
            class="flex-1 p-4 mb-3 text-xl rounded shadow bg-green-lighter mr-2"
            placeholder="Caption this thing..."
            v-model="memeText"
          >
          <button
            type="submit"
            class="h-full p-4 w-32 bg-yellow text-yellow-darker rounded"
          >Save It!</button>
        </form>

        <div class="relative">
          <button @click="getRandomGif" class="absolute pin-t pin-r mr-2 mt-2">🔃</button>
          <Meme :url="randomGif.images.original" :caption="memeText"/>
        </div>
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
import CreateAMemeSection from "./components/CreateAMemeSection";

export default {
  components: { Hero, Meme, MyMemes, CreateAMemeSection },
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
        alert("wtf");
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
.caption-this {
  top: -70px;
  left: -150px;
  transform: rotate(-7deg);
  font-family: "Permanent Marker";
}
</style>
