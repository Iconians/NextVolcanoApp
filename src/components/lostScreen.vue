<script setup lang="ts">
const props = defineProps({
  correctAnswers: Number,
  wrongAnswers: Number
})
</script>

<template>
  <section
    class="bg-lavaVolcano text-white height h-full w-full bg-cover flex justify-center flex-col align-middle section"
  >
    <div class="gameOver bg-black/25">
      <h1 class="text-center text-3xl mb-7">Game Over</h1>
      <div class="text-center text-2xl mb-7">
        <p>would you be this close to an active volcano?</p>
      </div>
      <div class="text-2xl text-center z-10">
        <p class="m-2">Correct {{ props.correctAnswers }}</p>
        <p class="m-2">Incorrect {{ props.wrongAnswers }}</p>
      </div>
      <div class="flex flex-col justify-center align-center">
        <router-link to="/totals" class="text-center text-2xl m-2">High Scores</router-link>
        <router-link to="/" class="text-center text-2xl m-2">Return Home</router-link>
      </div>
    </div>
  </section>
</template>
