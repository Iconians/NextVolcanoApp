'use client'

import {
  updateDisplayNameAction as serverUpdateDisplayName,
  type ProfileActionResult
} from '@/app/actions/profile'

// Client-side wrapper that accepts userId and returns action compatible with useActionState
export function createUpdateDisplayNameAction(userId: string | null) {
  return async (
    prevState: ProfileActionResult | null,
    formData: FormData
  ): Promise<ProfileActionResult> => {
    if (!userId) {
      return { success: false, error: 'User ID is required' }
    }

    const displayName = formData.get('displayName')?.toString()

    if (!displayName) {
      return { success: false, error: 'Username is required' }
    }

    return serverUpdateDisplayName(userId, displayName)
  }
}
