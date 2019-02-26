<template>
  <div>
    <!-- show search box -->
    <SearchGifs/>

    <!-- show trending gifs -->
    <TrendingGifs/>
  </div>
</template>

<script>
import TrendingGifs from "../TrendingGifs";
import SearchGifs from "../SearchGifs";

export default {
  components: { TrendingGifs, SearchGifs },
  methods: {
    handleGifChosen() {}
  }
};
</script>

<style>
</style>
