<template>
  <div v-if="gif" class="relative w-2/3 mx-auto">
    <div class="caption-this absolute text-4xl text-green-200">
      <p>Try it out! Caption this 👇</p>
    </div>

    <form class="flex" @submit.prevent="handleSubmit">
      <input
        type="text"
        class="flex-1 p-4 mb-6 text-xl rounded shadow bg-green-200 mr-2 shadow-lg"
        placeholder="Caption this thing..."
        v-model="text"
      >
      <button
        type="submit"
        class="h-full p-4 w-32 bg-red-700 text-red-100 rounded shadow-lg"
      >Save It!</button>
    </form>

    <Meme :url="gif.images.original" :caption="text"/>
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
      this.$emit("gif-saved", { text });
    }
  }
};
</script>

<style>
</style>
