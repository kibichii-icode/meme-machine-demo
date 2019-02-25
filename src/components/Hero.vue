<template>
  <div class="hero is-bold is-dark" :class="[color, size]">
    <div class="hero-body">
      <div class="container">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["color", "size"]
};
</script>

<style lang="scss" scoped>
.hero {
  background-color: transparent !important;
  background-image: none !important;
}
</style>
