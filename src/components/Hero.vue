<template>
  <div class="text-center py-32">
    <h1 class="text-5xl mb-2">{{ title }}</h1>
    <h2 class="text-2xl">{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"]
};
</script>

<style>
</style>
