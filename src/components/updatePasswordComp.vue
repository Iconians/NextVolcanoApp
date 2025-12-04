<script setup lang="ts">
import { supabase } from '../../supabase'
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'

const newUserName = ref('')
const formError = ref('')
const toast = useToast()

const emit = defineEmits<{ (event: 'updateUsername', answer: string): void }>()
const handleSubmit = (answer: string) => {
  emit('updateUsername', answer)
}

const updateUsername = async (e: Event) => {
  e.preventDefault()
  const user = localStorage.getItem('user')
  const userObj = user ? JSON.parse(user) : null
  if (user) {
    const update = await supabase
      .from('profile')
      .update({ display_name: newUserName.value })
      .match({ user_id: userObj.id })

    const updateHiScore = await supabase
      .from('high_score')
      .update({ user_name: newUserName.value })
      .eq('user_name', userObj.display_name)

    if (update.error || updateHiScore.error) {
      newUserName.value = ''
      if (update.error) {
        formError.value = update.error.message
        toast.error(update.error.message)
      } else if (updateHiScore.error) {
        console.log(updateHiScore)
        formError.value = updateHiScore.error.message
        toast.error(updateHiScore.error.message)
      }
    } else {
      localStorage.setItem('user', JSON.stringify({ ...userObj, display_name: newUserName.value }))
      handleSubmit(newUserName.value)
      newUserName.value = ''
      toast.success('Username updated')
    }
  }
}
</script>

<template>
  <div class="my-[auto] update-password-comp-wrapper">
    <div class="mb-5 text-2xl">Update Username</div>
    <form class="flex flex-col" @submit="updateUsername">
      <input
        v-model="newUserName"
        class="text-black rounded h-8"
        placeholder="  Change UserName"
        type="text"
        maxlength="3"
      />
      <input
        class="mt-5 bg-brown-500 rounded h-10 btnOnHover text-xl cursor-pointer"
        type="submit"
        value="Change UserName"
      />
    </form>
    <div class="mt-5" v-if="formError.length">{{ formError }}</div>
  </div>
</template>

<style scoped>
@media (max-width: 1115px) {
  .update-password-comp-wrapper {
    margin-top: 2rem;
    overflow: auto;
  }
}
@media (max-width: 635px) {
  .update-password-comp-wrapper {
    margin-top: 2rem;
  }
}

.btnOnHover:hover {
  animation: colorChange 3s infinite;
}

@keyframes colorChange {
  0% {
    background-color: red;
    color: black;
  }
  50% {
    background-color: yellow;
    color: red;
  }
  100% {
    background-color: red;
    color: black;
  }
}
</style>
