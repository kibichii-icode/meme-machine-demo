<template>
  <div>
    <!-- we need to find a gif first -->
    <div v-if="currentState === 1"></div>

    <!-- gif is chosen. now caption it -->
    <div v-if="currentState === 2"></div>

    <!-- button to next/submit -->
  </div>
</template>

<script>
export default {
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