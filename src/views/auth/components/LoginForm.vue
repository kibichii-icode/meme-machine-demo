<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <!-- email -->
      <label>Email</label>
      <input type="email" class="input" v-model="email">

      <p class="help is-error" v-if="$v.email.dirty && $v.email.invalid">Email is required.</p>

      <!-- password -->
      <label>Password</label>
      <input type="password" class="input" v-model="password">

      <p
        class="help is-error"
        v-if="$v.password.dirty && $v.password.invalid"
      >Password is required and must be 6 characters long.</p>

      <button type="submit" class="button is-large is-danger">Login</button>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      required
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    handleSubmit() {
      this.$store
        .dispatch("login", { email: this.email, password: this.password })
        .then(() => this.$router.push("/"))
        .catch(console.error);
    }
  }
};
</script>

<style>
</style>
