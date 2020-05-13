<template>
    <div class='auth-form'>
        <h1 class='auth-form__inner-title'>Register form</h1>
        <input class='auth-form__input' v-model='email' type="email" placeholder="Email" />
        <p class='auth-form__validation-error'>{{errorEmail}}</p>
        <input class='auth-form__input' v-model='displayName' placeholder="Display Name" />
        <p class='auth-form__validation-error'>{{errorDisplayName}}</p>
        <input class='auth-form__input' v-model='password' type="password" placeholder="Password" />
        <p class='auth-form__validation-error'>{{errorPassword}}</p>
        <button class='auth-form__button' @click="submit">Submit</button>
    </div>
</template>

<script>
import {validateEmail, validatePassword, validateDisplayName} from '@/helpers/validators'

function submit() {
  let isFormValid = this.validateForm(); 
  if (isFormValid) {
    console.log('Success!')
    // continue with gql mutation here
  }
}

function validateForm() {
  let isFormValid = true
  if (!validateEmail(this.email)) {
    isFormValid = false
    this.errorEmail = 'Please, check your email'
  } else this.errorEmail = ''
  if (!validatePassword(this.password)) {
    isFormValid = false
    this.errorPassword = 'Please, check your password'
  } else this.errorPassword = ''
  if (!validateDisplayName(this.displayName)) {
    isFormValid = false
    this.errorDisplayName = 'Please, check your display name'
  } else this.errorDisplayName = ''
  return isFormValid
}

export default {
  name: 'RegisterFormComponent',
  data: () => ({
    email: '',
    displayName: '',
    password: '',
    errorEmail: '',
    errorDisplayName: '',
    errorPassword: ''
  }),
  methods: {
    submit,
    validateForm
  }
}
</script>

<style scoped>
</style>