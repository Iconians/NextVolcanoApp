<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { supabase } from '../../supabase'
import router from '@/router'

const signOut = async () => {
  let { error } = await supabase.auth.signOut()
  if (!error) {
    localStorage.removeItem('user')
    router.push('/')
  }
}
</script>

<template>
  <div class="flex w-[500px] justify-around my-5 mx-auto btnWrapper">
    <div class="flex justify-around">
      <router-link
        class="flex items-center justify-center bg-brown-500 rounded h-12 w-[200px] btnOnHover text-xl"
        to="/"
        >Back to Start</router-link
      >
    </div>
    <div class="flex flex-wrap btns">
      <button class="bg-brown-500 rounded h-12 w-32 text-xl btnOnHover" @click="signOut">
        Sign Out
      </button>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 400px) {
  .btns {
    width: 320px;
    flex-direction: column;
    align-items: center;
  }
}

.btnOnHover:hover {
  animation: colorChange 3s infinite;
}

@media (max-width: 700px) {
  .btnWrapper {
    width: auto;
    flex-direction: column;
  }

  .btns {
    justify-content: center;
    margin: 15px;
  }
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
