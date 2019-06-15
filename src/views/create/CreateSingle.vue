<template>
  <div>stuff goes here</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return { gif: null };
  },
  methods: {
    getOneGif() {
      const apiUrl = process.env.VUE_APP_API_URL || "http://localhost:8000/api";
      axios
        .get(`${apiUrl}/gifs/${this.$route.params.gifId}`)
        .then(res => (this.gif = res.data));
    }
  },
  mounted() {
    this.getOneGif();
  }
};
</script>

<style>
</style>
