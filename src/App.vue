<template>
  <SiteLayout id="app">
    <router-view/>
  </SiteLayout>
</template>

<script>
import SiteLayout from "@/layouts/SiteLayout";

export default {
  components: { SiteLayout },
  metaInfo() {
    meta: {
      title: "Meme Machine";
    }
  }
};
</script>