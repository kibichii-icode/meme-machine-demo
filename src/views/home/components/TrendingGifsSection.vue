<template>
  <div>
    <!-- show a trending section so users can create a new meme -->
    <!-- if not logged in, then redirect them to the login/register page -->
    <!-- trending gifs -->
    <div v-if="trendingGifs">
      <h2 class="text-5xl mb-2 text-green-800 text-center">Let's make magic</h2>
      <p class="text-xl text-center mb-10">Select a GIF to create a meme.</p>

      <div class="flex flex-wrap">
        <div class="w-1/3 p-2" v-for="gif in trendingGifs" :key="gif.id">
          <router-link
            class="relative h-64 w-full block overflow-hidden"
            :to="{ name: 'create-single', params: { gifId: gif.id }}"
          >
            <img class="object-cover h-full w-full rounded-lg" :src="gif.images.fixed_height">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      trendingGifs: null
    };
  },
  mounted() {
    this.getTrendingGifs();
  },
  methods: {
    getTrendingGifs() {
      const apiUrl = process.env.VUE_APP_API_URL || "http://localhost:8000/api";
      axios
        .get(`${apiUrl}/gifs/trending`)
        .then(res => (this.trendingGifs = res.data));
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  transition: 0.3s ease transform;
}

img:hover {
  transform: scale(1.1);
}
</style>