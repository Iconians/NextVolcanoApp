<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { supabase } from '../../supabase.js'
import godModeMainQuestionSection from '@/components/godModeMainQuestionSection.vue'
import lostScreen from '@/components/lostScreen.vue'
import WinScreen from '@/components/WinScreen.vue'
import { useToast } from 'vue-toast-notification'
import LoadingComponent from '@/components/loadingComponent.vue'
import {
  findUser,
  findScore,
  addUserScore,
  findDisplayName,
  updateHighScore,
  sortQuestions
} from '../gamePageUtils'

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

const questionsArray = ref<questionArray[]>([])
const answerArray = ref<answerArr[]>([])
const wrongAnswers = ref(0)
const correctAnswers = ref(0)
const loading = ref(true)
const answerSubmitted = ref(false)
const lastAnswerCorrect = ref(false)
const backgroundMusic = ref<HTMLAudioElement | null>(null)
const correctSound = ref<HTMLAudioElement | null>(null)
const incorrectSound = ref<HTMLAudioElement | null>(null)

const toast = useToast()

const playBackgroundMusic = () => {
  if (backgroundMusic.value) {
    backgroundMusic.value.play()
  }
}

const answerClass = computed(() => {
  if (answerSubmitted.value) {
    return lastAnswerCorrect.value ? 'correct' : 'incorrect'
  } else {
    return ''
  }
})

async function postScore() {
  if (questionsArray.value.length === 0 || wrongAnswers.value === 10) {
    const userId = await findUser()
    if (userId !== undefined) {
      const currentScore = await findScore(userId)
      addUserScore(currentScore, userId, correctAnswers.value, wrongAnswers.value)
    }
  }
  if (correctAnswers.value >= 50) {
    const userId = await findUser()
    const currentScore = await findDisplayName(userId)
    if (currentScore !== undefined) {
      const displayName = currentScore[0].display_name
      updateHighScore(displayName, correctAnswers.value)
    }
  }
}

const findAnswer = (correctAnswer: answerArr[], answer: string) => {
  const getAnswer = correctAnswer[0].correct_answer
  if (answer.toString() === getAnswer) {
    correctAnswers.value++
    answerSubmitted.value = true
    lastAnswerCorrect.value = true
    if (correctSound.value) {
      correctSound.value.play()
    }
  } else {
    wrongAnswers.value++
    answerSubmitted.value = true
    lastAnswerCorrect.value = false
    if (incorrectSound.value) {
      incorrectSound.value.play()
    }
  }
}

const checkAnswer = async (answer: string) => {
  const correctAnswer = answerArray.value.filter(
    (a) => a.question_foreign_key === questionsArray.value[0].id
  )

  if (correctAnswer.length > 0) {
    findAnswer(correctAnswer, answer)
  }

  if (wrongAnswers.value === 10) {
    await postScore()
    return
  }

  if (questionsArray.value.length > 0) {
    sortQuestions(questionsArray.value, answerArray.value)
  }
  if (correctAnswers.value + wrongAnswers.value === 100 && wrongAnswers.value < 3) {
    await postScore()
  }
  setTimeout(() => {
    answerSubmitted.value = false
  }, 800)
}

const getAnswersFromSupabase = async () => {
  if (questionsArray.value.length > 0) {
    const questionIds = questionsArray.value.map((question) => question.id)
    supabase
      .from('answers')
      .select('*')
      .in('question_foreign_key', questionIds)
      .then(({ data, error }) => {
        if (error) toast.error('Error in api method')
        else {
          const answers: answerArr[] = data
          if (answers.length > 0) {
            answerArray.value = answers
          }
        }
      })
    answerArray.value.forEach((a) => {
      if (a.question_foreign_key === questionsArray.value[0].id) {
        a.answers.sort(() => Math.random() - 0.5)
      }
    })
    loading.value = false
  }
}

supabase
  .from('questions')
  .select('*')
  .then(({ data: questions, error }) => {
    if (error) toast.error('Error in api method')
    else {
      let num = 100
      while (num > 0) {
        const randomQuestion = Math.floor(Math.random() * questions.length)
        const questionArr = questionsArray.value.map((question) => question.question)
        const currentQuestion = questions[randomQuestion].question
        if (!questionArr.includes(currentQuestion)) {
          questionsArray.value = [...questionsArray.value, questions[randomQuestion]]
          num--
        } else {
          num--
        }
      }
    }
    getAnswersFromSupabase()
  })

onMounted(playBackgroundMusic)
</script>

<template>
  <god-mode-main-question-section
    v-if="questionsArray.length > 0 && wrongAnswers < 10 && !loading"
    :questionsArray="questionsArray"
    :answerArray="answerArray"
    :wrongAnswers="wrongAnswers"
    :correctAnswers="correctAnswers"
    :class="answerClass"
    @submit="checkAnswer"
  />
  <lost-screen
    v-else-if="wrongAnswers === 10 && !loading"
    :correctAnswers="correctAnswers"
    :wrongAnswers="wrongAnswers"
  />
  <win-screen v-else-if="!loading" :correctAnswers="correctAnswers" :wrongAnswers="wrongAnswers" />
  <loading-component v-if="loading" />
  <audio ref="backgroundMusic" src="lava-loop-3.wav" autoplay loop></audio>
  <audio ref="correctSound" src="/correct.mp3"></audio>
  <audio ref="incorrectSound" src="/wronganswer.mp3"></audio>
</template>
