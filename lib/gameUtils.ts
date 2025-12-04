import moment from 'moment'
import { useQuery, useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useAuth } from './auth'
import toast from 'react-hot-toast'

export function useGameUtils() {
  const auth = useAuth()
  const userId = auth?.userId

  // @ts-expect-error - FilterApi type inference issue, mutations exist at runtime
  const updateUserScore = useMutation(api.mutations.profiles.updateUserScore)
  // @ts-expect-error - FilterApi type inference issue, mutations exist at runtime
  const insertHighScore = useMutation(api.mutations.highScores.insertHighScore)
  const getProfileDisplayName = useQuery(
    // @ts-expect-error - FilterApi type inference issue, queries exist at runtime
    api.queries.profiles.getProfileDisplayName,
    userId ? { userId } : 'skip'
  )

  const postScore = async (correctAnswers: number, wrongAnswers: number) => {
    if (!userId) return

    const timeStamp = moment().format('MMM Do YY')

    try {
      await updateUserScore({
        userId,
        correctAnswers,
        wrongAnswers,
        timeStamp
      })
      toast.success('Score updated')
    } catch (error) {
      console.error('Error posting score:', error)
      toast.error('Error posting score')
    }
  }

  const updateHighScore = async (displayName: string | null, correctAnswers: number) => {
    if (!displayName) return

    try {
      await insertHighScore({
        userName: displayName,
        score: correctAnswers
      })
    } catch (error) {
      console.error('Error updating high score:', error)
    }
  }

  const sortQuestions = (questionsArray: any[], answerArray: any[]) => {
    questionsArray.shift()
    answerArray.forEach((a) => {
      if (questionsArray.length > 0 && a.questionId === questionsArray[0]._id) {
        a.answers.sort(() => Math.random() - 0.5)
      }
    })
  }

  return {
    postScore,
    updateHighScore,
    sortQuestions,
    displayName: getProfileDisplayName,
    userId
  }
}
