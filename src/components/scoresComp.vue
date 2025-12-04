<script setup lang="ts">
import { defineProps } from 'vue'

type Score = {
  user_name: string
  score: number
}

const props = defineProps({
  scores: {
    type: Array as () => Score[] | null,
    required: true
  }
})
</script>

<template>
  <div class="overflow-y-auto h-52 scroll">
    <div class="flex m-5 justify-center text-2xl" v-for="score in props.scores" :key="score.score">
      <div class="mr-3">{{ score.user_name }}</div>
      <div>{{ score.score }}</div>
    </div>
  </div>
</template>
