<template>
  <div class="meme">
    <img :src="memeUrl" class="relative rounded-lg z-10 object-cover w-full h-full shadow-lg">
    <p
      class="caption z-10 absolute bottom-0 left-0 right-0 mb-8 text-4xl text-white uppercase px-3 text-center"
    >{{ memeCaption }}</p>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: null
    },
    caption: {
      type: String,
      default: null
    },
    meme: {
      default: null
    }
  },
  computed: {
    memeUrl() {
      return this.meme ? this.meme.gif_original_url : this.url;
    },
    memeText() {
      return this.meme ? this.meme.text : this.caption;
    }
  }
};
</script>

<style lang="scss" scoped>
.meme {
  height: 600px;
}

.caption {
  font-family: "Bowlby One";
  font-size: 70px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
}
</style>
