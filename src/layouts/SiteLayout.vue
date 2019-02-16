<template>
  <div>
    <SiteHeader/>
    <slot/>
    <SiteFooter/>
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export default {
  components: { SiteHeader, SiteFooter }
};
</script>