'use client'

import { supabase } from './supabase'
import { Profile, HighScore } from './supabase-queries'

// Create or update user profile
export async function createProfile(userId: string, displayName?: string) {
  const { data, error } = await supabase
    .from('profile')
    .insert({
      user_id: userId,
      display_name: displayName || 'USR',
      score: []
    })
    .select()
    .single()

  if (error) throw error
  return data
}

// Ensure profile exists (create if doesn't exist)
export async function ensureProfile(userId: string, displayName?: string) {
  // Check if profile exists
  const { data: existing } = await supabase
    .from('profile')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (existing) {
    return existing
  }

  // Create new profile
  return createProfile(userId, displayName)
}

// Update user score
export async function updateUserScore(
  userId: string,
  correctAnswers: number,
  wrongAnswers: number,
  timeStamp: string
) {
  // Get current profile
  const { data: profile, error: fetchError } = await supabase
    .from('profile')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (fetchError && fetchError.code !== 'PGRST116') {
    throw fetchError
  }

  // If no profile, create one
  if (!profile) {
    await ensureProfile(userId)
  }

  // Get updated profile
  const { data: updatedProfile, error: getError } = await supabase
    .from('profile')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (getError) throw getError

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
  const { data, error } = await supabase
    .from('profile')
    .update({ score: newScores })
    .eq('user_id', userId)
    .select()
    .single()

  if (error) throw error
  return data
}

// Update display name
export async function updateDisplayName(userId: string, displayName: string) {
  const { data, error } = await supabase
    .from('profile')
    .update({ display_name: displayName })
    .eq('user_id', userId)
    .select()
    .single()

  if (error) throw error
  return data
}

// Insert high score
export async function insertHighScore(userName: string, score: number) {
  const { data, error } = await supabase
    .from('high_score')
    .insert({
      user_name: userName,
      score: score
    })
    .select()
    .single()

  if (error) throw error
  return data
}
