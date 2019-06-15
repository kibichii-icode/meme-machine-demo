<template>
  <div v-if="gif" class="relative w-2/3 mx-auto">
    <div class="caption-this absolute text-4xl text-green-200">
      <p>Try it out! Caption this 👇</p>
    </div>

    <!-- form to get the text -->
    <form class="flex" @submit.prevent="handleSubmit">
      <input
        type="text"
        class="flex-1 p-4 mb-6 text-xl rounded shadow bg-green-200 mr-2 shadow-lg"
        placeholder="Caption this thing..."
        v-model="text"
      >
      <button class="h-full p-4 w-32 bg-red-700 text-red-100 rounded shadow-lg">Save It!</button>
    </form>

    <div class="relative">
      <!-- show the meme -->
      <Meme :url="gif.images.original" :caption="text"/>

      <!-- get random gif button -->
      <button
        @click="getRandomGif"
        class="get-random absolute z-20 text-4xl right-0 top-0 mr-2 mt-2"
      >🔃</button>
    </div>
  </div>
</template>

<script>
import Meme from "@/components/Meme";

export default {
  components: { Meme },
  props: ["gif"],
  data() {
    return { text: "" };
  },
  methods: {
    handleSubmit() {
      this.$emit("gifSaved", { text });
    },
    getRandomGif() {
      this.$emit("gifRequested");
    }
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
