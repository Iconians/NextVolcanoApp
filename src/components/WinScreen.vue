<script setup lang="ts">
const props = defineProps({
  correctAnswers: Number,
  wrongAnswers: Number
})
</script>

<template>
  <section
    class="mt-45 flex justify-center flex-col align-middle bg-stHelensWithPlume text-white height h-full w-full bg-cover background section"
  >
    <div class="text-3xl text-center z-10">
      <p class="m-2">Correct {{ props.correctAnswers }}</p>
      <p class="m-2">Incorrect {{ props.wrongAnswers }}</p>
    </div>
    <div class="flex flex-col justify-center align-center z-10">
      <router-link to="/totals" class="text-center text-3xl m-2">High Scores</router-link>
      <router-link to="/" class="text-center text-3xl m-2">Return Home</router-link>
    </div>
  </section>
</template>

<style scoped>
.background {
  position: relative;
}

.background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}
</style>
