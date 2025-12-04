<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
// in ths component I am making mobile responsive,

type questionArray = {
  id: string
  created_at: string
  question: string
}

type answerArr = {
  id: string
  created_at: string
  answers: string[]
  correct_answer: string
  question_foreign_key: string
}

const props = defineProps({
  questionsArray: {
    type: Array as () => questionArray[],
    required: true
  },
  answerArray: {
    type: Array as () => answerArr[],
    required: true
  }
})
const emit = defineEmits<{ (event: 'submit', answer: string): void }>()

const checkAnswer = (answer: string) => {
  emit('submit', answer)
}
</script>

<template>
  <div>
    <div>
      <div
        v-for="(answerObj, index) in props.answerArray.filter(
          (a) => questionsArray.length > 0 && a.question_foreign_key === questionsArray[0].id
        )"
        :key="'answerObj-' + index"
        class="flex flex-col justify-around w-[1200px] h-[450px] questionForm"
      >
        <h2 class="text-2xl mb-4 w-3/4 mx-auto text-center">{{ questionsArray[0].question }}</h2>

        <div class="flex justify-around dashboard">
          <div
            v-for="(answer, subIndex) in answerObj.answers"
            :key="'answer-' + index + '-' + subIndex"
            class="m-5 cursor-pointer flex flex-col items-center"
          >
            <p class="mb-2 text-lg text-center">{{ answer }}</p>
            <button
              class="cursor-pointer questionInputs text-2xl rounded p-1 min-w-20 min-h-20 max-w-20 background-color"
              :name="'answer-' + index"
              :id="'answer-' + index + '-' + subIndex"
              @click="checkAnswer(answer)"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.questionForm {
  position: relative;
  z-index: 2;
}

.dashboard {
  background: radial-gradient(circle, #2d2d2d, #2d2d2d 2px, #1d1d1d 1px, #1d1d1d 2px, #1d1d1d 2px);
  background-size: 28px 28px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
}

.background-color {
  animation: colorChange 3s infinite;
  border-radius: 50%;
  position: relative;
  border-radius: 50%;
  box-shadow: 0 10px #660000;
  transition: all 0.2s linear;
}

.background-color:hover {
  box-shadow: 0 5px #660000;
  transform: translateY(5px);
  background: radial-gradient(circle at 50% 50%, transparent 20%, #ff0000 20%);
}

@media (max-width: 900px) {
  .questionForm {
    width: 80%;
    height: 100%;
    margin: auto;
  }
}

@media (max-width: 400px) {
  .formBtn {
    width: 80%;
    margin: auto;
  }
}

@keyframes colorChange {
  0% {
    background-color: red;
  }
  50% {
    background-color: yellow;
  }
  100% {
    background-color: red;
  }
}
</style>
