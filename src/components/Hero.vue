<template>
  <div class="text-center py-32" :class="[color, size]">
    <div class="container">
      <slot/>
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
