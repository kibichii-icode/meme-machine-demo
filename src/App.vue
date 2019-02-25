<template>
  <SiteLayout id="app">
    <router-view/>
  </SiteLayout>
</template>

<script>
import SiteLayout from "@/layouts/SiteLayout";

export default {
  components: { SiteLayout }
};
</script>

<style lang="scss">
#app {
  background: #121212;
  color: #eee;
}

.title,
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #fff !important;
}
</style>
