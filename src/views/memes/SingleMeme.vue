<template>
  <div>meme goes here</div>
</template>

<script>
import axios from "axios";

export default {
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
