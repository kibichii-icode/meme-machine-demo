<template>
  <Hero>
    <div class="flex">
      <div>
        {{ meme.id }}
        <Meme :meme="meme"/>
      </div>
      <div>
        <img :src="meme.captioned_url">
      </div>
    </div>
  </Hero>
</template>

<script>
import axios from "axios";
import Hero from "@/components/Hero";

export default {
  components: { Hero },
  data() {
    return {
      meme: null
    };
  },
  methods: {
    async getMeme() {
      const memeId = this.$route.params.memeId;
      const apiUrl = process.env.VUE_APP_API_URL || "http://localhost:8000/api";
      const { data } = await axios.get(`${apiUrl}/memes/${memeId}`);
      this.meme = data;
    }
  },
  mounted() {
    this.getMeme();
  }
};
</script>

<style>
</style>
