<script setup lang="ts">
import { defineProps, defineComponent } from 'vue'

const props = defineProps({
  correctAnswers: Number
})

defineComponent({
  name: 'gameStatistics'
})
</script>

<template>
  <div class="h-fit mt-5 statistics z-10 text-2xl">
    <p>Correct {{ props.correctAnswers }}</p>
  </div>
</template>

<style scoped>
@media (max-width: 600px) {
  .statistics {
    margin: 25px auto;
  }
}
</style>
