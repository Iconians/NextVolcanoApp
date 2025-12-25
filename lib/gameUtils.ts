import { useCurrentUser } from './auth'
import { useProfileDisplayName } from './supabase-queries'
import { updateUserScoreDirect, insertHighScoreDirect } from './score-actions'
import type { Question, Answer } from '@/types/game'
import toast from 'react-hot-toast'

export function useGameUtils(): {
  postScore: (correctAnswers: number, wrongAnswers: number) => Promise<void>
  updateHighScore: (displayName: string | null, correctAnswers: number) => Promise<void>
  sortQuestions: (questionsArray: Question[], answerArray: Answer[]) => void
  displayName: string | null
  userId: string | undefined
} {
  const auth = useCurrentUser()
  const userId = auth?.userId
  const displayName = useProfileDisplayName(userId || null)

  const postScore = async (correctAnswers: number, wrongAnswers: number) => {
    if (!userId) {
      console.warn('Cannot post score: userId is null')
      return
    }

    try {
      const result = await updateUserScoreDirect(userId, correctAnswers, wrongAnswers)
      if (result.success) {
        toast.success('Score updated')
      } else {
        toast.error(result.error || 'Error posting score')
      }
    } catch (error) {
      console.error('Error posting score:', error)
      toast.error('Error posting score')
    }
  }

  const updateHighScore = async (displayName: string | null, correctAnswers: number) => {
    if (!displayName) return

    try {
      await insertHighScoreDirect(displayName, correctAnswers)
    } catch (error) {
      console.error('Error updating high score:', error)
    }
  }

  const sortQuestions = (questionsArray: Question[], answerArray: Answer[]) => {
    questionsArray.shift()
    // Shuffle answers for the next question (answers are already shuffled on initial load)
    const nextQuestionId = questionsArray[0]?.id
    if (nextQuestionId) {
      const nextAnswer = answerArray.find((a) => a.question_foreign_key === nextQuestionId)
      if (nextAnswer && nextAnswer.answers) {
        // Only shuffle if not already shuffled (optimization)
        nextAnswer.answers.sort(() => Math.random() - 0.5)
      }
    }
  }

  return {
    postScore,
    updateHighScore,
    sortQuestions,
    displayName: displayName || null,
    userId
  }
}
