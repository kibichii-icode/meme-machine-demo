<template>
  <div
    class="bg-green-darkest text-green-dark text-center py-10"
  >Copyright &copy; Meme Machine 1850-{{ thisYear }}</div>
</template>

<script>
export default {
  data() {
    return {
      thisYear: new Date().getFullYear()
    };
  }
};
</script>
