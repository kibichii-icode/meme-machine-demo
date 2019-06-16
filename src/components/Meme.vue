<template>
  <div class="meme">
    <img :src="url" class="relative rounded-lg z-10 object-cover w-full h-full shadow-lg">
    <p
      class="caption z-10 absolute bottom-0 left-0 right-0 mb-8 text-4xl text-white uppercase px-3 text-center"
    >{{ caption }}</p>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    caption: String
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
