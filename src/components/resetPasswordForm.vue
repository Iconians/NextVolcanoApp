<script lang="ts">
import { defineComponent, ref } from 'vue'
import 'vue-toast-notification/dist/theme-default.css'
import { useToast } from 'vue-toast-notification'
import { supabase } from '../../supabase.js'

export default defineComponent({
  name: 'resetPasswordForm',
  setup(_, { emit }) {
    const toast = useToast()
    const formError = ref('')
    const form = ref({
      email: ''
    })

    async function resetPassword(e: Event) {
      e.preventDefault()

      try {
        let { error } = await supabase.auth.resetPasswordForEmail(form.value.email, {
          redirectTo: 'https://volcano-trivia-app.vercel.app/forgotPasswordPage'
        })

        if (error) {
          formError.value = error.message
        } else {
          toast.success('Password reset email sent successfully')
          emit('submittedForgotPasswordForm')
        }
      } catch (error) {
        toast.error('Error in resetPasswordForm method')
      }
    }

    return { toast, formError, form, resetPassword }
  }
})
</script>

<template>
  <div class="text-wrapper text-white bg-black/50 p-12 rounded-3xl h-11">
    <h1 class="text-3xl">Volcano Quiz</h1>
    <p class="text-2xl">Please enter your Email to reset your Password</p>
    <div>
      <form @submit="resetPassword" class="flex flex-col">
        <label class="text-2xl" for="username">Email</label>
        <input
          class="rounded text-black p-1"
          type="email"
          id="username"
          name="email"
          v-model="form.email"
        />
        <input
          class="rounded text-2xl mt-3 bg-brown-500 p-1 cursor-pointer"
          type="submit"
          value="submit"
        />
      </form>
      <div v-if="formError.length">{{ formError }}</div>
    </div>
  </div>
</template>

<style scoped>
.text-wrapper {
  height: 300px;
}
@media (max-width: 600px) {
  .text-wrapper {
    width: 80%;
    margin-bottom: 20px;
    margin: auto;
    height: auto;
  }
}
</style>
