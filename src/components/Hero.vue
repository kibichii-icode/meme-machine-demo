<template>
  <div class="hero is-bold is-dark" :class="[color, size]">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle">{{ subtitle }}</h2>

        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["color", "size", "title", "subtitle"]
};
</script>

<style lang="scss" scoped>
.hero {
  background-color: transparent !important;
  background-image: none !important;
}
</style>
