<template>
  <div class="meme">
    <img :src="url" class="rounded-lg w-full h-full">
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
  &:before {
    content: "";
    position: absolute;
    width: 105%;
    height: 90%;
    transform: rotateZ(5deg);
    z-index: -1;
    left: -2rem;
    top: 0rem;
    background: linear-gradient(to right, rgb(78, 68, 214), rgb(55, 50, 119));
  }
}
.caption {
  font-family: "Bowlby One";
  font-size: 70px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
}
</style>
