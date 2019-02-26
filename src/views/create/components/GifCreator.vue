<template>
  <div>
    <!-- we need to find a gif first -->
    <div v-if="currentState === 1">
      <Step1Choose :gif="gif" @gifChosen="handleGifChosen"/>
    </div>

    <!-- gif is chosen. now caption it -->
    <div v-if="currentState === 2">
      <Step2Caption :gif="gif"/>
    </div>

    <!-- button to next/submit -->
  </div>
</template>

<script>
import Step1Choose from "./steps/Step1Choose";
import Step2Caption from "./steps/Step2Caption";

export default {
  data() {
    return {
      currentState: null,
      gif: null,
      meme: null
    };
  },
  components: { Step1Choose, Step2Caption },
  methods: {
    handleGifChosen(e) {
      console.log(e);
    }
  }
};
</script>