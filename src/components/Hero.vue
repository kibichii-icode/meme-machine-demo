<template>
  <div class="py-32 bg-blue text-blue-lighter">
    <div class="container mx-auto">
      <h1 class="text-5xl mb-2">{{ title }}</h1>
      <h2 class="text-2xl">{{ subtitle }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle"]
};
</script>

<style>
</style>
