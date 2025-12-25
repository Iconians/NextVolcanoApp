'use client'

import {
  updateUserScoreAction as serverUpdateUserScore,
  insertHighScoreAction as serverInsertHighScore,
  type ScoreActionResult
} from '@/app/actions/scores'

// Client-side wrapper actions that can be used with useActionState
export function createUpdateUserScoreAction(userId: string | null) {
  return async (
    prevState: ScoreActionResult | null,
    formData: FormData
  ): Promise<ScoreActionResult> => {
    if (!userId) {
      return { success: false, error: 'User ID is required' }
    }

    const correctAnswers = parseInt(formData.get('correctAnswers')?.toString() || '0', 10)
    const wrongAnswers = parseInt(formData.get('wrongAnswers')?.toString() || '0', 10)

    return serverUpdateUserScore(userId, correctAnswers, wrongAnswers)
  }
}

export function createInsertHighScoreAction() {
  return async (
    prevState: ScoreActionResult | null,
    formData: FormData
  ): Promise<ScoreActionResult> => {
    const userName = formData.get('userName')?.toString()
    const score = parseInt(formData.get('score')?.toString() || '0', 10)

    if (!userName) {
      return { success: false, error: 'User name is required' }
    }

    return serverInsertHighScore(userName, score)
  }
}

// Direct call functions (for non-form usage)
export async function updateUserScoreDirect(
  userId: string,
  correctAnswers: number,
  wrongAnswers: number
): Promise<ScoreActionResult> {
  return serverUpdateUserScore(userId, correctAnswers, wrongAnswers)
}

export async function insertHighScoreDirect(
  userName: string,
  score: number
): Promise<ScoreActionResult> {
  return serverInsertHighScore(userName, score)
}
