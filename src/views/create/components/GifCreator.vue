<template>
  <div>
    <!-- we need to find a gif first -->
    <div v-if="currentState === 1">
      <SearchGifs/>
      <TrendingGifs/>
    </div>

    <!-- gif is chosen. now caption it -->
    <div v-if="currentState === 2">
      <Step2Caption :gif="gif"/>
    </div>

    <!-- button to next/submit -->
  </div>
</template>

<script>
import Step2Caption from "./steps/Step2Caption";
import TrendingGifs from "./TrendingGifs";
import SearchGifs from "./SearchGifs";

export default {
  components: { Step1Choose, Step2Caption, TrendingGifs, SearchGifs },
  data() {
    return {
      currentState: 1,
      gif: null,
      meme: null
    };
  },
  methods: {
    handleGifChosen(e) {
      console.log(e);
    }
  }
};
</script>