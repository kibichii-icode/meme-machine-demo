<template>
  <div
    class="tour-guide fixed bg-white rounded shadow-lg bottom-0 right-0 z-10 mb-10 mr-10 p-6 w-1/5"
  >
    <FontAwesomeIcon icon="star" class="star absolute text-yellow-500"/>

    <h3 class="text-lg mb-4 text-green-800">What you'll learn on this page:</h3>
    <ul class="list-reset">
      <li v-for="(learn, index) in willLearn" :key="index" class="flex items-center mb-3">
        <FontAwesomeIcon icon="check" class="check mr-3 text-lg text-green-500"/>
        {{ learn }}
      </li>
    </ul>

    <a
      href="https://scotch.io/books/vue"
      class="py-2 px-1 bg-yellow-300 block no-underline text-center text-xl text-yellow-800 rounded shadow-lg mt-8 hover:bg-yellow-200"
    >Get the Book!</a>
  </div>
</template>

<script>
export default {
  props: {
    willLearn: Array
  }
};
</script>

<style lang="scss" scoped>
.tour-guide {
  min-width: 400px;
}

.star {
  top: -30px;
  left: -30px;
  font-size: 4rem;
  filter: drop-shadow(3px 3px 10px rgba(0, 0, 0, 0.2));
}
</style>