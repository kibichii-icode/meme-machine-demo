<template>
  <div class="fixed bg-white rounded shadow-lg pin-b pin-r mb-10 mr-10 p-10 w-1/5">
    <FontAwesomeIcon icon="star" class="star absolute text-yellow"/>

    <h3 class="text-lg mb-8 text-green-darker">What you'll Learn on this page:</h3>
    <ul class="list-reset">
      <li v-for="(learn, index) in willLearn" :key="index" class="flex items-center mb-3">
        <FontAwesomeIcon icon="check" class="check mr-3 text-lg text-green"/>
        {{ learn }}
      </li>
    </ul>
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
.star {
  top: -30px;
  left: -30px;
  font-size: 4rem;
}
</style>