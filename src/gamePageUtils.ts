import moment from 'moment'
import { supabase } from '../supabase'
import { useToast } from 'vue-toast-notification'
// note I tried putting this file in a utils folder but it didn't work in either the src or the root directory

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

type score = {
  score: {
    correct: number
    incorrect: number
  }[]
}
const toast = useToast()

export const findUser = async () => {
  const user = await supabase.auth.getSession()
  let userId
  if (user.data.session !== null) {
    userId = user.data.session.user.id
    return userId
  } else {
    console.error('No user found')
    toast.open({
      message: 'No user found',
      type: 'error'
    })
  }
}

export const findScore = async (userId: string | null) => {
  const { data: currentScore, error: fetchError } = await supabase
    .from('profile')
    .select('score')
    .eq('user_id', userId)
  if (fetchError) {
    console.error('Error fetching score: ', fetchError)
    toast.open({
      message: 'Error fetching score',
      type: 'error'
    })
    return
  }
  return currentScore
}

export const addUserScore = async (currentScore: score[] | undefined, userId: string, correctAnswers: number, wrongAnswers: number) => {
  const newScore = { correct: correctAnswers, incorrect: wrongAnswers, timeStamp: moment().format("MMM Do YY")}
  if (currentScore !== undefined) {
  currentScore[0].score.push(newScore)
  const { error: updateError } = await supabase
    .from('profile')
    .update({ score: currentScore[0].score })
    .match({ user_id: userId })
  toast.success('Score updated')
  if (updateError) {
    console.error(updateError)
    toast.open({
      message: 'Error posting score',
      type: 'error'
    })
  }
}
}

export const findDisplayName = async (userId: string | undefined) => {
  const { data: currentScore, error: fetchError } = await supabase
    .from('profile')
    .select('display_name')
    .eq('user_id', userId)

  if (fetchError) {
    toast.open({
      message: 'Error fetching score',
      type: 'error'
    })
    return
  }
  return currentScore
}

export const updateHighScore = async (displayName: string, correctAnswers: number) => {  
  const { error } = await supabase
    .from('high_score')
    .insert({ score: correctAnswers, user_name: displayName })
  if (error) {
    console.log(error)
  }
}

export const sortQuestions = (questionsArray: questionArray[] , answerArray: answerArr[] ) => {
  questionsArray.shift()
  answerArray.forEach((a) => {
    if (questionsArray.length > 0 && a.question_foreign_key === questionsArray[0].id) {
      a.answers.sort(() => Math.random() - 0.5)
    }
  })
}