<script setup lang="ts">
import { defineProps } from 'vue'

interface Score {
  correct: number
  incorrect: number
  timeStamp: string | null | undefined
}

const props = defineProps({
  userScore: {
    type: Array as () => Score[],
    required: true
  }
})
</script>

<template>
  <div class="mb-[30px]">
    <div class="text-2xl">Score History</div>
    <div>
      <div class="h-[500px] overflow-y-auto scroll w-[700px] flex flex-wrap score-wrapper">
        <div
          v-for="score in props.userScore"
          :key="score.correct"
          class="flex flex-col outline-dashed m-5 w-[300px] card"
        >
          <div
            v-if="props.userScore.length && score.timeStamp !== undefined"
            class="m-2 text-xl text-start"
          >
            {{ score.timeStamp }}
          </div>
          <div>
            <div v-if="props.userScore.length" class="m-2 text-xl">
              Correct: {{ score.correct }}
            </div>
            <div v-if="props.userScore.length" class="m-2 text-xl">
              Incorrect: {{ score.incorrect }}
            </div>
          </div>
        </div>
        <div v-if="!props.userScore.length" class="m-2 text-xl w-32">
          no score to show go play a few rounds to see results
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll::-webkit-scrollbar {
  width: 10px;
}

.scroll::-webkit-scrollbar-track {
  background: none;
}

@media (max-width: 920px) {
  .score-wrapper {
    width: auto;
    margin: auto;
  }
  .card {
    margin: 1.25rem auto;
  }
}

@media (max-width: 500px) {
  .card {
    width: 200px;
  }
}
</style>
