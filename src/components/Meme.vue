<template>
  <div class="meme">
    <img :src="url" class="relative rounded-lg z-10 object-cover w-full h-full shadow-lg">
    <p
      class="caption absolute bottom-0 left-0 right-0 mb-8 text-4xl text-white uppercase px-3 text-center"
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

  &:before,
  &:after {
    @apply bg-green-600 shadow-md rounded-lg;

    content: "";
    position: absolute;
    width: 103%;
    height: 100%;
    z-index: 0;
  }

  &:before {
    left: -10px;
    top: 10px;
    transform: rotateZ(3deg);
  }

  &:after {
    background: white;
    left: -10px;
    top: 10px;
    transform: rotateZ(-2deg);
  }
}

.caption {
  font-family: "Bowlby One";
  font-size: 70px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
}
</style>
