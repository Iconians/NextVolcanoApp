'use server'

import { supabaseServer } from '@/lib/supabase-server'
import type { Profile, HighScore } from '@/types/game'

export type ScoreActionResult = {
  success: boolean
  error?: string
  data?: Profile | HighScore
}

// Helper to format date
function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: '2-digit'
  }).format(date)
}

export async function updateUserScoreAction(
  userId: string,
  correctAnswers: number,
  wrongAnswers: number
): Promise<ScoreActionResult> {
  if (!userId) {
    return { success: false, error: 'User ID is required' }
  }

  const timeStamp = formatDate(new Date())

  try {
    // Get current profile
    const { data: profile, error: fetchError } = await supabaseServer
      .from('profile')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (fetchError && fetchError.code !== 'PGRST116') {
      return { success: false, error: fetchError.message }
    }

    // If no profile, create one
    if (!profile) {
      const { error: createError } = await supabaseServer.from('profile').insert({
        user_id: userId,
        display_name: 'USR',
        score: []
      })

      if (createError) {
        return { success: false, error: createError.message }
      }
    }

    // Get updated profile
    const { data: updatedProfile, error: getError } = await supabaseServer
      .from('profile')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (getError) {
      return { success: false, error: getError.message }
    }

    // Add new score
    const newScores = [
      ...(updatedProfile.score || []),
      {
        correct: correctAnswers,
        incorrect: wrongAnswers,
        time_stamp: timeStamp
      }
    ]

    // Update profile with new scores
    const { data, error } = await supabaseServer
      .from('profile')
      .update({ score: newScores })
      .eq('user_id', userId)
      .select()
      .single()

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    }
  }
}

export async function insertHighScoreAction(
  userName: string,
  score: number
): Promise<ScoreActionResult> {
  if (!userName) {
    return { success: false, error: 'User name is required' }
  }

  try {
    const { data, error } = await supabaseServer
      .from('high_score')
      .insert({
        user_name: userName,
        score: score
      })
      .select()
      .single()

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    }
  }
}
