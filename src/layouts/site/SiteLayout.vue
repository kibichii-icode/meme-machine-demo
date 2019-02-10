<template>
  <div>
    <SiteHeader/>
    <router-view/>
    <SiteFooter/>
  </div>
</template>

<script>
import SiteHeader from "@/layouts/site/components/SiteHeader";
import SiteFooter from "@/layouts/site/components/SiteFooter";

export default {
  components: { SiteHeader, SiteFooter }
};
</script>