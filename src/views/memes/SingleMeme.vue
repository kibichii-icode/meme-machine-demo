<template>
  <Hero class="bg-green-100">
    <h2
      class="text-3xl text-green-700 mb-4"
    >Nice Meme! This was generated based on this Vue app I made!</h2>
    <div class="flex">
      <div class="w-3/4 pr-10">
        <Meme :meme="meme"/>
      </div>
      <div class="w-1/4">
        <social-sharing
          title="I made the #Vue app that made this meme!"
          twitter-user="scotch_io"
          inline-template
        >
          <div>
            <network class="button" network="twitter">Share to Twitter</network>
            <network class="button" network="facebook">Share to Facebook</network>
          </div>
        </social-sharing>
      </div>
    </div>
  </Hero>
</template>

<script>
import axios from "axios";
import Hero from "@/components/Hero";
import Meme from "@/components/Meme";

export default {
  components: { Hero, Meme },
  data() {
    return {
      meme: null
    };
  },
  methods: {
    async getMeme() {
      const memeId = this.$route.params.memeId;
      const apiUrl = process.env.VUE_APP_API_URL || "http://localhost:8000/api";
      const { data } = await axios.get(`${apiUrl}/memes/${memeId}`);
      this.meme = data;
    }
  },
  computed: {
    title() {
      return "blah";
    },
    image() {
      return "blah";
    },
    description() {
      return "blah";
    }
  },
  mounted() {
    this.getMeme();
  },
  metaInfo: {
    title: "I made the #Vue app that made this meme!",
    // OpenGraph data (Most widely used)
    meta: [
      {
        property: "og:image",
        content: this.image
      },
      // Often the same as your meta description, but not always.
      { property: "og:description", content: this.description },

      // Twitter card
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: this.title },
      {
        name: "twitter:description",
        content: this.description
      },
      {
        name: "twitter:image:src",
        content: this.image
      },

      // Google / Schema.org markup:
      { itemprop: "description", content: this.description },
      {
        itemprop: "image",
        content: this.image
      }
    ]
  }
};
</script>

<style lang="scss">
h2 {
  font-family: "Permanent Marker";
}

.button {
  @apply mb-3 w-full block p-4 bg-green-600 text-green-100 rounded shadow-md cursor-pointer;
}
</style>