<template>
  <div>if a user is logged in show their memes here. if they dont have any memes then show a message</div>
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

<style>
</style>
