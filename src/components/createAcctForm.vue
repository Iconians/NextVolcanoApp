<script lang="ts">
import { defineComponent, ref } from 'vue'
import { supabase } from '../../supabase.js'
import 'vue-toast-notification/dist/theme-default.css'
import { useToast } from 'vue-toast-notification'
export default defineComponent({
  name: 'createAcctForm',
  emits: ['accountCreated'],
  setup(_, { emit }) {
    const toast = useToast()
    const formError = ref('')
    const form = ref({
      password: '',
      email: '',
      displayName: ''
    })

    const createAccount = async (e: Event) => {
      e.preventDefault()

      const { data, error } = await supabase.auth.signUp({
        email: form.value.email,
        password: form.value.password
      })

      if (error) {
        toast.error('Error creating account')
      } else {
        toast.success('Account created')
      }
      if (data?.user) {
        const { error: insertError } = await supabase
          .from('profile')
          .insert([{ user_id: data.user.id, display_name: form.value.displayName, score: [] }])

        if (insertError) {
          toast.error('Error in saving account details')
        } else {
          toast.success('Account details saved')
        }
      } else {
        toast.error('No user found')
      }
      emit('accountCreated', data?.user)
      localStorage.setItem('user', JSON.stringify(data.user))
    }
    return { createAccount, formError, form }
  }
})
</script>

<template>
  <div class="text-wrapper text-white mb-5 bg-black/50 p-12 rounded-3xl createFormWrapper">
    <h1 class="text-3xl">Volcano Quiz</h1>
    <p class="text-2xl mb-5 font-thin">
      Create an account to see if you are smart enough to be a volcanologist?
    </p>
    <div>
      <form @submit="createAccount" class="flex flex-col mb-5">
        <label class="text-2xl mt-1" for="username">Username</label>
        <input
          class="rounded text-black p-1"
          type="text"
          id="username"
          name="userName"
          v-model="form.displayName"
          maxlength="3"
        />
        <label class="text-2xl mt-5" for="email">Email</label>
        <input
          class="rounded text-black p-1"
          type="email"
          id="email"
          name="email"
          v-model="form.email"
        />
        <label class="text-2xl mt-5" for="password">Password</label>
        <input
          class="rounded text-black p-1"
          type="password"
          id="password"
          name="password"
          v-model="form.password"
        />

        <input
          class="rounded text-2xl mt-5 mb-10 p-1 cursor-pointer color"
          type="submit"
          value="submit"
        />
      </form>
    </div>
  </div>
</template>

<style scoped>
.text-wrapper {
  height: 500px;
}
@media (max-width: 600px) {
  .text-wrapper {
    width: 80%;
    margin-bottom: 20px;
  }

  .createFormWrapper {
    margin: auto;
    height: auto;
  }
}

.color {
  animation: colorChange 2s infinite;
}

@keyframes colorChange {
  0% {
    color: red;
  }
  50% {
    color: yellow;
  }
  100% {
    color: red;
  }
}
</style>
