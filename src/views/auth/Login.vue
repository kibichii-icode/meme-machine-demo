<template>
  <div class="bg-green-200 flex items-center justify-center min-h-screen">
    <div class="bg-white shadow-lg p-16 rounded-lg mt-32 mb-32 w-1/3">
      <h2 class="text-4xl text-green-500 text-center mb-16">Login</h2>
      <LoginForm/>
    </div>

    <TourGuide
      :willLearn="[
        'Vue form validation',
        'Async validation with API checks',
        'Processing a form' 
      ]"
    />
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm";

export default {
  components: { LoginForm }
};
</script>

<style>
</style>
