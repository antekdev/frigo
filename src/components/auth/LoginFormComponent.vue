<template>
    <div class='auth-form'>
        <h1 class='auth-form__inner-title'>Login form</h1>
        <input class='auth-form__input' v-model='email' type="email" placeholder="Email" />
        <p class='auth-form__validation-error'>{{errorEmail}}</p>
        <input class='auth-form__input' v-model='password' type="password" placeholder="Password" />
        <p class='auth-form__validation-error'>{{errorPassword}}</p>
        <button class='auth-form__button' @click="submit">Submit</button>
    </div>
</template>

<script>
import {validateEmail, validatePassword} from '@/helpers/validators'
import router from '@/router'

function submit() {
  let isFormValid = true // this.validateForm(); 
  if (isFormValid) {
    console.log('Success!')
    // continue with gql mutation here
    router.push('explore/fridge')
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
  return isFormValid
}

export default {
  name: 'LoginFormComponent',
  data: () => ({
    email: '',
    password: '',
    errorEmail: '',
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