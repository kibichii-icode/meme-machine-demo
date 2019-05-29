<template>
  <div class="create-a-meme-section">
    <!-- show a trending section so users can create a new meme -->
    <!-- if not logged in, then redirect them to the login/register page -->
    <!-- trending gifs -->
    <div v-if="trendingGifs">
      <h2 class="title is-2">Let's make magic</h2>
      <p>Select a GIF to create a meme.</p>

      <div class="flex flex-wrap">
        <div class="w-1/2 p-2" v-for="gif in trendingGifs" :key="gif.id">
          <router-link class="gif" :to="{ name: 'create', params: { gifId: gif.id }}">
            <img :src="gif.images.fixed_height">
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
.gif {
  position: relative;
  height: 100%;
  width: 100%;
  display: block;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 0.1s ease transform;
}
</style>

