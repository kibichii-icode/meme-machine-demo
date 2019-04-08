<template>
  <div>
    <Hero color="bg-green-dark" class="text-xl text-green-lighter">
      <div class="flex pr-8">
        <!-- left column -->
        <div v-if="randomGif" class="relative w-2/3">
          <Meme :url="randomGif.images.original" :caption="memeText"/>
        </div>

        <!-- right column -->
        <div class="flex flex-col items-end mr-8 justify-center w-1/3">
          <h1 class="mb">The Factory is Open</h1>
          <h2 class="mb-10">Make them jokes</h2>

          <div class="w-full">
            <form>
              <input
                type="text"
                class="w-full p-3 text-xl rounded shadow border text-right"
                placeholder="Write your meme here..."
                v-model="memeText"
              >
            </form>
          </div>
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
    getRandomGif() {
      const apiUrl = process.env.VUE_APP_API_URL || "http://localhost:8000/api";

      console.log("getting random");
      axios
        .get(`${apiUrl}/gifs/random`)
        .then(res => (this.randomGif = res.data));
    }
  },
  mounted() {
    this.getRandomGif();
  }
};
</script>

<style lang="scss" scoped>
h1,
h2 {
  font-family: "Staatliches", sans-serif;
  @apply text-green-lighter;
}

h1 {
  font-size: 50px;
}

h2 {
  font-size: 40px;
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
