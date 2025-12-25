import moment from 'moment'
import { useCurrentUser } from './auth'
import { useProfileDisplayName } from './supabase-queries'
import { updateUserScore, insertHighScore } from './supabase-mutations'
import toast from 'react-hot-toast'

export function useGameUtils() {
  const auth = useCurrentUser()
  const userId = auth?.userId
  const displayName = useProfileDisplayName(userId || null)

  const postScore = async (correctAnswers: number, wrongAnswers: number) => {
    if (!userId) {
      console.warn('Cannot post score: userId is null')
      return
    }

    const timeStamp = moment().format('MMM Do YY')

    try {
      await updateUserScore(userId, correctAnswers, wrongAnswers, timeStamp)
      toast.success('Score updated')
    } catch (error) {
      console.error('Error posting score:', error)
      toast.error('Error posting score')
    }
  }

  const updateHighScore = async (displayName: string | null, correctAnswers: number) => {
    if (!displayName) return

    try {
      await insertHighScore(displayName, correctAnswers)
    } catch (error) {
      console.error('Error updating high score:', error)
    }
  }

  const sortQuestions = (questionsArray: any[], answerArray: any[]) => {
    questionsArray.shift()
    answerArray.forEach((a) => {
      if (questionsArray.length > 0 && a.question_foreign_key === questionsArray[0]?.id) {
        a.answers.sort(() => Math.random() - 0.5)
      }
    })
  }

  return {
    postScore,
    updateHighScore,
    sortQuestions,
    displayName: displayName || null,
    userId
  }
}
