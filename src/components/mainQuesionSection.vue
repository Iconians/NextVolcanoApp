<script setup lang="ts">
import questionForm from '@/components/questionForm.vue'
import heartsContainer from '@/components/heartsContainer.vue'
import GameStatistics from './gameStatistics.vue'
import {
  defineProps,
  defineEmits,
  ref,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  nextTick,
  type Ref
} from 'vue'

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
  },
  wrongAnswers: {
    type: Number,
    required: true
  },
  correctAnswers: Number,
  checkAnswer: Function,
  answerClass: String
})
const emit = defineEmits<{ (event: 'submit', answer: string): void }>()

const handleSubmit = (answer: string) => {
  emit('submit', answer)
}

const section1: Ref<Element | null> = ref(null)

function adjustHeight() {
  if (section1.value) {
    const element = section1.value as HTMLElement
    const height = `${element.scrollHeight}px`
    element.style.setProperty('--pseudo-element-height', height)
  }
}

onMounted(() => {
  nextTick(() => {
    if (section1.value) {
      section1.value.addEventListener('scroll', adjustHeight)
      window.addEventListener('resize', adjustHeight)
      adjustHeight()
    }
  })
})

onUpdated(adjustHeight)

onBeforeUnmount(() => {
  if (section1.value) {
    section1.value.removeEventListener('scroll', adjustHeight)
  }
  window.removeEventListener('resize', adjustHeight)
})
</script>

<template>
  <section
    class="flex justify-between bg-stHelensWithtop text-white height h-full w-full bg-cover section1 section p-0"
    :class="props.answerClass"
    ref="section1"
  >
    <div class="flex justify-around w-full">
      <GameStatistics class="game" :correctAnswers="correctAnswers" />
      <heartsContainer :wrongAnswers="wrongAnswers" />
    </div>
    <div class="main-content">
      <questionForm
        :questionsArray="props.questionsArray"
        :answerArray="props.answerArray"
        @submit="handleSubmit"
      />
    </div>
  </section>
</template>

<style scoped>
.section1 {
  position: relative;
  scrollbar-width: none;
  overflow: auto;
  --pseudo-element-height: 100%;
}

.section1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: var(--pseudo-element-height);
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
}

.game {
  margin: 25px 0;
  background-color: rgba(165, 42, 42, 0.8);
  font-size: 50px;
  padding: 25px 80px;
  border-radius: 10px;
  /* margin: 10px auto; */
  margin-top: 10px;
}

.correct {
  animation: correct 0.5s linear infinite;
}

.incorrect {
  animation: incorrect 0.5s linear infinite;
}

@media (max-width: 710px) {
  .game {
    font-size: 30px;
    padding: 15px 40px;
  }
}

@keyframes correct {
  0%,
  100% {
    border-image-source: linear-gradient(0deg, green, yellow);
  }
  25% {
    border-image-source: linear-gradient(90deg, green, yellow);
  }
  50% {
    border-image-source: linear-gradient(180deg, green, yellow);
  }
  75% {
    border-image-source: linear-gradient(270deg, green, yellow);
  }
}

@keyframes incorrect {
  0%,
  100% {
    border-image-source: linear-gradient(0deg, red, black);
  }
  25% {
    border-image-source: linear-gradient(90deg, red, black);
  }
  50% {
    border-image-source: linear-gradient(180deg, red, black);
  }
  75% {
    border-image-source: linear-gradient(270deg, red, black);
  }
}
</style>
