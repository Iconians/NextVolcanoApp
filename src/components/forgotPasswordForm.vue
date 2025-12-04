<script lang="ts">
import { defineComponent, ref } from 'vue'
import { supabase } from '../../supabase.js'
import { useToast } from 'vue-toast-notification'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'forgotPasswordForm',
  setup() {
    const toast = useToast()
    const formError = ref('')
    const form = ref({
      password: ''
    })

    const router = useRouter()

    async function forgotPassword(e: Event) {
      e.preventDefault()

      try {
        const { error } = await supabase.auth.updateUser({
          password: form.value.password
        })

        if (error) {
          formError.value = error.message
          console.log('error')
        } else {
          toast.success('Password reset successfully')
          router.push('/')
        }
      } catch (error) {
        toast.error('Error in forgotPasswordForm method')
      }
    }
    return { toast, formError, form, forgotPassword }
  }
})
</script>

<template>
  <div class="text-wrapper text-white m-auto bg-black/50 p-12 rounded-3xl">
    <h1 class="text-center text-3xl">Volcano Quiz</h1>
    <p class="text-center text-2xl">Please reset your Password</p>
    <div>
      <form @submit="forgotPassword" class="flex flex-col text-center">
        <label class="mt-2 text-2xl" for="password">Update Password</label>
        <input
          class="rounded text-black p-1"
          type="password"
          id="password"
          name="password"
          v-model="form.password"
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
  }
}
</style>
