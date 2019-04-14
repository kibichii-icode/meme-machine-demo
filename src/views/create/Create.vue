<template>
  <div>
    <GifCreator/>

    <TourGuide
      :willLearn="[
        'Data binding',
        'Getting data from an API',
        'Storing data to an API', 
        'Using Vuex for application actions'
      ]"
    />
  </div>
</template>

<script>
import GifCreator from "./components/GifCreator";

export default {
  data() {
    return {};
  },
  components: { GifCreator },
  methods: {}
};
</script>