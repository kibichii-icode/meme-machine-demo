<template>
  <div>
    <form @submit.prevent="handleSubmit" novalidate>
      <!-- email -->
      <div class="mb-6">
        <label>Email</label>
        <input type="email" class="input" v-model.trim.lazy="$v.email.$model">

        <p
          class="text-sm text-red-dark mt-2"
          v-if="$v.email.$dirty && !$v.email.required"
        >Email is required.</p>
        <p
          class="text-sm text-red-dark mt-2"
          v-if="$v.email.$dirty && !$v.email.email"
        >Must be a valid email.</p>
      </div>

      <!-- password -->
      <div class="mb-6">
        <label>Password</label>
        <input type="password" class="input" v-model.lazy="$v.password.$model">

        <p
          class="text-sm text-red-dark mt-2"
          v-if="$v.password.$dirty && !$v.password.required"
        >Password is required.</p>
        <p
          class="text-sm text-red-dark mt-2"
          v-if="$v.password.$dirty && !$v.password.minLength"
        >Password must be 6 characters long.</p>
      </div>

      <button
        type="submit"
        class="w-full bg-green hover:bg-green-dark text-white font-bold p-5 rounded focus:outline-none focus:shadow-outline"
      >Login</button>
    </form>

    <p class="mt-10 mb-6">For Debugging:</p>
    <tree-view :data="$v"/>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    handleSubmit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        alert("error");
      }

      // TODO: rename to AuthForm
      // TODO: emit a custom event with email and password

      this.$store
        .dispatch("login", { email: this.email, password: this.password })
        .then(() => this.$router.push("/"))
        .catch(console.error);
    }
  }
};
</script>

<style lang="scss" scoped>
label {
  @apply block text-grey-darker text-sm font-bold mb-2;
}

input {
  @apply shadow appearance-none border rounded w-full p-4 text-grey-darker leading-tight text-lg;
}
</style>

