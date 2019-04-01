<template>
  <div>
    <h2 class="text-5xl mb-10">My Memes</h2>
    <p class="text-xl">
      You don't have any memes yet.
      <a href="#">Create one now.</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memes: null
    };
  },
  methods: {
    getMemes() {}
  },
  mounted() {
    this.getMemes();
  }
};
</script>

<style lang="scss" scoped>
</style>
