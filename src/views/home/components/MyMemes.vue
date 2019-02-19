<template>
  <div class="memes-box">
    <h2 class="title is-2">My Memes</h2>
    <p>
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
.memes-box {
  background: #222;
  border-radius: 5px;
  padding: 50px;

  p {
    margin-bottom: 50px;
  }
}
</style>
