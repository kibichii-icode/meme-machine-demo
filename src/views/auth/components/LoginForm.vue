<template>
  <div>
    <form :submit="submitForm">
      <!-- email -->
      <div class="field">
        <label for class="label"></label>
        <input type="email" class="input">

        <p class="help is-error" v-if="$v.email.dirty && $v.email.invalid">Email is required.</p>
      </div>

      <!-- password -->
      <div class="field">
        <label for class="label"></label>
        <input type="email" class="input">

        <p
          class="help is-error"
          v-if="$v.password.dirty && $v.password.invalid"
        >Password is required and must be 6 characters long.</p>
      </div>
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
  }
};
</script>

<style>
</style>
