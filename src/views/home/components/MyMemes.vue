<template>
  <div>
    <h2 class="text-5xl mb-10 text-green-800 text-center">My Memes</h2>
    <div class="text-xl text-center" v-if="!memes">
      <h3>You don't have any memes yet</h3>

      <div class="w-3/4 mt-10 mx-auto">
        <ReminderSVG/>
      </div>

      <a
        href="#"
        class="py-6 px-10 rounded-lg bg-red-500 text-red-100 no-underline text-3xl shadow-lg"
      >Create a Meme</a>
    </div>
  </div>
</template>

<script>
import ReminderSVG from "@/assets/img/reminder.svg";

export default {
  components: { ReminderSVG },
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
