'use server'

import { supabaseServer } from '@/lib/supabase-server'
import type { Profile } from '@/types/game'

export type ProfileActionResult = {
  success: boolean
  error?: string
  data?: Profile
}

export async function updateDisplayNameAction(
  userId: string,
  displayName: string
): Promise<ProfileActionResult> {
  if (!userId) {
    return { success: false, error: 'User ID is required' }
  }

  if (!displayName) {
    return { success: false, error: 'Display name is required' }
  }

  const displayNameToUse = displayName.trim().substring(0, 3).toUpperCase()

  try {
    const { data, error } = await supabaseServer
      .from('profile')
      .update({ display_name: displayNameToUse })
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
